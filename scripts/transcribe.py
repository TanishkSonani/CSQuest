"""Shared, resumable lecture transcription. Models and GPU packages stay local."""
import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
import time
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOOLS = ROOT / "tooling" / "transcription"
EXTENSIONS = {".mp4", ".mkv", ".mov", ".avi", ".webm"}


def manifests():
    return sorted((json.loads(p.read_text(encoding="utf-8")) for p in (ROOT / "courses").glob("*/course.json")), key=lambda c: (c.get("order", 100), c["id"]))


def source_directory(course):
    key = course["id"].upper().replace("-", "_") + "_SOURCE"
    return Path(os.environ.get(key) or Path(os.environ.get("CSQUEST_SOURCE_ROOT", r"K:\Gate\GO CSE")) / course["sourceFolder"])


def output_directory(course):
    return ROOT / "courses" / course["id"] / "data" / "source-analysis"


def write_json(file, value):
    file.parent.mkdir(parents=True, exist_ok=True)
    temporary = file.with_name(file.name + ".tmp")
    temporary.write_text(json.dumps(value, indent=2, ensure_ascii=False), encoding="utf-8")
    temporary.replace(file)


def setup_audio():
    sys.path.insert(0, str(TOOLS / "python-packages"))
    os.environ["HF_HOME"] = str(TOOLS / "model-cache")
    os.environ["HF_HUB_DISABLE_SYMLINKS_WARNING"] = "1"
    os.environ["HF_HUB_DISABLE_XET"] = "1"
    handles = []
    for folder in (TOOLS / "python-packages" / "nvidia").glob("*/bin"):
        if os.name == "nt":
            handles.append(os.add_dll_directory(str(folder)))
        os.environ["PATH"] = str(folder) + os.pathsep + os.environ["PATH"]
    import av
    original_open = av.open

    def compatible_open(*args, **kwargs):
        kwargs.pop("metadata_errors", None)
        return original_open(*args, **kwargs)

    av.open = compatible_open
    return av, handles


def inventory(course, av):
    source, output = source_directory(course), output_directory(course)
    if not source.is_dir():
        raise FileNotFoundError(f"Recording directory unavailable: {source}")
    paths = [p for p in source.rglob("*") if p.is_file() and p.suffix.lower() in EXTENSIONS and "analysis" not in p.relative_to(source).parts]
    paths.sort(key=lambda p: (int(re.match(r"\d+", p.name)[0]) if re.match(r"\d+", p.name) else 999999, p.relative_to(source).as_posix().lower()))
    old_file = output / "inventory.json"
    old = json.loads(old_file.read_text(encoding="utf-8")) if old_file.exists() else []
    by_file = {p.relative_to(source).as_posix(): p for p in paths}
    # Existing row indices are lesson/source IDs; preserve them on repeated scans.
    missing = [row["file"] for row in old if row["file"] not in by_file]
    if missing:
        raise RuntimeError(f"Inventory would lose existing lecture IDs; missing: {missing}")
    old_names = {row["file"] for row in old}
    ordered = [by_file[row["file"]] for row in old] + [p for p in paths if p.relative_to(source).as_posix() not in old_names]
    stems = Counter(p.stem for p in paths)
    previous = {row["file"]: row for row in old}
    rows = []
    for p in ordered:
        relative = p.relative_to(source).as_posix()
        with av.open(str(p)) as container:
            seconds = container.duration / av.time_base if container.duration else None
            audio_streams = len(container.streams.audio)
        prior = previous.get(relative)
        row = {"file": relative, "seconds": seconds, "audio_streams": audio_streams, "bytes": p.stat().st_size}
        if prior and "transcriptStem" in prior:
            row["transcriptStem"] = prior["transcriptStem"]
        elif stems[p.stem] > 1 and not prior:
            row["transcriptStem"] = p.stem + "-" + hashlib.sha256(relative.encode()).hexdigest()[:12]
        rows.append(row)
    keys = [row.get("transcriptStem", Path(row["file"]).stem) for row in rows]
    if len(set(keys)) != len(keys):
        raise RuntimeError("Existing recordings have colliding transcript names; resolve before transcribing.")
    write_json(old_file, rows)
    print(json.dumps({"subject": course["id"], "videos": len(rows), "hours": sum(row["seconds"] or 0 for row in rows) / 3600}), flush=True)
    return rows


def process_running(pid):
    if os.name == "nt":
        import ctypes
        kernel = ctypes.WinDLL("kernel32", use_last_error=True)
        kernel.OpenProcess.restype = ctypes.c_void_p
        kernel.GetExitCodeProcess.argtypes = [ctypes.c_void_p, ctypes.POINTER(ctypes.c_ulong)]
        kernel.CloseHandle.argtypes = [ctypes.c_void_p]
        handle = kernel.OpenProcess(0x1000, False, int(pid))
        if not handle:
            return False
        code = ctypes.c_ulong()
        try:
            return bool(kernel.GetExitCodeProcess(handle, ctypes.byref(code))) and code.value == 259
        finally:
            kernel.CloseHandle(handle)
    try:
        os.kill(int(pid), 0)
        return True
    except ProcessLookupError:
        return False


def subtitle_stamp(seconds):
    milliseconds = round(seconds * 1000)
    hours, milliseconds = divmod(milliseconds, 3600000)
    minutes, milliseconds = divmod(milliseconds, 60000)
    seconds, milliseconds = divmod(milliseconds, 1000)
    return f"{hours:02}:{minutes:02}:{seconds:02},{milliseconds:03}"


