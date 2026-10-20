#!/bin/bash
set -euo pipefail
test "$(id -u)" = 0
base=$(cd "$(dirname "$0")" && pwd)
config=/etc/nginx/sites-available/csquest
snippet=/etc/nginx/snippets/csquest-remote.conf
backup=$(mktemp -d /etc/nginx/csquest-remote-backup.XXXXXX)
cp "$config" "$backup/site"
had_snippet=false
if test -f "$snippet"; then cp "$snippet" "$backup/snippet"; had_snippet=true; fi
restore(){ cp "$backup/site" "$config"; if test "$had_snippet" = true; then cp "$backup/snippet" "$snippet"; else rm -f "$snippet"; fi; }
install -m 644 "$base/remote.nginx.conf" "$snippet"
if ! python3 - <<'PY'
from pathlib import Path
p=Path('/etc/nginx/sites-available/csquest')
source=p.read_text()
include='include /etc/nginx/snippets/csquest-remote.conf;'
anchor='include /etc/nginx/snippets/csquest-library-transfers.conf;'
if include not in source:
    if anchor not in source:
        raise SystemExit('Expected CSQuest Library proxy include was not found.')
    p.write_text(source.replace(anchor,anchor+'\n    '+include))
PY
then restore; exit 1; fi
if ! nginx -t; then restore; exit 1; fi
if ! systemctl reload nginx; then restore; nginx -t; systemctl reload nginx; exit 1; fi
printf 'Remote WebSocket proxy installed. Previous configuration: %s\n' "$backup"
