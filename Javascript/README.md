# JavaScript Learning Notes

This folder contains small JavaScript practice files used while learning JavaScript basics for automation and Playwright preparation.

## Prerequisites

- Install Node.js.
- Open this project in VS Code.
- Run commands from the `Javascript` folder.

Check Node.js setup:

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
|   +-- Declaration.js
|   +-- hoisting.js
|   +-- let_hoisting.js
|   +-- var_scope.js
+-- Chapter_03_Literal/
|   +-- literal.js
|   +-- number_literal.js
|   +-- null_vs_undefined.js
|   +-- string_literal.js
+-- Chapter_04_Operator/
|   +-- increment_operator.js
|   +-- ternary_operator.js
+-- Chapter_05_Statements/
|   +-- if_else_statement.js
+-- Chapter_6_Loops/
|   +-- Forloop_example.js
|   +-- While_DoWhile_example.js
+-- Chapter_7_Arrays/
|   +-- Access_array
|   +-- Array_manipulation.js
|   +-- Arrays_1.js
|   +-- BrowserEx.js
|   +-- Iteratearray.js
|   +-- Sorting.js
+-- Chapter_8_Functions/
|   +-- ArrowFunction.js
|   +-- Closure.js
|   +-- DefaultAndRestParams.js
|   +-- FunctionInterviewQuestions.js
|   +-- HigherOrderFunction.js
|   +-- IIFE.js
|   +-- Introduction.js
|   +-- PureAndImpureFunction.js
|   +-- Type2Function.js
+-- Interview_Quesions/
|   +-- Chapter_01_Basics_Interview.js
|   +-- Chapter_02_Declarations_Interview.js
|   +-- Chapter_03_Literals_Interview.js
|   +-- Chapter_04_Operators_Interview.js
|   +-- Chapter_05_Statements_Interview.js
|   +-- Chapter_06_Loops_Interview.js
|   +-- Chapter_07_Arrays_Interview.js
|   +-- Chapter_08_Functions_Interview.js
+-- README.md
```

## Chapter Overview

| Chapter | Folder | Main Topics |
| --- | --- | --- |
| 01 | `Chapter_01_Basics` | Node.js setup, basic output, variables, naming rules, VS Code shortcuts |
| 02 | `Chapter_02_Declaration` | Declarations, `var`, `let`, hoisting, temporal dead zone, scope |
| 03 | `Chapter_03_Literal` | String, number, boolean, null, undefined, binary, octal, hexadecimal literals |
| 04 | `Chapter_04_Operator` | Increment, decrement, ternary operator, nullish coalescing operator |
| 05 | `Chapter_05_Statements` | `if`, `else if`, `else`, complex conditions, switch case |
| 06 | `Chapter_6_Loops` | `for`, `while`, `do while`, loop examples, retry examples |
| 07 | `Chapter_7_Arrays` | Array creation, access, manipulation, iteration, sorting, slicing, combining |
| 08 | `Chapter_8_Functions` | Function basics, function types, closures, default parameters, rest parameters, higher-order functions, pure and impure functions, arrow functions, IIFE, interview questions |

## Interview Questions

The `Interview_Quesions` folder contains chapter-wise JavaScript interview practice files. Each file includes both theoretical questions and practical runnable examples.

| File | Covers |
| --- | --- |
| `Chapter_01_Basics_Interview.js` | JavaScript basics, Node.js, variables, naming rules |
| `Chapter_02_Declarations_Interview.js` | Declarations, hoisting, temporal dead zone, block scope |
| `Chapter_03_Literals_Interview.js` | Literals, strings, numbers, `null`, `undefined`, `NaN` |
| `Chapter_04_Operators_Interview.js` | Increment, decrement, ternary, nullish coalescing |
| `Chapter_05_Statements_Interview.js` | `if`, `else if`, `switch`, conditions |
| `Chapter_06_Loops_Interview.js` | `for`, `while`, `do while`, `break`, loop practice |
| `Chapter_07_Arrays_Interview.js` | Array access, manipulation, sorting, filtering, mapping |
| `Chapter_08_Functions_Interview.js` | Functions, callbacks, higher-order functions, closures, pure and impure functions, IIFE, recursion |

Run examples:

```powershell
node Interview_Quesions/Chapter_01_Basics_Interview.js
node Interview_Quesions/Chapter_08_Functions_Interview.js
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

