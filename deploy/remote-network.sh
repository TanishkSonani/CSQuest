#!/bin/bash
set -euo pipefail
# Only these dedicated identities are restricted. CSQuest's instance-principal
# Object Storage access and the VM's DNS/storage infrastructure stay unchanged.
for family in iptables ip6tables; do
    command -v "$family" >/dev/null || continue
    "$family" -N CSQUEST_REMOTE 2>/dev/null || true
    "$family" -F CSQUEST_REMOTE
    "$family" -A CSQUEST_REMOTE -m conntrack --ctstate ESTABLISHED,RELATED -j RETURN
    if test "$family" = iptables; then
        for protocol in tcp udp; do "$family" -A CSQUEST_REMOTE -d 127.0.0.53/32 -p "$protocol" --dport 53 -j RETURN; done
        for network in 127.0.0.0/8 10.0.0.0/8 172.16.0.0/12 192.168.0.0/16 169.254.0.0/16 100.64.0.0/10; do "$family" -A CSQUEST_REMOTE -d "$network" -j REJECT; done
    else
        for network in ::1/128 fc00::/7 fe80::/10 ::ffff:0:0/96; do "$family" -A CSQUEST_REMOTE -d "$network" -j REJECT; done
    fi
    "$family" -A CSQUEST_REMOTE -j RETURN
    for user in csquest-browser csquest-terminal; do
        uid=$(id -u "$user")
        "$family" -C OUTPUT -m owner --uid-owner "$uid" -j CSQUEST_REMOTE 2>/dev/null || "$family" -I OUTPUT 1 -m owner --uid-owner "$uid" -j CSQUEST_REMOTE
    done
done
