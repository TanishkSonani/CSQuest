#!/bin/bash
# One-time initialization of the verified, new 150 GiB CSQuest block volume.
set -euo pipefail
device=/dev/oracleoci/oraclevdb
mountpoint=/srv/csquest-data
test "$(id -u)" = 0
test -b "$device"
test "$(blockdev --getsize64 "$device")" = 161061273600
test "$(lsblk -nr -o NAME "$device" | wc -l)" = 1
test -z "$(lsblk -nr -o MOUNTPOINTS "$device")"
test -z "$(wipefs --no-act --noheadings "$device")"
if test -d "$mountpoint"; then test -z "$(ls -A "$mountpoint")"; fi
mkfs.ext4 -m 1 -L csquest-data "$device"
install -d -m 755 "$mountpoint"
uuid=$(blkid -s UUID -o value "$device")
test -n "$uuid"
cp -a /etc/fstab /etc/fstab.before-csquest
printf 'UUID=%s /srv/csquest-data ext4 defaults,_netdev,nofail 0 2\n' "$uuid" >> /etc/fstab
systemctl daemon-reload
mount "$mountpoint"
findmnt --target "$mountpoint"
df -h "$mountpoint"
