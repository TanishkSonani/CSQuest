# Oracle Cloud VM deployment

This guide assumes an Ubuntu VM with sudo access, a public IP and a domain pointing to that IP. The app runs directly from the repository: Nginx handles HTTPS, systemd keeps Node.js running, and PostgreSQL stores the content and learner data. No frontend build is needed. Templates are in `deploy/`.

## 1. Prepare the VM

Install Node.js 22 or 24 with npm using your preferred installation method. The service template expects `/usr/local/bin/node`; check `command -v node` and update `ExecStart` if needed. Avoid a per-login shell version manager for the service account. Mount the data volume at `/srv/csquest-data` before starting the service; its systemd unit requires that mount.

```bash
sudo apt update
sudo apt install -y git nginx postgresql postgresql-client python3 python3-venv certbot python3-certbot-nginx
node --version
npm --version
sudo systemctl enable --now postgresql nginx
sudo useradd --system --user-group --home-dir /opt/csquest --shell /usr/sbin/nologin csquest
sudo git clone https://github.com/TanishkSonani/CSQuest.git /opt/csquest
sudo chown -R csquest:csquest /opt/csquest
cd /opt/csquest
sudo -u csquest npm ci --omit=dev
sudo -u csquest python3 -m venv .venv
sudo -u csquest .venv/bin/python -m pip install -r requirements.txt
```

Use a repository revision containing these VM deployment changes.

