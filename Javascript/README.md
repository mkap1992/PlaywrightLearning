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
+-- Chapter_04_Operator/
    +-- increment_operator.js
    +-- ternary_operator.js
+-- Chapter_05_Statements/
|   +-- if_else_statement.js
+-- Chapter_6_Loops/
|   +-- Forloop_example.js
|   +-- While_DoWhile_example.js
+-- Chapter_7_Arrays/
    +-- Access_array
    +-- Array_manipulation.js
    +-- Arrays_1.js
    +-- BrowserEx.js
    +-- Iteratearray.js
    +-- Sorting.js
+-- Chapter_8_Functions/
    +-- ArrowFunction.js
    +-- Introduction.js
    +-- Type2Function.js
```

## Chapter Overview

| Chapter | Folder | Topics |
| --- | --- | --- |
| 01 | `Chapter_01_Basics` | Node.js setup, basics, and variables |
| 02 | `Chapter_02_Declaration` | Declarations, hoisting, and scope |
| 03 | `Chapter_03_Literal` | String, number, null, undefined, and other literals |
| 04 | `Chapter_04_Operator` | Increment, decrement, and ternary operators |
| 05 | `Chapter_05_Statements` | Conditional statements and switch case |
| 06 | `Chapter_6_Loops` | `for`, `while`, and `do while` loops |
| 07 | `Chapter_7_Arrays` | Array creation, access, iteration, sorting, slicing, and combining |
| 08 | `Chapter_8_Functions` | Function basics, methods, arguments, return values, and arrow functions |

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

## Chapter 04: Operators

### `increment_operator.js`

Shows increment and decrement operator examples.

Topics:

- Post-increment with `number++`
- Pre-increment with `++number`
- Post-decrement with `number--`
- Pre-decrement with `--number`
- Increment and decrement inside loops

Run:

```powershell
node Chapter_04_Operator/increment_operator.js
```

### `ternary_operator.js`

Shows how to use the ternary operator for simple conditional expressions.

Run:

```powershell
node Chapter_04_Operator/ternary_operator.js
```

## Chapter 05: Statements

### `if_else_statement.js`

Shows how to use `if`, `else if`, and `else` statements for decision making.

Topics:

- Basic `if` condition
- `if else` condition
- Multiple `else if` conditions
- Complex conditions with `&&` and `||`
- Checking even and odd numbers
- Checking grades based on marks
- Checking leap years
- Switch case statement

Run:

```powershell
node Chapter_05_Statements/if_else_statement.js
```

## Chapter 06: Loops

### `Forloop_example.js`

Shows how to use a `for` loop for repeated actions.

Topics:

- Printing numbers from 1 to 5
- Looping through an array with an index
- Reading array values using `fruits[index]`

Run:

```powershell
node Chapter_6_Loops/Forloop_example.js
```

### `While_DoWhile_example.js`

Shows `while` and `do while` loops using QA-style examples.

Topics:

- Checking order status until it becomes `Completed`
- Using retry limits with a `while` loop
- Stopping a loop with `break`
- Running a payment retry test at least once with `do while`

Run:

```powershell
node Chapter_6_Loops/While_DoWhile_example.js
```

## Chapter 07: Arrays

### `Arrays_1.js`

Shows different ways to create arrays in JavaScript.

Topics:

- Empty arrays
- Arrays with strings, numbers, booleans, and mixed values
- Creating arrays with `new Array()`
- Creating arrays with `Array.of()`
- Creating arrays with `Array.from()`

Run:

```powershell
node Chapter_7_Arrays/Arrays_1.js
```

### `Access_array`

Shows how to access array values by index and with the `at()` method.

Run:

```powershell
node Chapter_7_Arrays/Access_array
```

### `Array_manipulation.js`

Shows common array manipulation methods.

Topics:

- Adding items with `push()` and `unshift()`
- Removing items with `pop()` and `shift()`
- Inserting and removing items with `splice()`
- Checking array length

Run:

```powershell
node Chapter_7_Arrays/Array_manipulation.js
```

### `BrowserEx.js`

Shows a browser list example using arrays, loops, condition checks, and `splice()`.

Run:

```powershell
node Chapter_7_Arrays/BrowserEx.js
```

### `Iteratearray.js`

Shows different ways to iterate through arrays.

Topics:

- Traditional `for` loop
- `for...of` loop
- `forEach()` method
- `for...in` loop

Run:

```powershell
node Chapter_7_Arrays/Iteratearray.js
```

### `Sorting.js`

Shows how to sort arrays and combine arrays.

Topics:

- Sorting strings in ascending and descending order
- Sorting numbers with compare functions
- Understanding default sort behavior with numbers
- Using `slice()` to copy selected array values
- Combining arrays with `concat()` and the spread operator

Run:

```powershell
node Chapter_7_Arrays/Sorting.js
```

## Chapter 08: Functions

### `ArrowFunction.js`

Shows arrow functions introduced in ES6.

Topics:

- Regular function expression
- Arrow function expression
- Short arrow function syntax
- Returning values from arrow functions
- Using template literals inside arrow functions
- Basic difference between regular functions and arrow functions

Run:

```powershell
node Chapter_8_Functions/ArrowFunction.js
```

### `Introduction.js`

Introduces JavaScript functions and methods.

Topics:

- Function as a reusable block of code
- Calling or invoking a function
- Defining a function with the `function` keyword
- Difference between a function and a method

Run:

```powershell
node Chapter_8_Functions/Introduction.js
```

### `Type2Function.js`

Shows different function examples based on arguments and return values.

Topics:

- Function with argument and no return value
- Function with no argument and return value
- Function with argument and return value
- Understanding `undefined` when a function does not return anything

Run:

```powershell
node Chapter_8_Functions/Type2Function.js
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
