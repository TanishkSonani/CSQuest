#!/bin/bash
# Run as root from a checkout. Installs native ARM64 Firefox on Boot storage.
set -euo pipefail
test "$(id -u)" = 0
test "$(uname -m)" = aarch64
base=$(cd "$(dirname "$0")" && pwd)
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y --no-install-recommends tigervnc-standalone-server tigervnc-tools openbox ttyd dbus-x11 libgtk-3-0 libdbus-glib-1-2 libasound2t64 fonts-dejavu-core curl xz-utils iptables
install -d -m 755 /opt/csquest-remote /var/lib/csquest-remote
for kind in browser terminal; do
    user=csquest-$kind
    id "$user" >/dev/null 2>&1 || useradd --system --user-group --home-dir /var/lib/csquest-remote/$kind --shell /bin/bash "$user"
done
for spec in firefox:csquest-browser:2048 terminal:csquest-terminal:1024; do
    IFS=: read -r name user size <<< "$spec"
    image=/var/lib/csquest-remote/$name.ext4
    target=/var/lib/csquest-remote/$name
    install -d -m 700 "$target"
    if test ! -e "$image"; then
        truncate -s "${size}M" "$image"
        chmod 600 "$image"
        mkfs.ext4 -q -F -m 0 "$image"
    fi
    grep -Fq "$image $target " /etc/fstab || printf '%s %s ext4 loop,nosuid,nodev,nofail 0 0\n' "$image" "$target" >> /etc/fstab
    mountpoint -q "$target" || mount "$target"
    chown "$user:$user" "$target"
    chmod 700 "$target"
done
if test ! -x /opt/csquest-remote/firefox/firefox; then
    archive=$(mktemp /var/lib/csquest-remote/firefox-download.XXXXXX.tar.xz)
    trap 'rm -f "$archive"' EXIT
    curl --fail --location --retry 3 --proto '=https' --proto-redir '=https' 'https://download.mozilla.org/?product=firefox-latest-ssl&os=linux64-aarch64&lang=en-US' -o "$archive"
    tar -xJf "$archive" -C /opt/csquest-remote
    chown -R root:root /opt/csquest-remote/firefox
    rm -f "$archive"
    trap - EXIT
fi
install -d /opt/csquest-remote/firefox/distribution
printf '%s\n' '{"policies":{"DisableAppUpdate":true,"DontCheckDefaultBrowser":true}}' > /opt/csquest-remote/firefox/distribution/policies.json
install -d -o csquest-browser -g csquest-browser -m 700 /var/lib/csquest-remote/firefox/profile /var/lib/csquest-remote/firefox/Downloads
cat > /var/lib/csquest-remote/firefox/profile/user.js <<'PREFS'
user_pref("browser.cache.disk.capacity", 131072);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.download.dir", "/var/lib/csquest-remote/firefox/Downloads");
user_pref("browser.download.useDownloadDir", true);
PREFS
chown csquest-browser:csquest-browser /var/lib/csquest-remote/firefox/profile/user.js
# Firefox's built-in updater cannot modify this root-owned installation. Use
# the provided explicit maintenance script to replace it after stopping sessions.
if command -v apparmor_parser >/dev/null; then
cat > /etc/apparmor.d/csquest-remote-firefox <<'APPARMOR'
abi <abi/4.0>,
include <tunables/global>
profile csquest-remote-firefox /opt/csquest-remote/firefox/firefox{,-bin} flags=(unconfined) {
  userns,
}
APPARMOR
apparmor_parser -r /etc/apparmor.d/csquest-remote-firefox
fi
install -m 644 "$base/remote-broker.mjs" /opt/csquest-remote/broker.mjs
install -m 644 "$base/remote-worker.py" /opt/csquest-remote/worker.py
install -m 644 "$base/terminal.bashrc" /opt/csquest-remote/terminal.bashrc
install -m 755 "$base/remote-network.sh" /opt/csquest-remote/network.sh
install -m 755 "$base/update-remote-firefox.sh" /usr/local/sbin/csquest-update-firefox
install -m 644 "$base/csquest-remote.service" "$base/csquest-remote.slice" "$base/csquest-remote-network.service" /etc/systemd/system/
install -m 644 "$base/csquest-remote-update.service" "$base/csquest-remote-update.timer" /etc/systemd/system/
install -d /etc/systemd/system/csquest-remote.service.d
cat > /etc/systemd/system/csquest-remote.service.d/mounts.conf <<'UNIT'
[Unit]
RequiresMountsFor=/var/lib/csquest-remote/firefox /var/lib/csquest-remote/terminal
Requires=csquest-remote-network.service
After=csquest-remote-network.service
UNIT
systemctl daemon-reload
systemctl enable --now csquest-remote-network.service csquest-remote.service
systemctl enable --now csquest-remote-update.timer
printf '\nRemote session services installed. Set REMOTE_SESSION_SOCKET=/run/csquest-remote/broker.sock in the application environment.\n'