In Oracle Cloud, allow incoming TCP ports 80 and 443 in the VM's network security group or subnet security list. Allow SSH (22) from your administrator IP. Also allow HTTP/HTTPS in the VM's existing OS firewall. Keep ports 4173 and 5432 private. Both cloud and OS firewall rules must permit web traffic. See [Oracle security lists](https://docs.oracle.com/en-us/iaas/Content/Network/Concepts/securitylists.htm).

## 2. Create a new database

Skip database initialization if restoring an existing database in the next section.

```bash
sudo -u postgres createuser --pwprompt csquest
sudo -u postgres createdb --owner=csquest csquest
sudo -u csquest cp .env.example .env
sudo -u csquest chmod 600 .env
sudo -u csquest nano .env
```

Set the following values. URL-encode special characters in the database password. PostgreSQL on Ubuntu normally uses port 5432; the local Windows cluster uses 55432.

```dotenv
DATABASE_URL=postgresql://csquest:YOUR_URL_ENCODED_PASSWORD@127.0.0.1:5432/csquest
APP_HOST=127.0.0.1
APP_PORT=4173
NODE_ENV=production
```

Initialize and import a fresh database:

```bash
sudo -u csquest .venv/bin/python -m alembic upgrade head
sudo -u csquest npm run db:import
```

Course data is imported from the repository. Local learner data lives in PostgreSQL and is transferred separately, below.

## 3. Transfer all local application data (recommended for this project)

Use the full database transfer workflow to preserve accounts, password hashes, progress, settings, paused lessons, friends, competitions, notifications, course catalogs, lessons and transcripts. Export includes schema, data and migration history. Temporary `csquest_test_*` schemas are excluded. The local cluster uses PostgreSQL 18; install PostgreSQL 18 or newer on the VM rather than an older Ubuntu default package. Install compatible `pg_dump` and `pg_restore` clients. Set `PG_BIN` if your client tools are outside PATH (Windows defaults to PostgreSQL 18's installation directory).

Before the final export, open your local profile and confirm **Saved to your account**. Resolve pending saves or export/import browser-only progress first: browser storage belongs to the local site's origin and cannot be transferred by a database dump. Stop learning activity and the local authoring watcher for the cutover, keeping PostgreSQL running. A snapshot contains data as of export time; later local changes are not automatically copied to the VM.

From the local repository:

```powershell
npm run db:export -- runtime/backups/cutover.dump
node scripts/verify-db-transfer.mjs runtime/backups/cutover.dump
scp runtime/backups/cutover.dump runtime/backups/cutover.dump.json YOUR_SSH_USER@YOUR_VM_IP:~/
```

The export reads credentials from your private `.env` and produces a custom-format dump plus a manifest with its SHA-256 and each table's row count/content fingerprint. The optional local verification command creates a temporary database, restores the full snapshot, checks every table, and removes only that temporary database; it requires database-creation privileges. Keep both backup files private and out of Git.

On the VM, create the role and empty database and configure `.env` as in section 2, **skipping** initial Alembic migration/course import. Stop any running CSQuest service, then place the uploaded files where the app user can read them:

```bash
sudo install -d -o csquest -g csquest -m 700 /opt/csquest/runtime/backups
sudo install -o csquest -g csquest -m 600 ~/cutover.dump ~/cutover.dump.json /opt/csquest/runtime/backups/
cd /opt/csquest
sudo -u csquest npm run db:restore -- runtime/backups/cutover.dump
sudo -u csquest npm run db:verify -- runtime/backups/cutover.dump
# Only after verification succeeds:
sudo -u csquest npm run db:migrate
```

Restore refuses a populated database, checks the dump checksum and target PostgreSQL version, and applies the archive in one transaction. It then compares all table names, row counts and content fingerprints against the exported snapshot. Start the web service only after verification succeeds; database activity after startup can legitimately change fingerprints. Do not run the initial Alembic revisions on a restored database that already has tables. Preserve its Node migration history or deliberately baseline Alembic as described in [the migration guide](../alembic/README.md). `db:import` publishes course files and legacy JSON account exports; it does not copy existing PostgreSQL progress from your PC.

Static images, fonts and application code travel with the repository. Ignored speech models, source videos, development tools, process logs and `.env` credentials are not needed to run the web app. PostgreSQL learner records are transferred through the private backup, not Git. Users may need to log in again because browser cookies are specific to the site's hostname.

## 4. Enable the service and HTTPS

```bash
sudo cp deploy/csquest.service /etc/systemd/system/csquest.service
sudo systemctl daemon-reload
sudo systemctl enable --now csquest
sudo systemctl status csquest --no-pager
curl -f http://127.0.0.1:4173/
sudo cp deploy/nginx.conf /etc/nginx/sites-available/csquest
sudo nano /etc/nginx/sites-available/csquest
```

Replace `csquest.example.com` with your domain in the Nginx file, then enable it:

```bash
sudo ln -s /etc/nginx/sites-available/csquest /etc/nginx/sites-enabled/csquest
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d YOUR_DOMAIN --redirect
sudo certbot renew --dry-run
```

The proxy overwrites forwarding headers with the actual connection protocol and client address. The app uses the protocol for same-origin checks and sets secure session cookies in production. Log in and test learning saves through **HTTPS**; production cookies will not persist over plain HTTP. See [Nginx proxy headers](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header).

Verify registration/login, a lesson, saved progress after refresh, and social pages. Check logs with `sudo journalctl -u csquest -n 100 --no-pager`. The startup check confirms that courses exist before the server listens.

## 5. Updates and backups

Back up PostgreSQL before schema updates, using `pg_dump -Fc` and storing a copy off the VM. `.env` is private configuration, not a database backup. For updates:

```bash
cd /opt/csquest
sudo systemctl stop csquest
sudo -u csquest git pull --ff-only
sudo -u csquest npm ci --omit=dev
sudo -u csquest .venv/bin/python -m pip install -r requirements.txt
# Choose ONE migration command based on this database's migration history:
sudo -u csquest .venv/bin/python -m alembic upgrade head
# For an existing database using the Node history, use npm run db:migrate instead.
sudo -u csquest npm run db:import
sudo systemctl start csquest
sudo journalctl -u csquest -n 50 --no-pager
```

The course importer skips existing accounts and does not reset learner progress. Keep transcription and the authoring watcher on your workstation unless you explicitly need them on the VM. The web service only needs Node.js, PostgreSQL and the application files.
