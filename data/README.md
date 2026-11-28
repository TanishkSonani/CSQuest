# Private application data

PostgreSQL is the durable store for accounts, credential hashes, sessions, progress, settings and course content. Back up the database with `npm run db:export` and verify a restore before relying on it. See [PostgreSQL storage](../docs/POSTGRESQL.md).

`accounts/accounts.json`, when present, is a private legacy import file. Preserve it as a backup; it is ignored by Git and never served as an application asset. Do not treat it as the current database.

Keep Library file roots, podcast media, database clusters, `.env`, account records and backups during maintenance. Runtime diagnostics and QA screenshots are disposable. Tests use isolated records and temporary directories.