Covers the basics of JavaScript variables.

Topics:

- What a variable is
- Declaring variables with `var`, `let`, and `const`
- Variable naming rules
- Valid and invalid variable names
- Case-sensitive variable names
- Naming styles: `camelCase`, `PascalCase`, `snake_case`, and `UPPER_SNAKE_CASE`
- Why JavaScript variables cannot use `kebab-case`
- Basic VS Code shortcuts for Windows

Run:

```powershell
node Chapter_01_Basics/Js_Variables.js
```

## Chapter 02: Declarations

### `Declaration.js`

Practice file for declaration examples.

### `hoisting.js`

Shows hoisting behavior with `var`, `let`, and the temporal dead zone.

Topics:

- `var` declarations are hoisted and initialized with `undefined`
- Accessing `var` before assignment
- `let` and `const` are hoisted but not initialized
- Accessing `let` before declaration causes `ReferenceError`

Run:

```powershell
node Chapter_02_Declaration/hoisting.js
```

Note: this file intentionally includes a `ReferenceError` example.

### `let_hoisting.js`

Shows block scope and temporal dead zone behavior with `let`.

Topics:

- Block-scoped `let`
- Variable shadowing inside a block
- Why accessing a block variable before declaration causes `ReferenceError`

Run:

```powershell
node Chapter_02_Declaration/let_hoisting.js
```

Note: this file intentionally includes a `ReferenceError` example.

### `var_scope.js`

Practice file for `var` scope examples.

## Chapter 03: Literals

### `literal.js`

Shows common JavaScript literal examples.

Topics:

- Number literal
- String literal
- Boolean literal
- `null`
- `undefined`
- Binary, octal, and hexadecimal literals
- Floating-point number

Run:

```powershell
node Chapter_03_Literal/literal.js
```

### `number_literal.js`

Shows number literal examples in JavaScript.

Topics:

- Integer numbers
- Decimal numbers
- Negative numbers
- Zero
- Binary numbers with `0b`
- Octal numbers with `0o`
- Hexadecimal numbers with `0x`
- Exponential notation
- Numeric separators
- `Infinity` and `NaN`
- `typeof` with numbers

Run:

```powershell
node Chapter_03_Literal/number_literal.js
```

### `string_literal.js`

Shows string literal examples in JavaScript.

Topics:

- Single quotes
- Double quotes
- Backticks
- Escape characters
- New lines with `\n`
- Template literals with variables
- Template literals with expressions
- Multi-line template literals
- Empty strings
- String length
- `typeof` with strings

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

Shows increment and decrement operators.

Topics:

- Post-increment with `number++`
- Pre-increment with `++number`
- Increment inside a loop
- Post-decrement with `number--`
- Pre-decrement with `--number`
- Decrement inside a loop

Run:

```powershell
node Chapter_04_Operator/increment_operator.js
```

### `ternary_operator.js`

Shows the ternary operator and nullish coalescing operator.

Topics:

- Ternary syntax: `condition ? trueValue : falseValue`
- Checking voting eligibility
- Checking even and odd numbers
- Nested ternary for grades
- Nested ternary for temperature messages
- Nullish coalescing with `??`
- Difference between `||` and `??`

Run:

```powershell
node Chapter_04_Operator/ternary_operator.js
```

## Chapter 05: Statements

### `if_else_statement.js`

Shows decision making with conditional statements.

Topics:

- Basic `if` condition
- `if else`
- `else if`
- Checking weather
- Checking login status
- Complex conditions with `&&`
- Even and odd number check
- Grade calculation
- Leap year check
- `switch` case statement
- `break` and `default` in switch

Run:

```powershell
node Chapter_05_Statements/if_else_statement.js
```

## Chapter 06: Loops

### `Forloop_example.js`

Shows basic `for` loop examples.

Topics:

