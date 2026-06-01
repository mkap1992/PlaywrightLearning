// Higher-order functions in JavaScript
// A higher-order function is a function that:
// 1. Accepts another function as an argument, or
// 2. Returns another function.

console.log("Example 1: Function accepting another function");

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

console.log("Addition:", calculate(10, 5, add));
console.log("Multiplication:", calculate(10, 5, multiply));

console.log("\nExample 2: Passing anonymous function as callback");

const subtractionResult = calculate(20, 8, function(num1, num2) {
    return num1 - num2;
});

console.log("Subtraction:", subtractionResult);

console.log("\nExample 3: Passing arrow function as callback");

const divisionResult = calculate(40, 4, (num1, num2) => num1 / num2);

console.log("Division:", divisionResult);

console.log("\nExample 4: Higher-order function with array filter");

const testCases = [
    { name: "Login test", status: "Passed" },
    { name: "Payment test", status: "Failed" },
    { name: "Search test", status: "Passed" },
    { name: "Logout test", status: "Skipped" }
];

const passedTests = testCases.filter(function(testCase) {
    return testCase.status === "Passed";
});

console.log("Passed tests:", passedTests);

console.log("\nExample 5: Higher-order function with array map");

const browserNames = ["chrome", "firefox", "edge"];

const upperCaseBrowsers = browserNames.map(function(browser) {
    return browser.toUpperCase();
});

console.log("Uppercase browsers:", upperCaseBrowsers);

console.log("\nExample 6: Function returning another function");

function createGreeting(greetingMessage) {
    return function(userName) {
        return `${greetingMessage}, ${userName}!`;
    };
}

const sayHello = createGreeting("Hello");
const sayWelcome = createGreeting("Welcome");

console.log(sayHello("Rahul"));
console.log(sayWelcome("Priya"));

console.log("\nExample 7: Practical retry higher-order function");

function retryAction(action, maxAttempts) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        const result = action(attempt);

        console.log(`Attempt ${attempt}:`, result);

        if (result === "Passed") {
            return "Final Result: Passed";
        }
    }

    return "Final Result: Failed";
}

const retryResult = retryAction(function(attempt) {
    if (attempt === 3) {
        return "Passed";
    }

    return "Failed";
}, 5);

console.log(retryResult);
