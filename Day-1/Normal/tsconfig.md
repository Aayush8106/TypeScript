# TypeScript `tsconfig.json` — Quick Reference

## 1. What is `tsconfig.json`?

`tsconfig.json` is the configuration file for the TypeScript compiler (`tsc`).

It tells TypeScript things like:

- Where my TypeScript files are
- Where to put compiled JavaScript
- What JavaScript version to generate
- How strict TypeScript should be
- Which files to include/exclude

---

# 2. Basic Structure

```json
{
    "compilerOptions": {
        "rootDir": "./src-TS",
        "outDir": "./compiled-JS"
    }
}