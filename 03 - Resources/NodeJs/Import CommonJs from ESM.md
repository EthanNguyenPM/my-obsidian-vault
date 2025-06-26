---
tags:
  - resources
---
Firstly, you can see that we quite struggle to import commonjs that often see in other packages cuz they use old commonjs

There is a solution for this, first we can create a require function by our own

```javascript
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url)
```

By leveraging the node:module built-in package in Node.js, so we could use require function to import any CommonJs