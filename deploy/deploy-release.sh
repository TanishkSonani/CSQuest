#!/bin/bash
# Installed as root-owned /usr/local/sbin/csquest-deploy. Only accepts a main SHA.
set -euo pipefail
test "$(id -u)" = 0
test "$#" = 1
commit=$1
[[ "$commit" =~ ^[0-9a-f]{40}$ ]]
exec 9>/run/lock/csquest-deploy.lock
flock -w 600 9
mountpoint -q /srv/csquest-data
repository=/opt/csquest
release=/srv/csquest-data/releases/$commit
sudo -u csquest git -C "$repository" fetch origin main
latest=$(sudo -u csquest git -C "$repository" rev-parse origin/main)
if test "$commit" != "$latest"; then
    printf 'Skipping superseded commit %s; main is now %s.\n' "$commit" "$latest"
    exit 0
fi
install -d -o csquest -g csquest -m 755 /srv/csquest-data/releases "$release"
sudo -u csquest git -C "$repository" archive "$commit" | sudo -u csquest tar -x -C "$release"
test ! -e "$release/.env" || test -L "$release/.env"
ln -sfn "$repository/.env" "$release/.env"
chown -h csquest:csquest "$release/.env"
cd "$release"
sudo -u csquest npm ci --omit=dev
sudo -u csquest node --check scripts/server.mjs
sudo -u csquest node --check apps/web/public/app.js

backup=/srv/csquest-data/backups/deploy-$(date -u +%Y%m%dT%H%M%SZ)-$commit.dump
sudo -u csquest node "$repository/scripts/db-transfer.mjs" export "$backup"
dropin=/etc/systemd/system/csquest.service.d/release.conf
previous=$(mktemp /run/csquest-previous-release.XXXXXX)
had_previous=false
if test -f "$dropin"; then cp "$dropin" "$previous"; had_previous=true; fi
switched=false
recover() {
    status=$?
    if test "$status" != 0 && test "$switched" = true; then
        printf 'Deployment failed. Returning to the previous code; database backup: %s\n' "$backup" >&2
        if test "$had_previous" = true; then cp "$previous" "$dropin"; else rm -f "$dropin"; fi
        systemctl daemon-reload
        systemctl restart csquest || true
        journalctl -u csquest -n 20 --no-pager || true
    fi
    rm -f "$previous"
    exit "$status"
}
trap recover EXIT
systemctl stop csquest
switched=true
sudo -u csquest npm run db:migrate
sudo -u csquest npm run db:import
install -d /etc/systemd/system/csquest.service.d
cat > "$dropin" <<SERVICE
[Service]
WorkingDirectory=$release
ExecStart=
ExecStart=/usr/local/bin/node $release/scripts/server.mjs
SERVICE
systemctl daemon-reload
systemctl start csquest
curl --fail --retry 6 --retry-connrefused --retry-delay 2 http://127.0.0.1:4173/api/account/session
curl --fail --retry 3 --retry-delay 2 https://130.162.38.87/api/account/session
printf '\nDeployed %s; pre-deployment database backup: %s\n' "$commit" "$backup"
