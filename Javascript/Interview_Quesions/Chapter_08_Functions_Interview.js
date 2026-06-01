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

console.log("\nQ7. What is a higher-order function?");
console.log("Answer: A higher-order function accepts another function as an argument or returns another function.");

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

const additionResult = calculate(10, 20, function(a, b) {
    return a + b;
});

const multiplicationResult = calculate(10, 20, function(a, b) {
    return a * b;
});

console.log("Higher-order addition:", additionResult);
console.log("Higher-order multiplication:", multiplicationResult);

console.log("\nQ8. Practical: Use higher-order array functions map and filter.");
console.log("Answer: map transforms array values. filter returns values that match a condition.");

const testCases = [
    { name: "Login test", status: "Passed" },
    { name: "Payment test", status: "Failed" },
    { name: "Search test", status: "Passed" }
];

const testNames = testCases.map(function(testCase) {
    return testCase.name;
});

const passedTests = testCases.filter(function(testCase) {
    return testCase.status === "Passed";
});

console.log("Test names:", testNames);
console.log("Passed tests:", passedTests);

console.log("\nQ9. Practical: Write a higher-order retry function.");
console.log("Answer: Pass the action as a callback and call it until it passes or reaches max attempts.");

function retryAction(action, maxAttempts) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        const result = action(attempt);

        console.log(`Attempt ${attempt}:`, result);

        if (result === "Passed") {
            return "Final result: Passed";
        }
    }

    return "Final result: Failed";
}

const retryResult = retryAction(function(attempt) {
    if (attempt === 3) {
        return "Passed";
    }

    return "Failed";
}, 5);

console.log(retryResult);

console.log("\nQ10. What is closure?");
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

console.log("\nQ11. What is a pure function?");
console.log("Answer: A pure function gives the same output for the same input and does not change outside data.");

function pureAdd(num1, num2) {
    return num1 + num2;
}

console.log("Pure function result:", pureAdd(10, 20));
console.log("Pure function same result:", pureAdd(10, 20));

console.log("\nQ12. What is an impure function?");
console.log("Answer: An impure function can change outside data or depend on outside state.");

let interviewCounter = 0;

function impureIncrement() {
    interviewCounter++;
    return interviewCounter;
}

console.log("Impure function result:", impureIncrement());
console.log("Impure function result:", impureIncrement());
console.log("Outside variable changed:", interviewCounter);

console.log("\nQ13. Practical: Convert an impure array function into a pure function.");
console.log("Answer: Do not mutate the original array. Return a new array instead.");

function addTestImpure(tests, testName) {
    tests.push(testName);
    return tests;
}

function addTestPure(tests, testName) {
    return [...tests, testName];
}

const originalTests = ["Login", "Search"];

console.log("Impure add result:", addTestImpure(originalTests, "Payment"));
console.log("Original tests after impure add:", originalTests);

const cleanTests = ["Login", "Search"];

console.log("Pure add result:", addTestPure(cleanTests, "Payment"));
console.log("Original tests after pure add:", cleanTests);

console.log("\nQ14. What is an IIFE?");
console.log("Answer: IIFE runs immediately after it is created.");

(function() {
    console.log("IIFE executed");
})();

console.log("\nQ15. Practical: Write a function to find largest number.");

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

console.log("\nQ16. Practical: Write a function factory for discount.");

function createDiscount(discountPercentage) {
    return function(price) {
        return price - price * discountPercentage / 100;
    };
}

const tenPercentDiscount = createDiscount(10);
console.log("Discounted price:", tenPercentDiscount(1000));

console.log("\nQ17. Practical: Write recursive factorial.");

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log("Factorial:", factorial(5));
