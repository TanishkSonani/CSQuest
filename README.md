# CSQuest

A local computer-science learning platform with topic-specific teaching, worked examples, interactive puzzles, XP, streaks, saved practice errors, and light/dark themes. Each subject keeps its own learning progress.

Saved rounds let you pause and continue after reloading. A practice hub offers quick warm-ups, mistake recovery, spaced review and weaker topics. Shared daily goals, weekly activity, earned milestones and reduced-motion settings help make learning a sustainable habit. See [learning experience improvements](docs/UX_IMPROVEMENTS.md).

**Social** adds friend requests, side-by-side learner comparisons, friends/community weekly leaderboards, Bronze-to-Diamond leagues, XP races, shared team goals, invitations and activity updates. Public league participation is optional; private learning fields are never returned by social APIs. See [friends and competitions](docs/SOCIAL.md).

**Login is required** to access lessons, transcripts and the learning portal. **My profile** adds accounts, automatic server saves, private progress tracking, 3D character avatars, recovery codes and full learning backups. Course completion is shown as a percentage. Existing guest progress can be brought into a new account. See [accounts and keyboard controls](docs/ACCOUNTS.md). PostgreSQL stores accounts, password hashes, sessions, progress, settings, drafts, course catalogs, lessons, transcripts and course status.

Run `npm install` and `npm run db:setup` once, then double-click **Start CSQuest.cmd** and visit **http://localhost:4173**. Setup creates an isolated local PostgreSQL database and imports existing data. The launcher starts PostgreSQL, one shared server and one watcher that checks every subject once per minute. Access remains restricted to this PC. See [PostgreSQL setup and migration](docs/POSTGRESQL.md).

The repository contains scaffolds for all **11 subjects / 864 recordings** discovered under `K:\Gate\GO CSE`, including videos inside nested `Done` folders. COA, Digital Logic, C Programming and General Aptitude are available; the remaining subjects appear as **Coming Soon** until transcription and reviewed lessons are ready.

| Available subject | Completed transcripts | Developed levels | Challenges |
|---|---:|---:|---:|
| Computer Organization & Architecture | 35 / 35 | 105 | 420 |
| Digital Logic | 98 / 98 | 294 | 1,176 |
| C Programming | 68 / 68 | 204 | 816 |
| General Aptitude | 15 / 15 | 45 | 180 |

Aptitude includes interactive growth and price charts, percentage grids, ratio shares, work-rate bars, a moving journey, factor tiles, shape rotation/reflection, Venn diagrams, arrangement checks, number lines, and sentence/evidence explorers. Visual number puzzles support both sliders and typed answers. See [Aptitude content and verification](docs/APTITUDE.md).

C Programming includes 16 animated visual labs and 68 complete program builders with draggable or tappable tokens. Trace aliases, recursive frames, array bounds, string terminators and allocated storage without mobile typing. See [C Programming content and verification](docs/C_PROGRAMMING.md).

Existing COA and Digital Logic browser storage keys are preserved. The selected subject, global theme, XP, streaks, completed lessons, and practice errors continue to work. Original recordings remain on K:. Completed transcripts and lessons are local; existing material works without the recording drive or speech model. Machine transcripts can mishear numbers and formulas, so problems state explicit assumptions. Course lessons do not embed source recordings; uploaded audio and video can be played from Library.

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

Node.js **20.12 or newer**, npm dependencies, and PostgreSQL are required. The server uses the `pg` connection pool and serves browser assets directly. No frontend build is required.

## Deploying on an Oracle Cloud VM

**Library** adds a File Explorer inspired file manager with separate **35 GiB Boot** and **125 GiB Block** allocations (displayed in GB), live storage refresh, upload preflight, four parallel transfers with a global queue, directories, previews, ZIP downloads, favorites, notes, lesson resources and playback bookmarks. Admins manage Library files and learner visibility; signup creates Learners. Public links share files or directory trees. **Help** tracks personal issue reports and **Admin** manages users and report responses. The Explorer includes a selection toolbar, editable address bar, expandable directory tree, right details pane, right-click New menu and a plain-text Notepad. Learner Library access is read only and can cover selected locations or the full Library. Public drive/directory spaces can require passwords, allow uploads and cap total space in GB/MB. Admins can create Admin accounts; last-Admin deletion is protected. The shared podcast audio dock and VLC-inspired video player support 0.25×–3× playback, configurable skips and compact controls. See [Library setup and usage](docs/LIBRARY.md) for permissions, provisioning, Undo limits, codec support and backups.

Run the Node.js application as a persistent systemd service behind Nginx, with PostgreSQL on the VM or a separate database host. The repository includes service and proxy templates in `deploy/`. See [Oracle Cloud deployment](docs/ORACLE_CLOUD.md) for Ubuntu VM setup, HTTPS, data transfer, updates and backups.

Pushes to `main` run GitHub Actions checks and deploy passing commits to the VM. See [the automatic deployment pipeline](docs/PIPELINE.md) for release behavior, credentials, backups and recovery.

Set `DATABASE_URL`, migrate the database, and import course content before starting the service. For production, set `NODE_ENV=production` and terminate HTTPS at Nginx. Keep Node.js and PostgreSQL bound to loopback when running on the same VM.

| Command | Purpose |
|---|---|
| `npm start` | Run the localhost server |
| `npm run db:setup` | Create local PostgreSQL, migrate schema, import existing data |
| `npm run db:local` | Start the isolated local database |
| `npm run db:stop` | Stop the isolated local database |
| `npm run db:migrate` | Apply pending PostgreSQL schema migrations |
| `npm run db:import` | Publish course files and import legacy accounts without overwriting users |
| `npm run db:export -- path/backup.dump` | Export all application data with checksums and table fingerprints |
| `npm run db:restore -- path/backup.dump` | Restore into an empty database and verify transferred data |
| `npm run db:verify -- path/backup.dump` | Compare restored table contents against the backup manifest |
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
