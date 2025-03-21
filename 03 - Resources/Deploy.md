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


### Connect to your database

```bash
\c wReflect;
```

### Update queries

```bash
BEGIN;

-- Disable triggers to prevent foreign key constraint errors
ALTER TABLE "TemplateQuestion" DISABLE TRIGGER ALL;

-- Update each question ID based on its title
UPDATE "TemplateQuestion" SET id = 'txt_template_question_1' WHERE title = 'Objective';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_2' WHERE title = 'Roles & Responsibilities';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_3' WHERE title = 'Openness';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_4' WHERE title = 'Trust';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_5' WHERE title = 'Conflict & Differentiation';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_6' WHERE title = 'Collaboration';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_7' WHERE title = 'Contribution';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_8' WHERE title = 'Decisions';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_9' WHERE title = 'Flexibility';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_10' WHERE title = 'Resources';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_11' WHERE title = 'Fun';
UPDATE "TemplateQuestion" SET id = 'txt_template_question_12' WHERE title = 'Learning';

-- Re-enable triggers after update
ALTER TABLE "TemplateQuestion" ENABLE TRIGGER ALL;

COMMIT;

```


```bash
BEGIN;

-- Disable triggers to prevent foreign key constraint errors
ALTER TABLE "HealthCheckTemplate" DISABLE TRIGGER ALL;

-- Update each question ID based on its title
UPDATE "TemplateQuestion" SET id = 'txt_health_check_template_default' WHERE id='e420da49-cd0d-4e9f-8a0b-6eb21bb344ca';

-- Re-enable triggers after update
ALTER TABLE "HealthCheckTemplate" ENABLE TRIGGER ALL;

COMMIT;
```


### View columns in table

```bash
SELECT id, title FROM "HealthCheckTemplate";
```

## Nginx


```
sudo systemctl restart nginx
```

### Config Nginx

```bash
sudo nvim /etc/nginx/sites-available/default
```

## Add domain

[Domain and DNS](https://docs.digitalocean.com/products/networking/dns/)


## PM2

### Client side

```bash
pm2 serve build/ 3000 --name "client" --spa
```

### Server side

```bash
pm2 start dish/app.js
```

### Startup when reboot

```bash
pm2 startup
pm2 save
```

## Prisma

### Show help

```bash
yarn prisma -h
```

### Migrate new change from local codebase to database

```bash
yarn prisma migrate dev
```
