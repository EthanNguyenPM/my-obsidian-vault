---
tags:
  - resources
  - azure
  - authentication
---
## Install Azure-CLI on your computer

Following this command to install the package in your macos

```bash
brew install azure-cli
```

## Access the azure app registration

### Login your account into azure cli

```bash
az login
```

After executed this command, you will be redirected to the browser and proceed the login there.
### List all app registration

```bash
az ad app list --output table
```

The command above will show us the list of app registration

### View the info of an application

```bash
az ad app show --id {your_app_id}
```

### Update the application

#### Create 2 files in your current directory

Create Body Json file `headers.json`

```json
{ "Content-Type": "application/json" }
```

Next, create `body.json` file, and replace the location and key-value that u want to update

```json
{
  "web": {
    "redirectUris": [
      "https://wreflect.jp.auth0.com/login/callback",
      "https://dev-m0ubghav.us.auth0.com/login/callback"
    ]
  }
}
```

#### Execute the command

```bash
az rest \
  --method patch \
  --uri "https://graph.microsoft.com/v1.0/applications(appId='{app_id}')" \
  --headers @headers.json \
  --body @body.json
```


## References

- [azure-graph-api](https://learn.microsoft.com/en-us/graph/api/application-update?view=graph-rest-1.0&tabs=http)
- [azure-cli-doc](https://learn.microsoft.com/en-us/cli/azure/microsoft-graph-migration#known-issues)
- [Microsoft Entra admin center](https://entra.microsoft.com/#home)
- Van Lang Uni `Wreflect` Credential  

```json
{
  "appId": "40c3c8c6-70bc-4827-948e-0eba303211eb",
  "password": "TTB8Q~-St8Mb0.jmNfhMAy5hRnIGxWeh0Ucyea9.",
  "tenant": "3011a54b-0a5d-4929-bf02-a00787877c6a"
}
```
