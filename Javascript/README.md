# JavaScript Learning Notes

This folder contains small JavaScript practice files used while learning JavaScript basics for automation and Playwright preparation.

## Prerequisites

- Install Node.js.
- Open this project in VS Code.
- Run JavaScript files from the `Javascript` folder.

Check your Node.js setup:

```powershell
node Chapter_01_Basics/Js_Verify_Setup.js
```

## Folder Structure

```text
Javascript/
+-- Chapter_01_Basics/
|   +-- 01_Basics.js
|   +-- Js_Verify_Setup.js
|   +-- Js_Variables.js
+-- Chapter_02_Declaration/
    +-- Declaration.js
    +-- hoisting.js
    +-- let_hoisting.js
    +-- var_scope.js
```

## Chapter 01: Basics

### `01_Basics.js`

Prints a simple message and shows the current system architecture using `process.arch`.

Run:

```powershell
node Chapter_01_Basics/01_Basics.js
```

### `Js_Verify_Setup.js`

Verifies that Node.js is working by printing the system architecture.

Run:

```powershell
node Chapter_01_Basics/Js_Verify_Setup.js
```

### `Js_Variables.js`

Covers the basics of variables in JavaScript.

Topics:

- What a variable is
- Declaring variables with `var`, `let`, and `const`
- Variable naming rules
- Valid and invalid variable names
- Case-sensitive variable names
- Naming styles such as `camelCase`, `PascalCase`, `snake_case`, and `UPPER_SNAKE_CASE`
- Why JavaScript variable names cannot use `kebab-case`
- Useful VS Code shortcuts for Windows

Run:

```powershell
node Chapter_01_Basics/Js_Variables.js
```

## Chapter 02: Declarations

### `Declaration.js`

Placeholder file for declaration practice.

### `hoisting.js`

Shows how `var` is hoisted and initialized with `undefined` before assignment.

Important note:

- `var` declarations are hoisted and initialized with `undefined`.
- `let` and `const` are hoisted too, but they stay in the temporal dead zone until the declaration line runs.
- Accessing `let` or `const` before declaration causes a `ReferenceError`.

Run:

```powershell
node Chapter_02_Declaration/hoisting.js
```

### `let_hoisting.js`

Demonstrates block scope and the temporal dead zone behavior of `let`.

Run:

```powershell
node Chapter_02_Declaration/let_hoisting.js
```

### `var_scope.js`

Placeholder file for `var` scope examples.

## Variable Declaration Quick Reference

```javascript
var city = "Pune";      // old style, function-scoped
let age = 25;           // modern style, block-scoped, value can change
const country = "India"; // modern style, block-scoped, value should not change
```

Prefer `let` when a value can change and `const` when it should stay the same.

## Variable Naming Rules

- Variable names can contain letters, numbers, `_`, and `$`.
- Variable names cannot start with a number.
- Variable names cannot contain spaces.
- Variable names are case-sensitive.
- JavaScript reserved keywords cannot be used as variable names.

Examples:

```javascript
let studentName = "Rahul";
let student_age = 20;
let $salary = 50000;
let totalMarks1 = 95;
```

## Useful VS Code Shortcuts For Windows

| Shortcut | Use |
| --- | --- |
| `Ctrl + /` | Add or remove line comment |
| `Shift + Alt + A` | Add or remove block comment |
| `Shift + Alt + F` | Format document |
| `Ctrl + S` | Save file |
| `Ctrl + F` | Find text |
| `Ctrl + H` | Replace text |
| `Ctrl + `` | Open or close terminal |
| `Ctrl + P` | Quickly open a file |
| `Ctrl + Shift + P` | Open command palette |

## Best Practices

- Use meaningful variable names.
- Prefer `camelCase` for normal JavaScript variables.
- Prefer `const` by default, and use `let` only when the value must change.
- Avoid `var` in modern JavaScript unless you are learning how older code behaves.
