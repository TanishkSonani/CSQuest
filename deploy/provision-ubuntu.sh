#!/bin/bash
# Initial Ubuntu deployment on an already-mounted data volume.
# Run as root. Existing database/configuration is never overwritten.
set -euo pipefail
test "$(id -u)" = 0
mountpoint -q /srv/csquest-data
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y ca-certificates curl gnupg git xz-utils openssl nginx python3-venv certbot python3-certbot-nginx

if ! command -v node >/dev/null; then
    case "$(uname -m)" in aarch64) architecture=arm64;; x86_64) architecture=x64;; *) exit 1;; esac
    download=$(mktemp -d)
    cd "$download"
    curl -fsSLO https://nodejs.org/dist/latest-v22.x/SHASUMS256.txt
    archive=$(awk -v arch="$architecture" '$2 ~ ("-linux-" arch "\\.tar\\.xz$") {print $2}' SHASUMS256.txt)
    test -n "$archive"
    curl -fsSLO "https://nodejs.org/dist/latest-v22.x/$archive"
    awk -v file="$archive" '$2==file' SHASUMS256.txt | sha256sum -c -
    tar -xJf "$archive" -C /opt
    node_directory=/opt/${archive%.tar.xz}
    for binary in node npm npx; do ln -s "$node_directory/bin/$binary" "/usr/local/bin/$binary"; done
fi
test -x /usr/local/bin/node
node --version

if ! test -x /usr/lib/postgresql/18/bin/postgres; then
    curl -fsSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor --yes -o /usr/share/keyrings/postgresql-pgdg.gpg
    printf 'deb [signed-by=/usr/share/keyrings/postgresql-pgdg.gpg] https://apt.postgresql.org/pub/repos/apt noble-pgdg main\n' > /etc/apt/sources.list.d/pgdg.list
    apt-get update
    apt-get install -y postgresql-18 postgresql-client-18
fi
if ! test -d /etc/postgresql/18/csquest; then
    install -d -o postgres -g postgres -m 700 /srv/csquest-data/postgresql
    pg_createcluster 18 csquest --port 5433 --datadir /srv/csquest-data/postgresql/18/csquest --start
fi
pg_ctlcluster 18 csquest start || test "$(pg_lsclusters --no-header | awk '$1==18 && $2=="csquest" {print $4}')" = online
install -d /etc/systemd/system/postgresql@18-csquest.service.d
printf '[Unit]\nRequiresMountsFor=/srv/csquest-data\n' > /etc/systemd/system/postgresql@18-csquest.service.d/data-volume.conf

id csquest >/dev/null 2>&1 || useradd --system --user-group --home-dir /opt/csquest --shell /usr/sbin/nologin csquest
if ! test -d /opt/csquest/.git; then
    git clone https://github.com/TanishkSonani/CSQuest.git /opt/csquest
    chown -R csquest:csquest /opt/csquest
fi
cd /opt/csquest
sudo -u csquest npm ci --omit=dev
sudo -u csquest python3 -m venv .venv
sudo -u csquest .venv/bin/python -m pip install -r requirements.txt
if ! test -f .env; then
    # Fail if an existing role/database needs review instead of replacing it.
    password=$(openssl rand -hex 32)
    sudo -u postgres psql -p 5433 --set=ON_ERROR_STOP=1 --quiet <<SQL
CREATE ROLE csquest LOGIN PASSWORD '$password';
CREATE DATABASE csquest OWNER csquest;
SQL
    umask 077
    printf 'DATABASE_URL=postgresql://csquest:%s@127.0.0.1:5433/csquest\nAPP_HOST=127.0.0.1\nAPP_PORT=4173\nNODE_ENV=production\n' "$password" > .env
    chown csquest:csquest .env
fi
install -d -o csquest -g csquest -m 700 /srv/csquest-data/backups
systemctl daemon-reload
printf 'VM prerequisites ready. Restore and verify the database before starting CSQuest.\n'
