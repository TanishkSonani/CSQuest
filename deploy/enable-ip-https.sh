#!/bin/bash
# Enable trusted HTTPS for a public IP without a custom domain.
set -euo pipefail
test "$(id -u)" = 0
public_ip=${1:?Usage: enable-ip-https.sh PUBLIC_IP}
python3 -c 'import ipaddress,sys; ipaddress.IPv4Address(sys.argv[1])' "$public_ip"
export DEBIAN_FRONTEND=noninteractive
apt-get install -y iptables-persistent
for port in 80 443; do
    iptables -C INPUT -p tcp --dport "$port" -j ACCEPT 2>/dev/null || iptables -I INPUT 1 -p tcp --dport "$port" -j ACCEPT
done
netfilter-persistent save
install -d -m 755 /var/www/csquest-acme
cat > /etc/nginx/sites-available/csquest <<NGINX
server {
    listen 80;
    server_name $public_ip;
    client_max_body_size 4m;
    location /.well-known/acme-challenge/ { root /var/www/csquest-acme; }
    location / {
        proxy_pass http://127.0.0.1:4173;
        proxy_set_header Host \$http_host;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header X-Forwarded-For \$remote_addr;
    }
}
NGINX
ln -sfn /etc/nginx/sites-available/csquest /etc/nginx/sites-enabled/csquest
nginx -t
systemctl enable --now nginx
systemctl reload nginx
python3 -m venv /opt/csquest-certbot
/opt/csquest-certbot/bin/python -m pip install 'certbot>=5.4,<6'
/opt/csquest-certbot/bin/certbot certonly --non-interactive --agree-tos --register-unsafely-without-email --required-profile shortlived --webroot --webroot-path /var/www/csquest-acme --ip-address "$public_ip"
cat > /etc/nginx/sites-available/csquest <<NGINX
server {
    listen 80;
    server_name $public_ip;
    location /.well-known/acme-challenge/ { root /var/www/csquest-acme; }
    location / { return 301 https://$public_ip\$request_uri; }
}
server {
    listen 443 ssl;
    server_name $public_ip;
    ssl_certificate /etc/letsencrypt/live/$public_ip/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$public_ip/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    client_max_body_size 4m;
    proxy_request_buffering off;
    location / {
        proxy_pass http://127.0.0.1:4173;
        proxy_http_version 1.1;
        proxy_set_header Host \$http_host;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header X-Forwarded-For \$remote_addr;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_read_timeout 60s;
    }
}
NGINX
nginx -t
systemctl reload nginx
install -d /etc/letsencrypt/renewal-hooks/deploy
printf '#!/bin/sh\n/usr/bin/systemctl reload nginx\n' > /etc/letsencrypt/renewal-hooks/deploy/csquest-nginx
chmod 755 /etc/letsencrypt/renewal-hooks/deploy/csquest-nginx
cat > /etc/systemd/system/csquest-certbot.service <<'SERVICE'
[Unit]
Description=Renew CSQuest IP certificate
After=network-online.target nginx.service
[Service]
Type=oneshot
ExecStart=/opt/csquest-certbot/bin/certbot renew --quiet
SERVICE
cat > /etc/systemd/system/csquest-certbot.timer <<'TIMER'
[Unit]
Description=Check CSQuest certificate renewal every six hours
[Timer]
OnCalendar=*-*-* 00,06,12,18:00:00
RandomizedDelaySec=30m
Persistent=true
[Install]
WantedBy=timers.target
TIMER
systemctl daemon-reload
systemctl disable --now certbot.timer 2>/dev/null || true
systemctl enable --now csquest-certbot.timer
/opt/csquest-certbot/bin/certbot renew --dry-run --no-random-sleep-on-renew
printf 'CSQuest HTTPS ready: https://%s/\n' "$public_ip"
