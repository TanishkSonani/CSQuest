# Repository architecture

CSQuest uses a shared browser application, a Node.js HTTP server and PostgreSQL. Subject manifests define catalog identity and publication status. Designed lessons provide concept explanations, worked examples, interactive models and assessments.

```text
apps/web/public/       Browser shell, learning UI, Library, media and remote viewer
packages/learning/     Grading, progress, practice and educational models
src/platform/         HTTP APIs, authentication, authorization and persistence
courses/<subject>/    Manifest, content, subject definitions and course data
migrations/           Versioned PostgreSQL schema
scripts/              Application, database and maintenance entry points
deploy/               Service definitions, proxy, release and native VM tooling
tests/                Unit, integration, course and browser checks
docs/                 Product and operations guides
```

## Content and progress

The application reads its course registry and lesson modules from PostgreSQL. Authenticated browser requests load subject modules through `/courses/<id>/*.js` and shared learning modules through `/shared/*.js`. All 11 current subjects are available. Future planned subjects remain visible without exposing unfinished lesson entry.

Course IDs, lesson IDs and storage keys remain stable so updates retain learner progress. `npm run db:import` publishes repository content without overwriting existing accounts. The optional local watcher periodically checks content updates; page requests do not design lessons.

Account transactions lock the relevant user. Registration also protects normalized username uniqueness. Browser storage supplies recovery and retry caches scoped to the signed-in user; PostgreSQL is the durable record. See [accounts](ACCOUNTS.md) and [database storage](POSTGRESQL.md).

## Library and permissions

The Library combines Boot, Block and Object storage with database-backed folder and file metadata. Storage roots and object credentials remain server-side. Upload reservations, quotas and effective permissions are checked before transfers. Streaming routes enforce access and support byte ranges.

Public links are restricted to their configured drive or directory. Administrator permissions, read-only learner grants, location-specific access, public upload limits and optional passwords are enforced by the server. Files are data rather than executable application assets. See [Library](LIBRARY.md).

## Remote workspace

A private root-owned broker launches Firefox and Terminal as dedicated non-root users. The application authenticates administrators and binds each session to its launching login. Display and audio are proxied through protected endpoints. Systemd bounds CPU, tasks and memory; the adaptive controller retains host headroom. Native components require explicit installation separately from application releases. See [remote sessions](REMOTE_SESSIONS.md).

## Runtime and deployment

Ignored runtime files hold temporary diagnostics, service state and caches. Private learner records, database clusters, Library content and backups are durable data and must be preserved during cleanup. Tests use isolated databases and temporary files.

Production runs behind Nginx HTTPS on the Oracle VM. GitHub Actions prepares a release, backs up PostgreSQL, applies migrations and selects the new application directory. Configuration is supplied through `.env`; secrets are never browser assets. See [deployment](PIPELINE.md).