- Printing numbers from 1 to 5
- Looping through an array by index
- Reading values using `fruits[index]`

Run:

```powershell
node Chapter_6_Loops/Forloop_example.js
```

### `While_DoWhile_example.js`

Shows `while` and `do while` loops using QA-style examples.

Topics:

- Checking order status until it becomes `Completed`
- Retry limit with a `while` loop
- Stopping a loop with `break`
- Running a payment retry test at least once with `do while`
- Handling failed retry conditions

Run:

```powershell
node Chapter_6_Loops/While_DoWhile_example.js
```

## Chapter 07: Arrays

### `Arrays_1.js`

Shows different ways to create arrays.

Topics:

- Empty arrays
- String arrays
- Number arrays
- Mixed arrays
- Browser list arrays
- `new Array()`
- `Array.of()`
- `Array.from()`

Run:

```powershell
node Chapter_7_Arrays/Arrays_1.js
```

### `Access_array`

Shows how to access array values.

Topics:

- Accessing array values by index
- Using `.at()`
- Negative indexes with `.at()`
- Out-of-range array access

Run:

```powershell
node Chapter_7_Arrays/Access_array
```

### `Array_manipulation.js`

Shows common array manipulation methods.

Topics:

- Adding items with `push()`
- Removing the last item with `pop()`
- Adding items at the start with `unshift()`
- Removing the first item with `shift()`
- Inserting items with `splice()`
- Removing items with `splice()`
- Checking array length

Run:

```powershell
node Chapter_7_Arrays/Array_manipulation.js
```

### `BrowserEx.js`

Shows a browser array practice example.

Topics:

- Adding a browser with `push()`
- Looping through browser names
- Finding a browser using `if`
- Replacing an item with `splice()`
- Stopping a loop with `break`

Run:

```powershell
node Chapter_7_Arrays/BrowserEx.js
```

### `Iteratearray.js`

Shows different ways to iterate through arrays.

Topics:

- Traditional `for` loop
- `for...of`
- `forEach()`
- `for...in`

Run:

```powershell
node Chapter_7_Arrays/Iteratearray.js
```

### `Sorting.js`

Shows sorting, slicing, and combining arrays.

Topics:

- Sorting strings in ascending order
- Sorting strings in descending order
- Sorting numbers with compare functions
- Understanding default number sort behavior
- Copying selected values with `slice()`
- Using negative indexes with `slice()`
- Combining arrays with `concat()`
- Combining arrays with the spread operator

Run:

```powershell
node Chapter_7_Arrays/Sorting.js
```

## Chapter 08: Functions

### `Introduction.js`

Introduces JavaScript functions and methods.

Topics:

- Function as a reusable block of code
- Calling or invoking a function
- Defining a function with the `function` keyword
- Difference between a function and a method
- Function with no argument and no return value
- `undefined` return value when a function does not return anything

Run:

```powershell
node Chapter_8_Functions/Introduction.js
```

### `Type2Function.js`

Shows function examples based on arguments and return values.

Topics:

- Function with argument and no return value
- Function with no argument and return value
- Function with argument and return value
- Template literal return value
- Function expression
- Understanding `undefined` when there is no `return`

Run:

```powershell
node Chapter_8_Functions/Type2Function.js
```

### `DefaultAndRestParams.js`

Shows default parameters and rest parameters in JavaScript functions.

Topics:

- Default parameter values
- Multiple default parameters
- Rest parameter with `...`
- Collecting many arguments into an array
- Using normal parameters with rest parameters
- Using default parameters and rest parameters together

Run:

```powershell
node Chapter_8_Functions/DefaultAndRestParams.js
```

### `Closure.js`

Shows closure examples in JavaScript.

Topics:

- What a closure is
- Inner function remembering outer function variables
- Counter using closure
- Private variable using closure
- Closure interview explanation

Run:

```powershell
node Chapter_8_Functions/Closure.js
```

### `FunctionInterviewQuestions.js`

Contains JavaScript function interview questions with answers, explanations, practical coding tasks, and runnable examples.

Topics:

