# Adding and publishing subjects

All current K: subject folders already have a scaffold. For a new folder, create `courses/<id>/{content,authoring,data/transcripts,data/source-analysis}` and a `course.json` matching `config/course.schema.json`. The folder name must equal the manifest ID. Choose a unique, permanent `storageKey`; changing it would disconnect existing browser progress. Start with `status: "planned"`.

1. Run `npm run catalog` to refresh recursive recording discovery and manifest counts. This does not transcribe audio. Duration inventories are separate from `source-files.json`.
2. Run `python scripts/transcribe.py --subject <id> --inventory` to measure recordings and establish stable lecture IDs. Repeat scans retain existing IDs. Use `--all --inventory` for every registered subject.
3. Run `python scripts/transcribe.py --subject <id> --launch --gpu --batch` to launch resumable speech recognition. Use `--all` in place of `--subject <id>` for a sequential queue. Completed recordings are skipped; one shared worker protects GPU memory. Logs and the shared worker record live in `runtime`.
4. Run `npm run sync -- <id>`, or leave the launcher running. Completed transcripts are imported into the subject's `data/transcripts`; planned subjects are imported too. A `.done` marker is required. Keep the numbered imported transcript and its timestamp evidence as the source for teaching.
5. Author `content/curriculum.js` (`units`, `lecturePlans`) and `content/lessons.js` (`lessons`). Follow [CONTENT_AUTHORING.md](CONTENT_AUTHORING.md): topic-specific teaching, complete worked examples, varied puzzles, explicit assumptions, and transcript-backed explanations. Current course progression uses three four-question stages per recording and stable sequential lesson IDs. Use existing shared puzzle types; new types belong in the shared learning package and shared UI.
6. Optionally add an `authoring/<name>.mjs` builder exporting `buildReviewed(courseRoot)`, and set the manifest's `builder` to its relative path. The builder returns `{lessons, report}`, publishes generated modules under `content`, and records coverage under `data`. `npm run build:lessons -- <id>` runs it; the watcher also invokes it during import.
7. Set `status` to `available` once the curriculum and reviewed lessons are ready. Run `npm run validate`, `npm test`, and browser checks; restart the platform to reload manifests. The subject picker then enables the subject. No shared server, UI, or watcher copy is needed.

Shared transcription infrastructure has four standalone tests: `python -m unittest discover -s tests -p transcription_test.py`. They verify stable IDs, duplicate filenames, resume markers, and empty-audio safeguards using fixtures; they do not load a speech model.

The model and GPU packages are already installed locally. For a fresh Windows clone, install Python and run `python -m pip install --target tooling/transcription/python-packages -r config/transcription-gpu-requirements.txt` for CUDA transcription, or use `config/transcription-requirements.txt` for CPU-only use. These files record the versions from the existing local installation. GPU mode requires a compatible NVIDIA GPU and driver. The small model is downloaded on the first transcription run and reused thereafter. The app and completed lessons run with Node.js alone. `python scripts/transcribe.py --list` shows configured subjects and source directories without loading audio dependencies or downloading a model.

Subject IDs currently mapped to K: folders:

| ID | Folder | Recordings |
|---|---|---:|
| coa | COA | 35 |
| dl | DL | 98 |
| c | C Programming | 68 |
| ds | DS | 101 |
| algo | Algo | 170 |
| os | OS | 39 |
| dbms | DBMS | 94 |
| cn | CN | 46 |
| toc | TOC | 146 |
| cd | CD | 52 |
| aptitude | Aptitude | 15 |
