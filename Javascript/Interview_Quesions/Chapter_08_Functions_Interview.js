// Chapter 08 Interview Questions: Functions
// Theory questions plus practical examples.

console.log("Chapter 08: Functions Interview Questions\n");

console.log("Q1. What is a function?");
console.log("Answer: A function is a reusable block of code designed to perform a task.");

function greetUser(name) {
    return `Hello, ${name}`;
}

console.log(greetUser("Rahul"));

console.log("\nQ2. Function declaration vs function expression?");
console.log("Answer: Function declarations are hoisted. Function expressions stored in const/let are not usable before declaration.");

console.log("Declaration before line:", add(5, 3));

function add(num1, num2) {
    return num1 + num2;
}

try {
    console.log(subtract(10, 5));
} catch (error) {
    console.log("Expression before declaration error:", error.name);
}

const subtract = function(num1, num2) {
    return num1 - num2;
};

console.log("Expression after declaration:", subtract(10, 5));

console.log("\nQ3. What is an arrow function?");
console.log("Answer: Arrow function is a shorter syntax for writing function expressions.");

const square = number => number * number;
console.log("Square:", square(6));

console.log("\nQ4. What are default parameters?");
console.log("Answer: Default parameters are fallback values for missing or undefined arguments.");

function createUser(name = "Guest", role = "Student") {
    return `${name} is a ${role}`;
}

console.log(createUser("Sneha", "Tester"));
console.log(createUser());

console.log("\nQ5. What is a rest parameter?");
console.log("Answer: Rest parameter collects many arguments into one array.");

function addMarks(...marks) {
    let total = 0;

    for (let mark of marks) {
        total = total + mark;
    }

    return total;
}

console.log("Total marks:", addMarks(80, 75, 90));

console.log("\nQ6. What is a callback function?");
console.log("Answer: A callback is a function passed as an argument to another function.");

function processResult(testName, callback) {
    callback(`${testName} completed`);
}

processResult("Login test", function(message) {
    console.log(message);
});

console.log("\nQ7. What is closure?");
console.log("Answer: A closure is when an inner function remembers variables from its outer function.");

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log("Counter:", counter());
console.log("Counter:", counter());

console.log("\nQ8. What is an IIFE?");
console.log("Answer: IIFE runs immediately after it is created.");

(function() {
    console.log("IIFE executed");
})();

console.log("\nQ9. Practical: Write a function to find largest number.");

function findLargest(...numbers) {
    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log("Largest:", findLargest(10, 55, 23, 90, 4));

console.log("\nQ10. Practical: Write a function factory for discount.");

function createDiscount(discountPercentage) {
    return function(price) {
        return price - price * discountPercentage / 100;
    };
}

const tenPercentDiscount = createDiscount(10);
console.log("Discounted price:", tenPercentDiscount(1000));

console.log("\nQ11. Practical: Write recursive factorial.");

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log("Factorial:", factorial(5));
