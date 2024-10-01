---
tags:
  - resources
  - mysql
  - database
  - relational_database
---
## How to change user password on mysql

Mysql change user password using the following method:

1. Open the bash shell and connect to the server as root user:  

```zsh
mysql -u root -h localhost -p
```
	
2. Run ALTER mysql command:  

```mysql
ALTER USER 'userName'@'localhost' IDENTIFIED BY 'New-Password-Here';
```

3. Finally type SQL command to reload the grant tables in the mysql database:  
```mysql
FLUSH PRIVILEGES;
```

## Create new database

```mysql
CREATE DATABASE 'Database-Name-Here';
```