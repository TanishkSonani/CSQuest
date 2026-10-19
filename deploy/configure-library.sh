#!/bin/bash
# Provision persistent, private library roots. Never formats or clears a disk.
set -euo pipefail
test "$(id -u)" = 0
owner_id=${1:?Usage: configure-library.sh OWNER_ACCOUNT_UUID}
[[ "$owner_id" =~ ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$ ]]
mountpoint -q /srv/csquest-data
test "$(stat -c %d /)" != "$(stat -c %d /srv/csquest-data)"
test ! -L /var/lib/csquest-library
test ! -L /srv/csquest-data/library
install -d -o csquest -g csquest -m 700 /var/lib/csquest-library /srv/csquest-data/library
install -d /etc/systemd/system/csquest.service.d
cat > /etc/systemd/system/csquest.service.d/library.conf <<SERVICE
[Service]
Environment=LIBRARY_OWNER_ID=$owner_id
Environment=LIBRARY_BOOT_ROOT=/var/lib/csquest-library
Environment=LIBRARY_BLOCK_ROOT=/srv/csquest-data/library
ReadWritePaths=/var/lib/csquest-library /srv/csquest-data/library
SERVICE
# Amend the active IP/domain proxy without replacing its TLS configuration.
python3 - <<'PY'
from pathlib import Path
import re
config = Path('/etc/nginx/sites-available/csquest')
source = config.read_text()
if 'proxy_request_buffering off;' not in source:
    source, count = re.subn(r'(client_max_body_size\s+4m;)', r'\1\n    proxy_request_buffering off;', source)
    if not count:
        raise SystemExit('Expected CSQuest proxy configuration was not found; no proxy changes applied.')
    config.write_text(source)
PY
nginx -t
systemctl daemon-reload
systemctl reload nginx
bash "$(dirname -- "${BASH_SOURCE[0]}")/configure-library-transfers.sh"
printf 'Library configured: Boot 35 GiB, Block 125 GiB. Restart csquest after deploying the Library code and migration.\n'
