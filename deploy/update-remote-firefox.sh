#!/bin/bash
set -euo pipefail
test "$(id -u)" = 0
exec 9>/run/lock/csquest-firefox-update.lock
flock -n 9 || exit 0
if test "${1:-}" = --if-idle; then
    if systemctl list-units --type=service --state=active --no-legend --plain 'csquest-remote-*.service' | grep -Eq '^[[:space:]]*csquest-remote-[a-f0-9-]{36}\.service'; then exit 0; fi
    latest=$(curl --fail --silent --show-error --max-time 30 https://product-details.mozilla.org/1.0/firefox_versions.json | python3 -c 'import json,sys; print(json.load(sys.stdin)["LATEST_FIREFOX_VERSION"])')
    [[ "$latest" =~ ^[0-9]+\.[0-9]+(\.[0-9]+)?$ ]]
    current=$(awk -F= '/^Version=/{print $2; exit}' /opt/csquest-remote/firefox/application.ini)
    if test "$latest" = "$current"; then exit 0; fi
fi
# Explicit maintenance: active remote sessions will be stopped.
archive=$(mktemp /var/lib/csquest-remote/firefox-update.XXXXXX.tar.xz)
stage=$(mktemp -d /var/lib/csquest-remote/firefox-update.XXXXXX)
stopped=false
recover(){
    status=$?
    if test "$status" != 0 && test "$stopped" = true; then
        if test ! -x /opt/csquest-remote/firefox/firefox && test -d /opt/csquest-remote/firefox.previous; then mv /opt/csquest-remote/firefox.previous /opt/csquest-remote/firefox; fi
        systemctl start csquest-remote.service || true
    fi
    rm -f "$archive"
    rm -rf "$stage"
    exit "$status"
}
trap recover EXIT
curl --fail --location --retry 3 --proto '=https' --proto-redir '=https' 'https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64-aarch64&lang=en-US' -o "$archive"
tar -xJf "$archive" -C "$stage"
test -x "$stage/firefox/firefox"
if test "${1:-}" = --if-idle; then
    # Atomically exclude new launches; never interrupt a session that started
    # while the update archive was downloading.
    if ! curl --fail --silent --unix-socket /run/csquest-remote/broker.sock -H 'Content-Type: application/json' -d '{}' http://localhost/maintenance >/dev/null; then exit 0; fi
fi
systemctl stop csquest-remote.service
stopped=true
systemctl stop 'csquest-remote-*.service' 2>/dev/null || true
previous=/opt/csquest-remote/firefox.previous
if test -e "$previous"; then rm -rf -- "$previous"; fi
mv /opt/csquest-remote/firefox "$previous"
mv "$stage/firefox" /opt/csquest-remote/firefox
chown -R root:root /opt/csquest-remote/firefox
install -d /opt/csquest-remote/firefox/distribution
printf '%s\n' '{"policies":{"DisableAppUpdate":true,"DontCheckDefaultBrowser":true}}' > /opt/csquest-remote/firefox/distribution/policies.json
systemctl start csquest-remote.service
printf 'Firefox updated; previous build retained at %s\n' "$previous"
