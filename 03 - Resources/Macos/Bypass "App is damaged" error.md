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


```bash
xattr -cr ~/Desktop/ && codesign --force --deep --sign - ~/Desktop/
``
![[Pasted image 20260827153127.png]]