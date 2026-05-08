# JavaScript Variables

This file explains the basics of variables in JavaScript.

File name:

```text
Js_Variables.js
```

## Topics Covered

- What is a variable
- How to declare variables using `var`, `let`, and `const`
- Rules for declaring variable names
- Valid and invalid variable name examples
- Case-sensitive variable names
- Naming case styles
- Useful VS Code shortcuts for Windows

## Variable Declaration Types

JavaScript variables can be declared using:

```javascript
var city = "Pune";
let age = 25;
const country = "India";
```

### `var`

`var` is the old way of declaring variables.

### `let`

`let` is the modern way of declaring variables when the value can change.

### `const`

`const` is used when the value should not change.

## Variable Naming Rules

- Variable names can contain letters, numbers, `_`, and `$`.
- Variable names cannot start with a number.
- Variable names cannot contain spaces.
- Variable names are case-sensitive.
- JavaScript reserved keywords cannot be used as variable names.

Example:

```javascript
let studentName = "Rahul";
let student_age = 20;
let $salary = 50000;
let totalMarks1 = 95;
```

## Naming Case Types

### camelCase

Commonly used for normal JavaScript variables.

```javascript
let employeeName = "Priya";
let totalOrderAmount = 1500;
```

### PascalCase

Commonly used for class names.

```javascript
let EmployeeName = "Ravi";
```

### snake_case

Words are separated by underscores.

```javascript
let employee_name = "Sneha";
```

### UPPER_SNAKE_CASE

Commonly used for constant values.

```javascript
const MAX_LOGIN_ATTEMPTS = 3;
```

### kebab-case

JavaScript variables cannot use kebab-case because `-` is treated as a minus operator.

```javascript
// let employee-name = "Invalid";
```

## How To Run The File

Open the terminal in VS Code and run:

```powershell
node Chapter_01_Basics/Js_Variables.js
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

## Best Practice

Use meaningful variable names and prefer `camelCase` for normal JavaScript variables.
