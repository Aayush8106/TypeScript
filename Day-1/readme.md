# TypeScript Learning — Day 1

Today I started learning **TypeScript** and also used it to build my first small web application.

---

## 📁 Project Structure

    Day-1/
    │
    ├── Normal/
    │   ├── src-TS/
    │   ├── compiled-JS/
    │   ├── tsconfig.json
    │   └── tsconfig.md
    │
    └── Web/
        ├── src-TS/
        ├── compiled-JS/
        ├── index.html
        ├── index.css
        ├── tsconfig.json
        └── web.md

---

# 🧠 Normal TypeScript

In the `Normal` folder, I learned the fundamentals of TypeScript.

## Topics Learned

- Basic TypeScript types
  - `string`
  - `number`
  - `boolean`
- Type inference
- Arrays
- Objects
- Custom types using `type`
- Interfaces
- Functions
- Function parameter types
- Return types
- Understanding TypeScript errors
- TypeScript compiler (`tsc`)
- Compiling `.ts` files into `.js`
- `tsconfig.json`
- `rootDir`
- `outDir`
- Compiling multiple TypeScript files
- Watch mode using `tsc -w`

## TypeScript Compilation

I learned how TypeScript code is converted into JavaScript:

    TypeScript
        ↓
       tsc
        ↓
    JavaScript

I also configured TypeScript so that:

    src-TS/
       Hello.ts
          ↓
         tsc
          ↓
    compiled-JS/
       Hello.js

---

# 🌐 Web TypeScript

After learning the basics, I used TypeScript with HTML to build my first interactive web application.

## 🛠️ Project Created

### TypeScript Counter App

The application contains:

    TypeScript Counter

    Count: 0

    [-]   [reset]   [+]

### Features

- Increase the counter
- Decrease the counter
- Reset the counter to `0`

---

# 🌐 Web Concepts Learned

I learned how TypeScript interacts with HTML and the browser.

## DOM Manipulation

Used:

    document.getElementById()

to access HTML elements from TypeScript.

## Event Listeners

Used:

    addEventListener()

to respond to button clicks.

## Updating HTML

Used:

    textContent

to update the counter displayed on the webpage.

## TypeScript and DOM

Learned that DOM methods can potentially return `null`, and TypeScript requires us to handle that possibility.

For elements that are guaranteed to exist in our HTML, I learned about the non-null assertion operator:

    !

Example:

    const countElement = document.getElementById("count")!;

---

# 🔄 Complete Web Workflow

I learned the complete process of using TypeScript in a webpage:

    main.ts
       ↓
    TypeScript Compiler (tsc)
       ↓
    main.js
       ↓
    index.html
       ↓
    Browser

The browser runs the compiled JavaScript rather than directly running the TypeScript file.

---

# 📚 Day 1 Summary

## Normal TypeScript

    Types
      ↓
    Arrays
      ↓
    Objects
      ↓
    Custom Types
      ↓
    Interfaces
      ↓
    Functions
      ↓
    Type Inference
      ↓
    TypeScript Compiler
      ↓
    tsconfig.json

## TypeScript for Web

    HTML
      ↓
    DOM
      ↓
    TypeScript
      ↓
    getElementById()
      ↓
    Event Listeners
      ↓
    textContent
      ↓
    Interactive Web App

---

# 🎯 Day 1 Result

By the end of Day 1, I was able to:

- Learn the fundamentals of TypeScript
- Compile TypeScript into JavaScript
- Configure a TypeScript project using `tsconfig.json`
- Understand the TypeScript → JavaScript workflow
- Connect compiled JavaScript with HTML
- Access HTML elements using TypeScript
- Handle browser events
- Manipulate the DOM
- Build my first **TypeScript Counter App**

---

# 🚀 Next

Continue learning more TypeScript concepts and eventually move towards:

    TypeScript
        ↓
    TypeScript Web Projects
        ↓
    React
        ↓
    React + TypeScript