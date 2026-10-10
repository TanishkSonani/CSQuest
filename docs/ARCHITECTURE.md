# Repository architecture

```text
apps/web/public/          Shared browser UI, styles, icons, and font assets
packages/learning/       Shared grading, progress, practice history, worked examples
src/platform/            Shared HTTP server, transcript import, evidence links, JSON I/O
config/                  Manifest discovery and course schema
courses/<subject>/
  course.json            Identity, publication status, source folder, optional builder
  content/               Curriculum and browser-ready lessons
  authoring/             Subject-specific definitions and content builders
  data/
    source-files.json    Recording discovery (including nested Done folders)
    source-analysis/    Duration inventory, raw transcripts, completion markers
    transcripts/        Imported, numbered timestamped transcripts
    lesson-build.json   Optional generated-content coverage report
  docs/                  Optional subject-specific study guides
scripts/                 Thin CLI commands, Windows launcher, shared transcription tool
tests/                   Platform integration, learning engine, subject content, browser QA
docs/                    Architecture, authoring policy, source records, study guides
runtime/                 Ignored process IDs, service logs, live course progress
data/accounts/           Ignored durable profiles, authentication and learner progress
tooling/                 Local downloaded dependencies, models, historical artifacts
```

Course folders are discovered from `course.json`; there is no second subject registry to maintain. The server supplies a public catalog at `/api/subjects` and `/subjects.js`. Source-drive locations and builder paths stay on the server. Each subject has the same URL namespace, independent data directory, and persistent storage key.

The browser loads curriculum and lessons through `/courses/<id>/*.js`; shared puzzle modules use `/shared/*.js`. Only files under a registered subject's `content` directory are served through its module route. Manifests, authoring code, raw analysis, runtime files, and model weights are outside the static web root. Status and numbered imported transcripts have dedicated read-only API endpoints.

A single watcher sequentially imports every registered subject once per minute. An error in one subject is recorded without stopping the others. Transcription uses a separate shared Python worker; `--all` processes subjects sequentially with one speech model. The watcher never starts speech recognition or authors new material.

## Course publication

`planned` subjects are visible as Coming Soon, with disabled lesson entry and no invented levels. They can still be inventoried, transcribed, and imported while content is being authored. `available` subjects have a populated curriculum and reviewed teaching. The optional manifest builder produces browser-ready content and a coverage report; direct authoring is supported too.

COA and Digital Logic retain their IDs, URLs' subject identifiers, lesson IDs, and browser keys (`coa-quest-v1`, `dl-quest-v1`). Their subject folders now have identical roles. No learner storage migration is required.

## Stable source identity

Inventory row order is the lecture ID. Re-inventorying preserves existing row order and appends new recordings; missing existing recordings stop the scan rather than silently renumbering lessons. Nested recording folders are scanned recursively. Duplicate basenames receive stable `transcriptStem` keys, used by both the transcriber and importer.

Raw `.jsonl` and `.srt` output may be incomplete while a worker is running. Only an atomically published `.done` marker permits import. Imported JSON and progress snapshots are replaced atomically. Completed imported data and source analysis live locally, so existing lessons remain usable when K: is disconnected.

## Machine configuration

`CSQUEST_SOURCE_ROOT` overrides `K:\Gate\GO CSE`. `<SUBJECT>_SOURCE` overrides a single folder, for example `COA_SOURCE`, `DL_SOURCE`, or `C_SOURCE`. Node and Python resolve project paths relative to their own files. Downloaded transcription packages and the shared small Whisper model remain in ignored `tooling/transcription`; Node and Python themselves are system installations.

Runtime state is separate from course data. The supported Windows launcher starts one localhost server and one shared watcher. Access remains restricted to `127.0.0.1:4173`.

Account APIs use a shared private store in `data/accounts`. User records, credentials and sessions are outside the web root; writes are serialized and atomic. Browser storage is scoped per authenticated user, with guest keys preserved. See [personal accounts](ACCOUNTS.md) for sync, recovery and backup behavior.

Live progress snapshots live in `runtime/courses/<id>/progress.json`, so periodic checks do not dirty versioned course files. A fresh checkout regenerates missing snapshots from local source analysis on its first status request or sync. Generated lesson modules and build coverage reports are written only when their content changes.
