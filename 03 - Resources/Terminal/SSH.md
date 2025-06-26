---
tags:
  - resources
---
create ssh

```bash
ssh-keygen
```

store it in `~/.ssh` to easy manage

after store, it, copy the key and paste it in the server, droplet that u want

To access the target, run this command below

```bash
ssh -i /path/to/private_key root@ipv4-target
ssh -i ~/.ssh/digital-ocean-wreflect-droplet root@165.232.160.169
```

