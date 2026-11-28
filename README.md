# CSQuest

CSQuest is a computer-science learning platform with designed lessons, worked examples, interactive puzzles and visual models. Learners can study at their own pace, revisit mistakes and track progress across subjects in light or dark themes.

## Courses

All 11 subjects are available, with 2,592 designed lesson levels. Lessons combine concept explanations, predictions, interactive exploration and graded practice. Optional coding labs and workshops support further practice.

| Subject | Lesson levels | Status |
| --- | ---: | --- |
| Computer Organization & Architecture | 105 | Available |
| Digital Logic | 294 | Available |
| C Programming | 204 | Available |
| Data Structures | 303 | Available |
| Algorithms | 510 | Available |
| Operating Systems | 117 | Available |
| Database Management Systems | 282 | Available |
| Computer Networks | 138 | Available |
| Theory of Computation | 438 | Available |
| Compiler Design | 156 | Available |
| General Aptitude | 45 | Available |

## Platform features

- Learning: concept search, saved rounds, mistake recovery, spaced review, daily goals, XP, streaks and milestones.
- Accounts: server-saved progress, avatars, recovery codes, backups and account deletion. Public registration creates learner accounts; administrators manage roles and location permissions.
- Social: friends, optional community rankings, leagues, challenges and shared goals.
- Library: an Explorer-style workspace with Boot, Block and Object drives, folders, parallel upload queues, resumable transfers, search, metadata, previews, playlists and activity history. Learner access is granted by an administrator. Public drives or folders can have passwords, upload permissions and capacity limits.
- Media: podcast listening, image/PDF previews and audio/video playback with adjustable speed, seek controls, subtitles and saved position.
- Remote workspace: administrator-only Firefox and VM Terminal launched from Library > Boot. Firefox includes audio streaming, adaptive RAM limits and Smooth video / Sharper text modes.

## Run locally

Install Node.js and PostgreSQL, then run:

```powershell
npm ci
npm run db:setup
npm start
```

Open **http://localhost:4173**. On Windows, **Start CSQuest.cmd** starts the local database, application and content watcher. **Start COA.cmd** is a compatibility shortcut. Configuration belongs in the ignored `.env`; use `.env.example` as a reference.

PostgreSQL stores accounts, sessions, learning progress, preferences, course content and Library metadata. Preserve `.env`, `.local-postgres`, private account records, Library files and database backups during maintenance.

## Repository

```text
apps/web/public/      Browser UI, styles and assets
packages/learning/    Grading, progress and interactive learning models
src/platform/        Application server, permissions and persistence
courses/<id>/        Subject manifests, designed lessons and course data
scripts/             Application, database and maintenance commands
migrations/          Versioned database schema
alembic/             Hosted database migration support
deploy/              VM services, proxy and release tooling
tests/               Automated checks and browser QA
docs/                Product, architecture and operations guides
```

## Common commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the application |
| `npm run db:setup` | Set up the isolated local database and import existing data |
| `npm run db:local` / `npm run db:stop` | Start or stop the local database |
| `npm run db:migrate` | Apply schema migrations |
| `npm run db:import` | Publish course content while preserving existing users |
| `npm run db:export -- path/backup.dump` | Export a database backup with verification metadata |
| `npm run db:restore -- path/backup.dump` | Restore into an empty database |
| `npm run db:verify -- path/backup.dump` | Verify restored data against the backup |
| `npm run validate` | Validate course structure and exercises |
| `npm test` | Run automated tests |

Browser checks use `tooling/browser-qa` and installed Microsoft Edge on Windows. Run `npm ci --prefix tooling/browser-qa`, then the relevant script under `tests/`. Reports and screenshots are disposable output in ignored `qa-results/`.

## Documentation

- [Architecture](docs/ARCHITECTURE.md) and [lesson design](docs/CONTENT_AUTHORING.md)
- [Accounts and roles](docs/ACCOUNTS.md), [social features](docs/SOCIAL.md) and [learning experience](docs/UX_IMPROVEMENTS.md)
- [Library](docs/LIBRARY.md), [podcasts](docs/PODCASTS.md) and [remote workspace](docs/REMOTE_SESSIONS.md)
- [PostgreSQL](docs/POSTGRESQL.md), [Oracle Cloud setup](docs/ORACLE_CLOUD.md) and [automatic deployment](docs/PIPELINE.md)

Pushes to `main` run checks and deploy passing commits through GitHub Actions. Native root-owned VM components have separate provisioning steps documented in their operations guides. Keep credentials, private learner data and backups outside Git.
