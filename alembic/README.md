# Database deployment

Alembic owns schema creation and versioning. `npm run db:deploy` upgrades the schema and then runs the existing idempotent importer to transfer the course catalog, lesson modules, course JSON documents, progress status and any legacy account records into PostgreSQL.

## First deployment

1. Create a PostgreSQL database and a database role that can create tables and indexes in it.
2. Set `DATABASE_URL` in the deployment environment. Use the provider's pooled or direct URL as appropriate, with TLS parameters included when required. For local use, put it in `.env`.
3. Install Python migration dependencies with `python -m pip install -r requirements.txt` and Node dependencies with `npm install`.
4. Run `npm run db:deploy` from the repository root. This runs `alembic upgrade head`, then imports the checked-in course data and optional legacy accounts file.
5. Deploy the application after the migration and import finish successfully.

On the Oracle Cloud VM, run steps 1–4 before starting or restarting the application service. See [VM deployment](../docs/ORACLE_CLOUD.md). Keep `.env` and account export files private. A repeated deployment is safe: Alembic applies each revision once, and the importer upserts course content while skipping existing accounts.

To migrate accounts from a specific export, run `npm run db:import -- path/to/accounts.json` after `alembic upgrade head`. The importer never overwrites an existing user and only imports unexpired sessions.

## Existing database

If the database already has the CSQuest schema, do not run these initial revisions against it. Back up the database, then either continue using `npm run db:migrate` for the existing Node migration history or create a reviewed Alembic baseline/stamp for that database. Never use `alembic stamp head` on an empty database; it marks revisions applied without creating tables.

Schema revisions are in `alembic/versions/`; the original SQL is retained in `migrations/` for the current Node runtime. Revision 0003 records those SQL revisions in `csquest_migrations`, so the Node course importer will not try to create the same tables a second time.