- Function declaration vs function expression
- Hoisting behavior
- Arrow functions
- `this` in normal functions and arrow functions
- `arguments` object
- Default parameters
- Rest parameters
- Callback functions
- Higher-order functions
- Closures
- IIFE
- Pure functions
- Recursion
- Practical coding questions with functions

Run:

```powershell
node Chapter_8_Functions/FunctionInterviewQuestions.js
```

### `HigherOrderFunction.js`

Shows higher-order function examples in JavaScript.

Topics:

- Function accepting another function as an argument
- Callback functions
- Anonymous function callbacks
- Arrow function callbacks
- Higher-order array methods like `filter()` and `map()`
- Function returning another function
- Practical retry function using callback

Run:

```powershell
node Chapter_8_Functions/HigherOrderFunction.js
```

### `PureAndImpureFunction.js`

Shows pure and impure function examples in JavaScript.

Topics:

- What a pure function is
- Same input gives same output
- Avoiding side effects
- Returning a new array without changing the original array
- What an impure function is
- Changing outside variables
- Mutating original arrays
- Depending on random values

Run:

```powershell
node Chapter_8_Functions/PureAndImpureFunction.js
```

### `ArrowFunction.js`

Shows arrow functions introduced in ES6.

Topics:

- Regular function expression
- Arrow function expression
- Short arrow function syntax
- Returning values from arrow functions
- Using template literals inside arrow functions
- `console.table()` comparison of normal functions and arrow functions
- Basic differences between regular functions and arrow functions

Run:

```powershell
node Chapter_8_Functions/ArrowFunction.js
```

### `IIFE.js`

Shows Immediately Invoked Function Expression examples.

Topics:

- What an IIFE is
- Normal function IIFE
- Arrow function IIFE
- IIFE with parameters
- Returning values from an IIFE
- Creating private scope with an IIFE
- Using an IIFE for setup/config code

Run:

```powershell
node Chapter_8_Functions/IIFE.js
```

## Quick References

### Variable Declaration

```javascript
var city = "Pune";       // old style, function-scoped
let age = 25;            // modern style, block-scoped, value can change
const country = "India"; // modern style, block-scoped, value should not change
```

Prefer `const` by default. Use `let` when a value must change. Avoid `var` in modern JavaScript unless you are learning older behavior.

### Scope Of `var`, `let`, And `const`

| Keyword | Scope | Can be re-declared? | Can be updated? | Hoisting behavior | Best use |
| --- | --- | --- | --- | --- | --- |
| `var` | Function scope | Yes | Yes | Hoisted and initialized with `undefined` | Older JavaScript code |
| `let` | Block scope | No, not in the same scope | Yes | Hoisted but not initialized | Values that need to change |
| `const` | Block scope | No, not in the same scope | No | Hoisted but not initialized | Values that should not be reassigned |

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

### Variable Naming Rules

- Variable names can contain letters, numbers, `_`, and `$`.
- Variable names cannot start with a number.
- Variable names cannot contain spaces.
- Variable names are case-sensitive.
- JavaScript reserved keywords cannot be used as variable names.
- Prefer `camelCase` for normal JavaScript variables.

Examples:

```javascript
let studentName = "Rahul";
let student_age = 20;
let $salary = 50000;
let totalMarks1 = 95;
```

### Useful VS Code Shortcuts For Windows

| Shortcut | Use |
| --- | --- |
| `Ctrl + /` | Add or remove line comment |
| `Shift + Alt + A` | Add or remove block comment |
| `Shift + Alt + F` | Format document |
| `Ctrl + S` | Save file |
| `Ctrl + F` | Find text |
| `Ctrl + H` | Replace text |
| ``Ctrl + ` `` | Open or close terminal |
| `Ctrl + P` | Quickly open a file |
| `Ctrl + Shift + P` | Open command palette |

## Best Practices

- Use meaningful variable names.
- Prefer `camelCase` for normal JavaScript variables.
- Prefer `const` by default, and use `let` only when the value must change.
- Avoid `var` in modern JavaScript unless you are learning how older code behaves.
- Keep each practice file focused on one concept.
