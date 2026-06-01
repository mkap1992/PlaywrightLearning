// Chapter 01 Interview Questions: JavaScript Basics
// Theory questions plus practical examples.

console.log("Chapter 01: JavaScript Basics Interview Questions\n");

console.log("Q1. What is JavaScript?");
console.log("Answer: JavaScript is a programming language used to add logic, behavior, and automation to applications.");
console.log("Practical: Print a message using console.log().");
console.log("Hello from JavaScript");

console.log("\nQ2. What is Node.js?");
console.log("Answer: Node.js lets us run JavaScript outside the browser.");
console.log("Practical: Check the current system architecture.");
console.log("System architecture:", process.arch);

console.log("\nQ3. What is a variable?");
console.log("Answer: A variable is a named container used to store data.");

let studentName = "Rahul";
let studentAge = 25;
console.log("Student:", studentName, studentAge);

console.log("\nQ4. What is the difference between var, let, and const?");
console.log("Answer: var is function-scoped, let is block-scoped and can change, const is block-scoped and cannot be reassigned.");

var city = "Pune";
let course = "JavaScript";
const country = "India";

console.log("var:", city);
console.log("let:", course);
console.log("const:", country);

console.log("\nQ5. Can a const object be changed?");
console.log("Answer: The const variable cannot be reassigned, but object properties can be updated.");

const user = {
    name: "Amit",
    role: "Tester"
};

user.role = "Automation Tester";
console.log("Updated user:", user);

console.log("\nQ6. What are valid variable names?");
console.log("Answer: Variable names can contain letters, numbers, _, and $, but cannot start with a number.");

let firstName = "Sneha";
let student_1 = "Priya";
let $salary = 50000;

console.log(firstName, student_1, $salary);

console.log("\nQ7. Practical: Calculate final price after discount.");

let productPrice = 1000;
let discount = 150;
let finalPrice = productPrice - discount;

console.log("Final price:", finalPrice);

console.log("\nQ8. Practical: Swap two values using a temporary variable.");

let firstValue = "Chrome";
let secondValue = "Firefox";
let temp = firstValue;

firstValue = secondValue;
secondValue = temp;

console.log("First value:", firstValue);
console.log("Second value:", secondValue);
