# PostgreSQL storage

The running application uses PostgreSQL for course catalogs, teaching modules, transcript documents, course status, users, credential hashes, sessions, saved progress, settings, paused rounds and authentication attempt counts. JavaScript application code, CSS, fonts and images remain application assets. Browser storage is an offline retry cache; successful saves and fresh logins load database records.

## Local setup

PostgreSQL 18 is installed on this PC. Run:

```powershell
npm install
npm run db:setup
npm start
```

`db:setup` creates a separate cluster at ignored `.local-postgres/cluster`, listens only on `127.0.0.1:55432`, creates the `csquest` database, writes a random connection password to ignored `.env`, applies schema migrations, and imports course/account files. It does not change an existing PostgreSQL service. Set `PG_BIN` to the PostgreSQL binary directory if installed elsewhere. The local setup script uses Windows PostgreSQL binaries by default.

The Windows launcher automatically starts this cluster if it exists. `npm run db:local` starts it manually; `npm run db:stop` stops it. After a restart, start the database before `npm start`. Preserve `.local-postgres` and `.env` when cleaning runtime logs.

To use an existing database instead, copy `.env.example` to `.env`, set `DATABASE_URL` to its PostgreSQL connection string, then run `npm run db:migrate` and `npm run db:import`. The PostgreSQL role needs permission to create tables in its database. Configuration is loaded from `.env` locally; production reads environment variables from its host. Never commit connection passwords.

## Migrating existing data

`npm run db:import` imports all course manifests, browser-ready course modules, JSON course documents, and latest course status into PostgreSQL. It imports `data/accounts/accounts.json` without changing password hashes, recovery hashes, user IDs, progress revisions or unexpired session hashes. Existing database users are skipped, so repeating an import cannot reset their progress. Legacy files are kept as backups.

To import a different legacy account file:

```powershell
npm run db:import -- runtime/accounts/accounts.json
```

Do not publish private account files or `.env`. To transfer browser-only progress, use the existing account creation/import UI in the same browser.

## Hosted database deployment with Alembic

For a new hosted database, install the Python dependencies from `requirements.txt`, set `DATABASE_URL`, then run `npm run db:deploy`. Alembic creates and versions the schema; the command then imports course content and any available legacy account file. See [the Alembic deployment guide](../alembic/README.md) for new and existing-database instructions, and [Oracle Cloud deployment](ORACLE_CLOUD.md) for VM setup. Do not run the initial Alembic revisions against a database that already has the CSQuest schema; back it up and baseline it deliberately.

Authoring and transcription tools still prepare local source files. `npm run sync`, the watcher and `npm run build:lessons` publish completed output to PostgreSQL when configured. Direct file edits require `npm run db:import`. Serving lessons, transcripts or status does not read these source files or start transcription.

## Tables and consistency

Schema changes live in `migrations/` and are applied once, transactionally, by `db:migrate`. The database contains:

- `csquest_courses`, `csquest_course_modules`, `csquest_course_documents`, `csquest_course_status`: course catalog, teaching content, documents and status.
- `csquest_users`, `csquest_user_data`, `csquest_sessions`: accounts, individual saved learning fields and sessions, with cascading deletion.
- `csquest_login_attempts`: atomic per-address authentication rate limits.
- `csquest_migrations`: applied schema versions.
- Social tables store preferences, consented friendships, scored learning events, weekly league memberships, challenges, invited participants and notifications; see [Social](SOCIAL.md).

Account transactions lock only the relevant user. Registration also locks the normalized username to prevent concurrent duplicates. Invalid requests roll back their changes. Progress revisions preserve the existing conflict handling across tabs and servers.

## Verification and deployment

`npm test` uses real PostgreSQL. Database tests create random isolated schemas and remove only those schemas after completing. They do not edit imported learner accounts. `TEST_DATABASE_URL` can select a separate test database; otherwise tests use the local `DATABASE_URL`.

`node tests/login-wall-browser.cjs` verifies database-backed registration, login, private course requests, logout and session revocation through Playwright with isolated test records.

The VM runs the same Node.js server used locally. Database creation, migrations and course imports are explicit deployment steps. Use TLS when connecting to a remote database according to its provider's requirements. The database on this PC is separate from the VM database; transfer a PostgreSQL backup to retain existing learner accounts and progress.
