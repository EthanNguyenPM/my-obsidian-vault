---
tags:
  - resources
---
## How to Encrypt with SSL

[NGINX, SSL With Lets Encrypt](https://youtu.be/oykl1Ih9pMg)

```bash
sudo certbot certonly --dns-duckdns-credentials ~/duckdns.ini -d wreflect.duckdns.org
```

```
sudo chmod 600 /root/duckdns.ini
```

[ddns-duck](https://github.com/infinityofspace/certbot_dns_duckdns#usage)

## PostgreSQL

[Install PostgreSQL](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)

```
sudo -u postgres psql

CREATE DATABASE wReflect;

CREATE USER postgres WITH PASSWORD '514723';

ALTER USER postgres WITH PASSWORD '514723';

GRANT ALL PRIVILEGES ON DATABASE wReflect TO postgres;
```

## Nginx

```
sudo systemctl restart nginx
```

## Add domain

[Domain and DNS](https://docs.digitalocean.com/products/networking/dns/)