# CSQuest

A local computer-science learning platform with topic-specific teaching, worked examples, interactive puzzles, XP, streaks, saved practice errors, and light/dark themes. Each subject keeps its own learning progress.

Saved rounds let you pause and continue after reloading. A practice hub offers quick warm-ups, mistake recovery, spaced review and weaker topics. Shared daily goals, weekly activity, earned milestones and reduced-motion settings help make learning a sustainable habit. See [learning experience improvements](docs/UX_IMPROVEMENTS.md).

**Login is required** to access lessons, transcripts and the learning portal. **My profile** adds local accounts, automatic server saves, private progress tracking, 3D character avatars, recovery codes and full learning backups. Course completion is shown as a percentage. Existing guest progress can be brought into a new account. See [accounts and keyboard controls](docs/ACCOUNTS.md). Private account records live in ignored `data/accounts`, independently of runtime logs.

Double-click **Start CSQuest.cmd**, then visit **http://localhost:4173**. The launcher starts one shared server and one watcher that checks every subject once per minute. Access remains restricted to this PC.

The repository contains scaffolds for all **11 subjects / 864 recordings** discovered under `K:\Gate\GO CSE`, including videos inside nested `Done` folders. COA and Digital Logic are available; the remaining subjects appear as **Coming Soon** until transcription and reviewed lessons are ready.

| Available subject | Completed transcripts | Developed levels | Challenges |
|---|---:|---:|---:|
| Computer Organization & Architecture | 35 / 35 | 105 | 420 |
| Digital Logic | 98 / 98 | 294 | 1,176 |

Existing COA and Digital Logic browser storage keys are preserved. The selected subject, global theme, XP, streaks, completed lessons, and practice errors continue to work. Original recordings remain on K:. Completed transcripts and lessons are local; existing material works without the recording drive or speech model. Machine transcripts can mishear numbers and formulas, so problems state explicit assumptions. The portal has no video player or lecture notebook.

```text
apps/web/             One browser UI for all subjects
packages/learning/    Shared grading, progress, and worked examples
src/platform/         Shared server and transcript import
config/               Course discovery and manifest schema
courses/<id>/         Manifest, content, authoring, and transcript data
scripts/              CLI commands, Windows launcher, shared transcription
tests/                Automated and browser checks
docs/                 Architecture and authoring guides
runtime/              Ignored process IDs, logs, and live progress snapshots
tooling/              Ignored downloaded dependencies, models, and archives
```

Node.js **20 or newer** is required. The local server has no npm runtime dependencies; the Vercel build bundles its Analytics client.

## Deploying on Vercel

Keep the Vercel **Root Directory** at the repository root. `vercel.json` runs `npm run build:vercel`, which assembles the browser UI, shared modules, subject list, course lessons, and serverless API routes in Vercel's Build Output format.

To enable accounts and saved progress, connect an Upstash Redis database to the Vercel project through the Vercel Marketplace. The integration must provide `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` (or `KV_REST_API_URL` and `KV_REST_API_TOKEN`). No local recording-drive paths are needed in Vercel. The hosted app serves committed course lessons; local transcription and watcher updates remain available only on the local server.

| Command | Purpose |
|---|---|
| `npm start` | Run the localhost server |
| `npm run watch` | Periodically import all registered subjects |
| `npm run sync` | Import every subject once |
| `npm run sync -- dl` | Import one subject |
| `npm run catalog` | Refresh recursive recording discovery and counts |
| `npm run build:lessons -- dl` | Rebuild a subject's generated lessons |
| `npm run validate` | Validate course structure, publication, sources, and puzzles |
| `npm test` | Run automated tests |

For browser checks, run `npm ci --prefix tooling/browser-qa`, start the app, then run `node tests/browser.cjs` or `node tests/platform-browser.cjs`. Checks use Microsoft Edge installed on Windows; output goes to ignored `qa-results`.

Shared speech recognition is managed by `scripts/transcribe.py`. `python scripts/transcribe.py --list` lists subjects without loading a model. Transcription packages and the model already installed locally remain under ignored `tooling/transcription`; a fresh clone needs those dependencies installed separately before transcribing new recordings. Set `CSQUEST_SOURCE_ROOT` or a per-subject variable such as `COA_SOURCE`, `DL_SOURCE`, or `C_SOURCE` to override recording locations.

Subjects are discovered from their `course.json` files. New subjects reuse the existing UI, server, importer, watcher, and transcription tool. See [repository architecture](docs/ARCHITECTURE.md), [adding and publishing subjects](docs/ADDING_SUBJECTS.md), and [content authoring rules](docs/CONTENT_AUTHORING.md).

Git excludes downloaded packages, model weights, npm dependencies, logs, process state, temporary files, and browser output. Historical staging copies and obsolete one-time scripts are retained locally in ignored `tooling/archive`. `Start COA.cmd` remains a compatibility shortcut for the shared platform.

Live status snapshots are regenerated under `runtime/courses/<id>` from the versioned transcript inventories. Routine watcher checks leave course content unchanged. All 864 recording durations have been measured: **795.45 hours** of source audio; this inventory count includes subjects whose transcription has not started.
