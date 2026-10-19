#!/bin/bash
# Apply the reviewed transfer proxy without replacing TLS or library ownership.
set -euo pipefail
test "$(id -u)" = 0
source_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
config=/etc/nginx/sites-available/csquest
snippet=/etc/nginx/snippets/csquest-library-transfers.conf
backup=$(mktemp -d /etc/nginx/csquest-library-transfer-backup.XXXXXX)
cp "$config" "$backup/site"
had_snippet=false
if test -f "$snippet"; then cp "$snippet" "$backup/snippet"; had_snippet=true; fi
restore() {
    cp "$backup/site" "$config"
    if test "$had_snippet" = true; then cp "$backup/snippet" "$snippet"; else rm -f "$snippet"; fi
}
install -m 644 "$source_dir/library-transfers.nginx.conf" "$snippet"
if ! python3 - <<'PY'
from pathlib import Path
import re
config = Path('/etc/nginx/sites-available/csquest')
source = config.read_text()
include = 'include /etc/nginx/snippets/csquest-library-transfers.conf;'
if include not in source:
    source, count = re.subn(r'(client_max_body_size\s+4m;)', r'\1\n    '+include, source)
    if not count:
        raise SystemExit('Expected CSQuest proxy configuration was not found.')
    config.write_text(source)
PY
then restore; exit 1; fi
if ! nginx -t; then restore; exit 1; fi
if ! systemctl reload nginx; then restore; nginx -t; systemctl reload nginx; exit 1; fi
printf 'Library transfer proxy configured; previous configuration: %s\n' "$backup"
