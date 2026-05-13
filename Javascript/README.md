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
+-- Chapter_03_Literal/
    +-- literal.js
    +-- number_literal.js
    +-- null_vs_undefined.js
    +-- string_literal.js
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

## Chapter 03: Literals

### `literal.js`

Shows common JavaScript literal examples, including string, number, boolean, null, object, and array literals.

Run:

```powershell
node Chapter_03_Literal/literal.js
```

### `number_literal.js`

Shows examples of number literals in JavaScript.

Topics:

- Integer numbers
- Decimal numbers
- Negative numbers
- Binary, octal, and hexadecimal numbers
- Exponential notation
- Numeric separators
- Special number values such as `Infinity` and `NaN`

Run:

```powershell
node Chapter_03_Literal/number_literal.js
```

### `string_literal.js`

Shows examples of string literals in JavaScript.

Topics:

- Strings with single quotes, double quotes, and backticks
- Escape characters
- New line strings
- Template literals
- Variables and expressions inside template literals
- Multi-line strings
- Empty strings
- String length

Run:

```powershell
node Chapter_03_Literal/string_literal.js
```

### `null_vs_undefined.js`

Explains the difference between `null` and `undefined`.

| Topic | `undefined` | `null` |
| --- | --- | --- |
| Meaning | Variable is declared but value is not assigned | Empty value is assigned intentionally |
| Assigned by | Usually JavaScript | Usually developer |
| Type | `undefined` | `object` |
| Example | `let age;` | `let age = null;` |

Run:

```powershell
node Chapter_03_Literal/null_vs_undefined.js
```

## Variable Declaration Quick Reference

```javascript
var city = "Pune";      // old style, function-scoped
let age = 25;           // modern style, block-scoped, value can change
const country = "India"; // modern style, block-scoped, value should not change
```

Prefer `let` when a value can change and `const` when it should stay the same.

## Scope Of `var`, `let`, And `const`

| Keyword | Scope | Can be re-declared? | Can be updated? | Hoisting behavior | Best use |
| --- | --- | --- | --- | --- | --- |
| `var` | Function scope | Yes | Yes | Hoisted and initialized with `undefined` | Older JavaScript code |
| `let` | Block scope | No, not in the same scope | Yes | Hoisted but not initialized, so accessing before declaration gives `ReferenceError` | Values that need to change |
| `const` | Block scope | No, not in the same scope | No | Hoisted but not initialized, so accessing before declaration gives `ReferenceError` | Values that should not be reassigned |

### Function Scope Example With `var`

```javascript
function testVarScope() {
    if (true) {
        var message = "Hello";
    }

    console.log(message); // Accessible because var has function scope
}
```

### Block Scope Example With `let` And `const`

```javascript
if (true) {
    let userName = "Rahul";
    const country = "India";

    console.log(userName);
    console.log(country);
}

// console.log(userName); // Error because let has block scope
// console.log(country);  // Error because const has block scope
```

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
