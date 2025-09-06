# jaynil001-env-check

[![npm version](https://img.shields.io/npm/v/@jaynil001/env-check.svg)](https://www.npmjs.com/package/@jaynil001/env-check)
[![npm downloads](https://img.shields.io/npm/dm/@jaynil001/env-check.svg)](https://www.npmjs.com/package/@jaynil001/env-check)
[![license](https://img.shields.io/npm/l/@jaynil001/env-check.svg)](./LICENSE)

>  A lightweight Node.js/TypeScript package to validate environment variables at runtime.

---

##  Features
- ✅ Check required environment variables at startup  
- ✅ Zero dependencies → super lightweight  
- ✅ TypeScript-first with full typings  
- ✅ Works with Node.js, NestJS, Express, Next.js, etc.  

---

##  Installation

```bash
npm install @jaynil001/env-check
```

or with yarn:
```bash
yarn add @jaynil001/env-check
```

## Usage

### 1. Import

```ts
import { checkEnv } from "@jaynil001/env-check";
```

### 2. validate required env variables
```bash
checkEnv(["DB_HOST", "DB_USER", "DB_PASS"]);
```

- if missing
```bash
❌ Missing required environment variables: DB_PASS
```

- if all present
```bash
✅ All required environment variables are set!
```

---

## Example Use Case

Suppose you have a `.env` file like:

```env
DB_HOST=localhost
DB_USER=admin
DB_PASS=secret
```

You can validate these variables at the start of your application:

```ts
import { checkEnv } from "@jaynil001/env-check";

checkEnv(["DB_HOST", "DB_USER", "DB_PASS"]);
```

If any variable is missing, the process will exit with an error message.  
If all are present, your app continues to run as expected.