---
tags:
  - resources
---
## 🛠️ Fix “App is damaged and can’t be opened” on macOS
  
Use this command when macOS blocks an app with an error like:  
> “The app is damaged and can’t be opened. You should move it to the Trash.”

### 🔧 Terminal Command


```bash
xattr -cr /Applications/App\ name.app && codesign --force --deep --sign - /Applications/App\ name.app
```

