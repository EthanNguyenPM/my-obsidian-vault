## Overview

As you know it's quite easy to recover deleted files in VsCode, but how about we deal it when we're using `nvim` or command line tool

So in this topic, I will cover all the possible solution to tackle this problem

## Recover files after committing changes

Let's say you committed a change but did a hard reset `git reset --hard HEAD` to a different commit which removed the latest commit from your current branch.

![[Pasted image 20241001145417.png]]

In this case, you can restore the deleted file using `git checkout`

You can find the hash-ID of the previous commits from the command: git log.

```zsh
git log
```

Or you can use this command in case you didn't find hash-ID

```zsh
git reflog
```

After finding the hash-ID of commit that you want to restore, execute this command to revert:

```zsh
git checkout <hash-ID>
```

## Recover files when changes are staged but not committed

Suppose you staged a file with `git add <file-name>` and then did a hard reset with `git reset --hard HEAD` before committing. Afterward, you found out the staged file is missing. In this case, also, you can recover the file.

We can use the command `git fsck` to recover the files after a hard reset.
- `git fsck` stands for file system check. It checks for all the "dangling blobs" in the `.git` directory that are not part of any changes. For instance, there could be some changes where were stagged but not added to anywhere.



