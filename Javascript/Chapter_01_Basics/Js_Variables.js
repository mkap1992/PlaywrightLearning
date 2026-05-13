// JavaScript Variables
// A variable is a named container used to store data.

// Ways to declare variables:
// 1. var   - old way, can be re-declared and updated
// 2. let   - modern way, can be updated but not re-declared in the same scope
// 3. const - modern way, cannot be updated or re-declared

var city = "Pune";
let age = 25;
const country = "India";

console.log(city);
console.log(age);
console.log(country);

// Rules for declaring variables:

// 1. Variable names can contain letters, numbers, underscore (_), and dollar sign ($).
let studentName = "Rahul";
let student_age = 20;
let $salary = 50000;
let totalMarks1 = 95;

console.log(studentName);
console.log(student_age);
console.log($salary);
console.log(totalMarks1);

// 2. Variable names cannot start with a number.
// let 1student = "Invalid"; // This will give an error
let student1 = "Valid";

console.log(student1);

// 3. Variable names cannot contain spaces.
// let first name = "Invalid"; // This will give an error
let firstName = "Nikhil";

console.log(firstName);

// 4. Variable names are case-sensitive.
let name = "Amit";
let Name = "Sumit";

console.log(name);
console.log(Name);

// 5. Reserved JavaScript keywords cannot be used as variable names.
// let let = "Invalid"; // This will give an error
// let const = "Invalid"; // This will give an error

// Variable naming case types:

// 1. camelCase
// First word starts with a small letter.
// Every next word starts with a capital letter.
let employeeName = "Priya";
let totalOrderAmount = 1500;

console.log(employeeName);
console.log(totalOrderAmount);

// 2. PascalCase
// Every word starts with a capital letter.
// This is commonly used for class names.
let EmployeeName = "Ravi";

console.log(EmployeeName);

// 3. snake_case
// Words are separated by underscore (_).
let employee_name = "Sneha";
let total_order_amount = 2500;

console.log(employee_name);
console.log(total_order_amount);

// 4. UPPER_SNAKE_CASE
// Words are written in capital letters and separated by underscore (_).
// This is commonly used for constant values.
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = "https://example.com";

console.log(MAX_LOGIN_ATTEMPTS);
console.log(API_BASE_URL);

// 5. kebab-case
// Words are separated by hyphen (-).
// JavaScript variable names cannot use kebab-case because hyphen means minus.
// let employee-name = "Invalid"; // This will give an error

// Best practice:
// Use meaningful names and prefer camelCase for normal JavaScript variables.
let productPrice = 999;
let discountAmount = 100;
let finalPrice = productPrice - discountAmount;

console.log(finalPrice);

// Useful VS Code shortcuts for Windows:

// Commenting shortcuts:
// Ctrl + /          - Add or remove single line comment
// Shift + Alt + A   - Add or remove block comment

// File shortcuts:
// Ctrl + S          - Save file
// Ctrl + N          - New file
// Ctrl + O          - Open file
// Ctrl + W          - Close current file

// Editing shortcuts:
// Ctrl + C          - Copy selected text
// Ctrl + X          - Cut selected text
// Ctrl + V          - Paste copied text
// Ctrl + Z          - Undo
// Ctrl + Y          - Redo
// Ctrl + A          - Select all
// Ctrl + F          - Find text in current file
// Ctrl + H          - Replace text in current file
// Shift + Alt + F   - Format document

// Line shortcuts:
// Alt + Up          - Move current line up
// Alt + Down        - Move current line down
// Shift + Alt + Up  - Copy current line up
// Shift + Alt + Down - Copy current line down
// Ctrl + Shift + K  - Delete current line

// Terminal and navigation shortcuts:
// Ctrl + `          - Open or close terminal
// Ctrl + P          - Quickly open a file
// Ctrl + Shift + P  - Open command palette
// Ctrl + G          - Go to line number

// Multi-cursor shortcuts:
// Alt + Click       - Add cursor at clicked position
// Ctrl + D          - Select next same word
// Ctrl + Shift + L  - Select all matching words
