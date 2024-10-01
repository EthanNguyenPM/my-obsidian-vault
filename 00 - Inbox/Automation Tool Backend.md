<!--toc:start-->
- [Automation Tool Backend](#automation-tool-backend)
  - [Requirements](#requirements)
  - [Setup](#setup)
    - [Setting up MySQL](#setting-up-mysql)
    - [Configuring Environment Variables](#configuring-environment-variables)
    - [Running in Development Mode](#running-in-development-mode)
<!--toc:end-->

## Requirements

- Django version 3.2.4 or higher
- `pipenv` (recommended over `pip`)

## Setup

### Setting up MySQL

Ensure that the `automation_tool` database exists in your MySQL setup. If it doesn't, follow the instructions below to create it:

Open your terminal (in this example, using WezTerm):

```zsh
mysql -u root -p
```

Once logged into MySQL, create the `automation_tool` database:

```mysql
CREATE DATABASE automation_tool;
```

### Configuring Environment Variables

Copy the `.env.development` file and rename it to `.env`. Then, update the database configuration values with your current MySQL and MongoDB settings, as shown below:

```env
DEBUG=False
DB_NAME=automation_tool
DB_USER=root
DB_PASSWORD=<your-mysql-password-here>
DB_HOST=127.0.0.1
DB_PORT=3306
MONGO_DB_NAME=automation_tool
MONGO_DB_USER=root
MONGO_DB_PASSWORD=<your-mysql-password-here>
MONGO_DB_HOST=localhost
MONGO_DB_PORT=27017
```

### Running in Development Mode

1. First, create a virtual environment inside the project folder `automation_tool_be`:
    
```zsh
pipenv shell
```
    
2. Install the required packages into the virtual environment:

```zsh
pipenv install -r requirements.txt
```
    
3. After the installation is complete, run the following command to migrate the tables into the MySQL database:
    
```zsh
pipenv run python manage.py migrate
```
    
4. Next, execute the seed script to generate the initial data:

```zsh
pipenv run python manage.py seed
```
    
5. Finally, start the Django server with the following command:
    
```zsh
pipenv run python manage.py grpcrunaioserver --dev
```
