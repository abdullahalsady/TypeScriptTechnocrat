# 🚀 TypeScriptTechnocart

A video-wise practice journey to master TypeScript fundamentals!  
Each module represents one step closer to becoming a TypeScript pro.

---

## 📦 Packages Used

### 🧰 [fnm (Fast Node Manager)](https://github.com/Schniz/fnm)
- Helps manage multiple Node.js versions efficiently.
- Lightweight alternative to `nvm`.

### ⚡ [ts-node-dev](https://github.com/wclr/ts-node-dev)
- TypeScript execution environment with automatic restarts and fast incremental compilation.

```bash
npm install -g ts-node-dev
```

---

## ⚙️ TypeScript Setup Guide

### 1️⃣ Initialize Project

```bash
npm init -y
npm install typescript --save-dev
npx tsc --init
```

### 2️⃣ Compile TypeScript

```bash
npx tsc
```

### 3️⃣ Run with ts-node-dev

```bash
npx ts-node-dev ModuleOne/src/1.4.ts
```

---

## 🏗️ Project Structure

```bash
TypeScriptTechnocart/
│
├── tsconfig.json       # TypeScript config
│
├── ModuleOne/
│   ├── dist/           # Compiled JavaScript files
│   └── src/            # Practice TypeScript files
│       ├── 1.4.ts       # String, number, boolean, tuple
│       ├── 1.5.ts       # Object types
│       ├── 1.6.ts       # Functions & callbacks
│       ├── 1.7.ts       # Spread, Rest, Destructuring
│       ├── 1.8.ts       # Destructuring deeply
│       ├── 1.9.ts       # Type & function alias
│       ├── 1.10.ts      # Union & Intersection types
│       ├── 1.11.ts      # Ternary, nullish, optional chaining
│       └── 1.12.ts      # Nullable, never, unknown types
```

---

## 🧩 `tsconfig.json` Highlights

> The `tsconfig.json` file is the heart of any TypeScript project. It defines how your code is compiled.

```json
{
  "compilerOptions": {
    "target": "ES6",                     // 🔄 Version of JS to compile to
    "module": "commonjs",                // 📦 Module system
    "rootDir": "./ModuleOne/src",        // 📂 TS source folder
    "outDir": "./ModuleOne/dist",        // 📤 Compiled JS output folder
    "strict": true,                      // ✅ Enable strict type checks
    "esModuleInterop": true              // 🔄 Support for CommonJS/ESM interop
  }
}
```

---

## 📚 Practice Files Overview

| File | Concepts Covered |
|------|------------------|
| [`1.4.ts`](../ModuleOne/src/1.4.ts) | Basic Types: `string`, `number`, `boolean`, `null`, `undefined`, `any`, arrays, tuples |
| [`1.5.ts`](../ModuleOne/src/1.5.ts) | Object types, optional fields, `readonly`, literal types |
<<<<<<< HEAD
| [`1.6.ts`](./ModuleOne/src/1.6.ts) | Functions, default params, arrow functions, methods, callback functions |
| [`1.7.ts`](./ModuleOne/src/1.7.ts) | Spread operator, Rest params, Destructuring (object & array) |
| [`1.8.ts`](./ModuleOne/src/1.8.ts) | Deep object and array destructuring |
| [`1.9.ts`](./ModuleOne/src/1.9.ts) | Type Aliases (`type`), function aliases, name alias |
| [`1.10.ts`](./ModuleOne/src/1.10.ts) | Union & Intersection Types |
| [`1.11.ts`](./ModuleOne/src/1.11.ts) | Ternary Operator, Nullish Coalescing (`??`), Optional Chaining |
| [`1.12.ts`](./ModuleOne/src/1.12.ts) | Nullable values, `unknown` type, `never` type, error throwing |
=======
| [`1.6.ts`](../ModuleOne/src/1.6.ts) | Functions, default params, arrow functions, methods, callback functions |
| [`1.7.ts`](../ModuleOne/src/1.7.ts) | Spread operator, Rest params, Destructuring (object & array) |
| [`1.8.ts`](../ModuleOne/src/1.8.ts) | Deep object and array destructuring |
| [`1.9.ts`](../ModuleOne/src/1.9.ts) | Type Aliases (`type`), function aliases, name alias |
| [`1.10.ts`](../ModuleOne/src/1.10.ts) | Union & Intersection Types |
| [`1.11.ts`](../ModuleOne/src/1.11.ts) | Ternary Operator, Nullish Coalescing (`??`), Optional Chaining |
| [`1.12.ts`](../ModuleOne/src/1.12.ts) | Nullable values, `unknown` type, `never` type, error throwing |
>>>>>>> d69ff49014569f763c770bf7224a8c23f2c8b661

---

## 💡 Bonus Tips

- Run `ts-node-dev` to avoid re-compiling manually.
- Prefer using type aliases for clean and readable code.
- Use `unknown` over `any` for safer dynamic values.
- Keep `strict: true` in `tsconfig.json` for robust type checking.

---

✍️ Developed with ❤️ by [Sady](https://github.com/abdullahalsady)
