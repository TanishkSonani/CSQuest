"""Explicitly re-transcribe selected completed sources without exposing partial replacements."""
import argparse
import importlib.util
import json
import os
import shutil
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("shared_transcriber", ROOT / "scripts" / "transcribe.py")
shared = importlib.util.module_from_spec(spec)
spec.loader.exec_module(shared)

STATUS_FILE = None

def main():
    global STATUS_FILE
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--subject", required=True)
    parser.add_argument("--ids", type=int, nargs="+", required=True)
    args = parser.parse_args()
    course = next(c for c in shared.manifests() if c["id"] == args.subject)
    lock = ROOT / "runtime" / "transcriber.json"
    prior = json.loads(lock.read_text()) if lock.exists() else {}
    if prior.get("pid") and shared.process_running(prior["pid"]):
        raise RuntimeError("A transcription worker is already running.")
    shared.write_json(lock, {"pid": os.getpid(), "subject": args.subject, "repairIds": args.ids, "script": str(Path(__file__).resolve())})
    av, dll_handles = shared.setup_audio()
    from faster_whisper import WhisperModel, BatchedInferencePipeline
    model = WhisperModel("small", device="cuda", compute_type="float16", download_root=str(shared.TOOLS / "work" / "model"))
    inference = BatchedInferencePipeline(model=model)
    output = shared.output_directory(course)
    STATUS_FILE = output / "status.json"
    rows = json.loads((output / "inventory.json").read_text(encoding="utf-8"))
    if any(source_id < 0 or source_id >= len(rows) for source_id in args.ids):
        raise ValueError("Repair IDs must refer to existing inventory rows.")
    backup = ROOT / "runtime" / "transcript-repair-backups" / args.subject
    backup.mkdir(parents=True, exist_ok=True)
    for source_id in args.ids:
        row = rows[source_id]
        stem = row.get("transcriptStem", Path(row["file"]).stem)
        folder = output / "transcripts"
        for suffix in [".jsonl", ".srt", ".done"]:
            original = folder / (stem + suffix)
            destination = backup / (str(source_id) + suffix)
            if original.exists() and not destination.exists():
                shutil.copy2(original, destination)
        shared.write_json(output / "worker.json", {"pid": os.getpid(), "subject": args.subject, "script": str(Path(__file__).resolve())})
        shared.write_json(output / "status.json", {"phase": "repairing_transcript", "current_video": row["file"], "device": "cuda"})
        print(f"REPAIR START {source_id}: {row['file']}", flush=True)
        began = time.time()
        segments, info = inference.transcribe(str(shared.source_directory(course) / row["file"]), language="en", batch_size=4, beam_size=5, vad_filter=True, condition_on_previous_text=False, repetition_penalty=1.15, no_repeat_ngram_size=4)
        count = 0
        with (folder / (stem + ".jsonl.tmp")).open("w", encoding="utf-8") as text, (folder / (stem + ".srt.tmp")).open("w", encoding="utf-8") as subtitles:
            for count, segment in enumerate(segments, 1):
                text.write(json.dumps({"start": segment.start, "end": segment.end, "text": segment.text, "avg_logprob": segment.avg_logprob, "no_speech_prob": segment.no_speech_prob}, ensure_ascii=False) + "\n")
                subtitles.write(f"{count}\n{shared.subtitle_stamp(segment.start)} --> {shared.subtitle_stamp(segment.end)}\n{segment.text.strip()}\n\n")
                print(f"{source_id} {segment.start:.1f}-{segment.end:.1f} {segment.text}", flush=True)
        if not count:
            raise RuntimeError("Replacement contains no speech: " + row["file"])
        for suffix in [".jsonl", ".srt"]:
            (folder / (stem + suffix + ".tmp")).replace(folder / (stem + suffix))
        shared.write_json(folder / (stem + ".done"), {"file": row["file"], "language": info.language, "probability": info.language_probability, "processing_seconds": time.time() - began, "device": "cuda", "repairCompletedAt": datetime.now(timezone.utc).isoformat(), "forcedLanguage": "en"})
        print(f"REPAIR DONE {source_id}", flush=True)
    shared.write_json(output / "status.json", {"phase": "transcription_complete_analysis_pending"})

if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    try:
        main()
    except Exception as error:
        if STATUS_FILE and STATUS_FILE.exists():
            status = json.loads(STATUS_FILE.read_text(encoding='utf-8'))
            if status.get('phase') == 'repairing_transcript':
                shared.write_json(STATUS_FILE, {**status, 'phase': 'repair_failed_existing_preserved', 'error': str(error)})
        raise