def transcribe(course, model, args, av):
    output = output_directory(course)
    inventory_file = output / "inventory.json"
    rows = json.loads(inventory_file.read_text(encoding="utf-8")) if inventory_file.exists() else inventory(course, av)
    destination = output / "transcripts"
    destination.mkdir(parents=True, exist_ok=True)
    inference = model
    if args.batch:
        from faster_whisper import BatchedInferencePipeline
        inference = BatchedInferencePipeline(model=model)
    for row in rows:
        stem = row.get("transcriptStem", Path(row["file"]).stem)
        complete = destination / (stem + ".done")
        if complete.exists():
            continue
        file = source_directory(course) / row["file"]
        if not file.is_file():
            raise FileNotFoundError(f"Recording drive unavailable: {file}")
        if not row.get("audio_streams", 1):
            raise RuntimeError(f"Recording has no audio: {row['file']}")
        write_json(output / "worker.json", {"pid": os.getpid(), "subject": course["id"], "script": str(Path(__file__).resolve())})
        write_json(output / "status.json", {"phase": "transcribing", "current_video": row["file"], "device": "cuda" if args.gpu else "cpu"})
        print(f"START {course['id']}: {row['file']}", flush=True)
        began = time.time()
        kwargs = {"batch_size": 4, "word_timestamps": True} if args.batch else {}
        segments, info = inference.transcribe(str(file), beam_size=5, vad_filter=True, condition_on_previous_text=False, **kwargs)
        # Rewrite interrupted output. The importer only reads after the done marker.
        with (destination / (stem + ".jsonl")).open("w", encoding="utf-8") as text, (destination / (stem + ".srt")).open("w", encoding="utf-8") as subtitles:
            count = 0
            for count, segment in enumerate(segments, 1):
                text.write(json.dumps({"start": segment.start, "end": segment.end, "text": segment.text, "avg_logprob": segment.avg_logprob, "no_speech_prob": segment.no_speech_prob}, ensure_ascii=False) + "\n")
                text.flush()
                subtitles.write(f"{count}\n{subtitle_stamp(segment.start)} --> {subtitle_stamp(segment.end)}\n{segment.text.strip()}\n\n")
                subtitles.flush()
                print(f"{segment.start:.1f}-{segment.end:.1f} {segment.text}", flush=True)
        if not count:
            raise RuntimeError(f"No speech segments produced: {row['file']}")
        write_json(complete, {"file": row["file"], "language": info.language, "probability": info.language_probability, "processing_seconds": time.time() - began, "device": "cuda" if args.gpu else "cpu"})
        print(f"DONE {course['id']}: {row['file']}", flush=True)
    write_json(output / "status.json", {"phase": "transcription_complete_analysis_pending"})


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    choice = parser.add_mutually_exclusive_group()
    choice.add_argument("--subject")
    choice.add_argument("--all", action="store_true", help="Process every manifest sequentially using one model")
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument("--list", action="store_true")
    action.add_argument("--inventory", action="store_true")
    action.add_argument("--transcribe", action="store_true")
    action.add_argument("--launch", action="store_true")
    parser.add_argument("--gpu", action="store_true")
    parser.add_argument("--batch", action="store_true")
    args = parser.parse_args()
    courses = manifests()
    if args.subject:
        courses = [c for c in courses if c["id"] == args.subject]
        if not courses:
            parser.error("Unknown subject")
    elif not args.all and not args.list:
        parser.error("Choose --subject ID or --all")
    if args.list:
        print(json.dumps([{"id": c["id"], "source": str(source_directory(c)), "status": c["status"]} for c in courses], indent=2))
        return
    runtime = ROOT / "runtime"
    lock = runtime / "transcriber.json"
    if args.launch or args.transcribe:
        prior = json.loads(lock.read_text(encoding="utf-8")) if lock.exists() else {}
        if prior.get("pid") != os.getpid() and prior.get("pid") and process_running(prior["pid"]):
            raise RuntimeError("A shared transcription worker is already running.")
    if args.launch:
        runtime.mkdir(exist_ok=True)
        command = [sys.executable, str(Path(__file__).resolve()), "--transcribe"]
        command += ["--subject", args.subject] if args.subject else ["--all"]
        if args.gpu:
            command.append("--gpu")
        if args.batch:
            command.append("--batch")
        with (runtime / "transcription.log").open("a", encoding="utf-8") as log:
            process = subprocess.Popen(command, stdout=log, stderr=subprocess.STDOUT, creationflags=subprocess.CREATE_NO_WINDOW if os.name == "nt" else 0)
        write_json(lock, {"pid": process.pid, "subject": args.subject or "all", "script": str(Path(__file__).resolve())})
        print(f"Background transcription PID {process.pid}")
        return
    av, dll_handles = setup_audio()
    if args.inventory:
        for course in courses:
            inventory(course, av)
        return
    write_json(lock, {"pid": os.getpid(), "subject": args.subject or "all", "script": str(Path(__file__).resolve())})
    from faster_whisper import WhisperModel
    model = WhisperModel("small", device="cuda" if args.gpu else "cpu", compute_type="float16" if args.gpu else "int8", cpu_threads=max(1, min(8, os.cpu_count() or 4)), download_root=str(TOOLS / "work" / "model"))
    for course in courses:
        try:
            transcribe(course, model, args, av)
        except Exception as error:
            status_file = output_directory(course) / "status.json"
            previous = json.loads(status_file.read_text(encoding="utf-8")) if status_file.exists() else {}
            write_json(status_file, {**previous, "phase": "failed", "error": str(error)})
            raise


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    main()
