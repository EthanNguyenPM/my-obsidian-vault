---
tags:
  - macos
  - spotlight
  - troubleshooting
  - howto
  - system
  - resources
---
---
**TOC:
- [[#Overview|Overview]]
- [[#Problem|Problem]]
- [[#Solution|Solution]]
- [[#Commands Explanation|Commands Explanation]]
---
## Overview

- When searching for apps like Calculator or Calendar using Spotlight, it sometimes fails to find them.
- This issue can be frustrating and affects the user experience.

## Problem

- The problem started after upgrading from macOS Catalina to Monterey.
- Built-in apps have been moved to `/System/Applications`, which may cause Spotlight not to index them properly.

## Solution

- A similar issue is discussed in this [post](https://apple.stackexchange.com/questions/431281/spotlight-search-useless-for-basic-core-apps).
- To resolve the issue, use the following command in your terminal:

  ```zsh
  sudo mdutil -sa
  ```

- If the output shows:

  ```zsh
  /:
  Indexing disabled.
  ```

- Enable indexing by running:

  ```zsh
  sudo mdutil -i on /
  ```

This should help Spotlight find your core apps by enabling indexing on `/System`.

## Commands Explanation

- **`sudo mdutil -sa`**
    - `sudo`: Runs the command with administrative privileges.
    - `mdutil`: A command-line tool for managing Spotlight indexing.
    - `-s`: Displays the indexing status of volumes.
    - `-a`: Applies the command to all volumes.
    
    This command checks the indexing status of all volumes on your Mac.
    
- **`sudo mdutil -i on /`**
    
    - `-i on`: Enables indexing.
    - `/`: Specifies the root volume (your main system).
    
    This command enables Spotlight indexing on the root volume, which includes system applications.