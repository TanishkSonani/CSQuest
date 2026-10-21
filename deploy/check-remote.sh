#!/bin/bash
# Independent availability recovery; do not launch Firefox/Terminal here.
set -euo pipefail
test "$(id -u)" = 0
# Updating Firefox intentionally stops the broker. Never race maintenance.
exec 9>/run/lock/csquest-firefox-update.lock
flock -n 9 || exit 0
marker=/run/csquest-remote-health.failed
# A hard-killed update can stop between the two atomic directory renames.
if test ! -e /opt/csquest-remote/firefox && test -x /opt/csquest-remote/firefox.previous/firefox; then
    mv /opt/csquest-remote/firefox.previous /opt/csquest-remote/firefox
    logger -t csquest-remote-health 'Restored the previous Firefox installation after interrupted maintenance.'
fi
if ! systemctl is-active --quiet csquest-remote-network.service || ! systemctl is-active --quiet csquest-remote.service; then
    systemctl start csquest-remote-network.service csquest-remote.service
fi
if curl --fail --silent --max-time 5 --unix-socket /run/csquest-remote/broker.sock http://localhost/health | python3 -c 'import json,sys; sys.exit(0 if json.load(sys.stdin).get("ready") is True else 1)' 2>/dev/null; then
    rm -f "$marker"
    exit 0
fi
# A single delayed response must not terminate a user's active session.
now=$(date +%s)
if test ! -f "$marker"; then printf '%s\n' "$now" > "$marker"; exit 0; fi
previous=$(cat "$marker")
[[ "$previous" =~ ^[0-9]+$ ]] || previous=0
if (( now - previous < 30 )); then exit 0; fi
logger -t csquest-remote-health 'Session broker failed consecutive health checks; restarting it.'
systemctl restart csquest-remote.service
rm -f "$marker"
