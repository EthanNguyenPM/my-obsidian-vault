---
tags:
  - resources
  - zsh
---
## Prerequisite

Make sure you meet the following requirements:
- For macOS/Linux: You should have _`Zsh`_ installed.

## Installation

### 1. Install Prezto

First, install [Prezto](https://github.com/sorin-ionescu/prezto) by following the instructions in their documentation.

### 2. Clone the Configuration Repository

Clone the custom configuration repository and update it to your current prezto setup:

```bash
git clone https://github.com/ThanhTanPM2000/prezto_zsh_configuration
```

### 3. Create Custom Plugin Folder

Next, create a folder for custom plugins:
bash

```bash
mkdir -p ~/.zprezto/contrib/ && cd ~/.zprezto/contrib/
```

### 4. Install Necessary Plugins

Now, install the necessary plugins into the `~/.zprezto/contrib` directory:

- [zsh-vi-mode](https://github.com/jeffreytse/zsh-vi-mode)
- [fzf-zsh-plugin](https://github.com/unixorn/fzf-zsh-plugin)
- [eza-zsh](https://github.com/MohamedElashri/eza-zsh)

You can clone them directly from their respective repositories:
bash

git clone https://github.com/jeffreytse/zsh-vi-mode.git
git clone https://github.com/unixorn/fzf-zsh-plugin.git
git clone https://github.com/MohamedElashri/eza-zsh.git

## Backup on GitHub Repository

To back up your Prezto configuration on GitHub, follow these steps:

### 1. Create a backup directory:

```bash
mkdir ~/Documents/prezto_zsh_configuration
```

### 2. Copy your configuration files and folders:

```bash
cp -rf ~/.zpreztorc ~/.zshrc ~/.config/zsh ~/Documents/prezto_zsh_configuration
```

[Repository](https://github.com/ThanhTanPM2000/prezto_zsh_configuration)