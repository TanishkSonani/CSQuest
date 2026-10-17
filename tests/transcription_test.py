"""Transcription infrastructure tests; no model, GPU, or recording drive required."""
import contextlib
import importlib.util
import io
import json
import os
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import Mock, patch

spec = importlib.util.spec_from_file_location("transcribe", Path(__file__).resolve().parent.parent / "scripts" / "transcribe.py")
transcribe = importlib.util.module_from_spec(spec)
spec.loader.exec_module(transcribe)


class AudioContainer:
    duration = 60_000_000
    streams = SimpleNamespace(audio=[object()])

    def __enter__(self):
        return self

    def __exit__(self, *args):
        return False


class TranscriptionTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory(prefix="csquest-transcription-test-")
        self.root = Path(self.temporary.name)
        self.assertEqual(self.root.parent.resolve(), Path(tempfile.gettempdir()).resolve())
        self.assertTrue(self.root.name.startswith("csquest-transcription-test-"))
        self.source = self.root / "source"
        self.source.mkdir()
        self.course = {"id": "example", "sourceFolder": "Example"}
        self.av = SimpleNamespace(open=lambda _: AudioContainer(), time_base=1_000_000)
        self.root_patch = patch.object(transcribe, "ROOT", self.root)
        self.source_patch = patch.object(transcribe, "source_directory", return_value=self.source)
        self.root_patch.start()
        self.source_patch.start()
        self.addCleanup(self.temporary.cleanup)
        self.addCleanup(self.root_patch.stop)
        self.addCleanup(self.source_patch.stop)

    def recording(self, name):
        file = self.source / name
        file.parent.mkdir(parents=True, exist_ok=True)
        file.write_bytes(b"metadata fixture")

    def inventory(self):
        with contextlib.redirect_stdout(io.StringIO()):
            return transcribe.inventory(self.course, self.av)

    def test_nested_duplicates_get_distinct_stable_transcript_keys(self):
        self.recording("Part1/001.mp4")
        self.recording("Done/001.mp4")
        self.recording("Done/002.mp4")
        rows = self.inventory()
        self.assertEqual(len(rows), 3)
        keys = [row.get("transcriptStem", Path(row["file"]).stem) for row in rows]
        self.assertEqual(len(set(keys)), 3)
        self.assertEqual(self.inventory(), rows)
        self.recording("000.mp4")
        extended = self.inventory()
        self.assertEqual(extended[:3], rows)
        self.assertEqual(extended[3]["file"], "000.mp4")
        (self.source / "Done/002.mp4").unlink()
        with self.assertRaisesRegex(RuntimeError, "lose existing lecture IDs"):
            self.inventory()
        stored = json.loads((transcribe.output_directory(self.course) / "inventory.json").read_text())
        self.assertEqual(stored, extended)

    def test_resume_skips_completed_recordings_and_publishes_full_timestamped_output(self):
        self.recording("001.mp4")
        self.recording("Done/002.mp4")
        self.inventory()
        segment = SimpleNamespace(start=0, end=1, text="spoken topic", avg_logprob=-0.1, no_speech_prob=0.01)
        model = Mock()
        model.transcribe.side_effect = lambda *args, **kwargs: (iter([segment]), SimpleNamespace(language="en", language_probability=1))
        args = SimpleNamespace(batch=False, gpu=False)
        with contextlib.redirect_stdout(io.StringIO()):
            transcribe.transcribe(self.course, model, args, self.av)
            transcribe.transcribe(self.course, model, args, self.av)
        self.assertEqual(model.transcribe.call_count, 2)
        output = transcribe.output_directory(self.course) / "transcripts"
        self.assertEqual(len(list(output.glob("*.done"))), 2)
        self.assertEqual(json.loads((output / "002.jsonl").read_text())["text"], "spoken topic")
        self.assertIn("00:00:00,000 --> 00:00:01,000", (output / "002.srt").read_text())

    def test_empty_recognition_never_publishes_completion(self):
        self.recording("001.mp4")
        self.inventory()
        model = Mock()
        model.transcribe.return_value = (iter([]), SimpleNamespace(language="en", language_probability=1))
        with contextlib.redirect_stdout(io.StringIO()), self.assertRaisesRegex(RuntimeError, "No speech segments"):
            transcribe.transcribe(self.course, model, SimpleNamespace(batch=False, gpu=False), self.av)
        self.assertFalse((transcribe.output_directory(self.course) / "transcripts/001.done").exists())

    def test_resume_honors_an_intentional_skip_and_continues(self):
        self.recording("001.mp4")
        self.recording("002.mp4")
        self.inventory()
        output = transcribe.output_directory(self.course) / "transcripts"
        output.mkdir(parents=True, exist_ok=True)
        (output / "001.skip").write_text(json.dumps({"reason": "Damaged source audio"}), encoding="utf-8")
        segment = SimpleNamespace(start=0, end=1, text="spoken topic", avg_logprob=-0.1, no_speech_prob=0.01)
        model = Mock()
        model.transcribe.return_value = (iter([segment]), SimpleNamespace(language="en", language_probability=1))
        with contextlib.redirect_stdout(io.StringIO()):
            transcribe.transcribe(self.course, model, SimpleNamespace(batch=False, gpu=False), self.av)
        self.assertEqual(model.transcribe.call_count, 1)
        self.assertTrue((output / "002.done").exists())
        status = json.loads((transcribe.output_directory(self.course) / "status.json").read_text())
        self.assertEqual(status["skipped"], [{"file": "001.mp4", "reason": "Damaged source audio"}])

    def test_skip_errors_marks_only_the_failed_recording_and_continues(self):
        self.recording("001.mp4")
        self.recording("002.mp4")
        self.inventory()
        segment = SimpleNamespace(start=0, end=1, text="spoken topic", avg_logprob=-0.1, no_speech_prob=0.01)
        model = Mock()
        model.transcribe.side_effect = [RuntimeError("damaged packet"), (iter([segment]), SimpleNamespace(language="en", language_probability=1))]
        with contextlib.redirect_stdout(io.StringIO()):
            transcribe.transcribe(self.course, model, SimpleNamespace(batch=False, gpu=False, skip_errors=True), self.av)
        output = transcribe.output_directory(self.course) / "transcripts"
        self.assertEqual(json.loads((output / "001.skip").read_text())["reason"], "RuntimeError: damaged packet")
        self.assertTrue((output / "002.done").exists())
        self.assertEqual(json.loads((transcribe.output_directory(self.course) / "status.json").read_text())["skipped"], [{"file": "001.mp4", "reason": "RuntimeError: damaged packet"}])

    def test_worker_identity_probe_recognizes_current_process(self):
        self.assertTrue(transcribe.process_running(os.getpid()))


if __name__ == "__main__":
    unittest.main()
