// Chapter 05 Interview Questions: Statements
// Theory questions plus practical examples.

console.log("Chapter 05: Statements Interview Questions\n");

console.log("Q1. What is an if statement?");
console.log("Answer: An if statement runs a block of code when a condition is true.");

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome user");
}

console.log("\nQ2. When do we use else if?");
console.log("Answer: Use else if when you need to check multiple conditions.");

let score = 78;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

console.log("\nQ3. What is a switch statement?");
console.log("Answer: switch compares one value with multiple possible cases.");

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

console.log("\nQ4. Why is break important in switch?");
console.log("Answer: break stops execution after a matching case.");

console.log("\nQ5. Practical: Check if a number is positive, negative, or zero.");

let number = -5;

if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

console.log("\nQ6. Practical: Check leap year.");

let year = 2024;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

console.log("\nQ7. Practical: Validate login using multiple conditions.");

let enteredUserName = "admin";
let enteredPassword = "admin123";

if (enteredUserName === "admin" && enteredPassword === "admin123") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

console.log("\nQ8. Practical: Check browser support using switch.");

let browserName = "Chrome";

switch (browserName) {
    case "Chrome":
    case "Firefox":
    case "Edge":
        console.log("Supported browser");
        break;
    default:
        console.log("Unsupported browser");
}
