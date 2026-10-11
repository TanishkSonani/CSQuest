#!/bin/bash
# One-time setup. Usage: sudo bash configure-pipeline.sh PUBLIC_KEY_FILE
set -euo pipefail
test "$(id -u)" = 0
public_key_file=${1:?Provide a deployment SSH public key file}
test -f "$public_key_file"
key=$(cat "$public_key_file")
[[ "$key" =~ ^ssh-ed25519\ [A-Za-z0-9+/=]+\ .* ]]
id csquest-deploy >/dev/null 2>&1 || useradd --create-home --user-group --shell /bin/sh csquest-deploy
install -d -o csquest-deploy -g csquest-deploy -m 700 /home/csquest-deploy/.ssh
install -o root -g root -m 755 "$(dirname "$0")/deploy-release.sh" /usr/local/sbin/csquest-deploy
cat > /usr/local/bin/csquest-deploy-entry <<'ENTRY'
#!/bin/bash
set -euo pipefail
commit=${SSH_ORIGINAL_COMMAND:-}
[[ "$commit" =~ ^[0-9a-f]{40}$ ]]
exec sudo -n /usr/local/sbin/csquest-deploy "$commit"
ENTRY
chmod 755 /usr/local/bin/csquest-deploy-entry
printf 'command="/usr/local/bin/csquest-deploy-entry",restrict %s\n' "$key" > /home/csquest-deploy/.ssh/authorized_keys
chown csquest-deploy:csquest-deploy /home/csquest-deploy/.ssh/authorized_keys
chmod 600 /home/csquest-deploy/.ssh/authorized_keys
printf 'csquest-deploy ALL=(root) NOPASSWD: /usr/local/sbin/csquest-deploy\n' > /etc/sudoers.d/csquest-deploy
chmod 440 /etc/sudoers.d/csquest-deploy
visudo -cf /etc/sudoers.d/csquest-deploy
printf 'Restricted pipeline SSH access ready.\n'
