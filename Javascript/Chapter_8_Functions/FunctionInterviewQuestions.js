// JavaScript Function Interview Questions
// Each question includes the answer, explanation, and a runnable example.

console.log("JavaScript Function Interview Questions\n");

console.log("Q1. What is the difference between a function declaration and a function expression?");
console.log("Answer: A function declaration is hoisted fully, but a function expression stored in const/let is not usable before its declaration.");

console.log("Function declaration call before declaration:", add(10, 5));

function add(num1, num2) {
    return num1 + num2;
}

try {
    console.log("Function expression call before declaration:", multiply(10, 5));
} catch (error) {
    console.log("Function expression error:", error.name);
}

const multiply = function(num1, num2) {
    return num1 * num2;
};

console.log("Function expression call after declaration:", multiply(10, 5));

console.log("\nQ2. What is an arrow function?");
console.log("Answer: An arrow function is a shorter way to write a function expression.");
console.log("Explanation: It is useful for short callbacks and one-line return values.");

const square = number => number * number;
console.log("Square of 6:", square(6));

console.log("\nQ3. What is the difference between normal function this and arrow function this?");
console.log("Answer: A normal function gets its own this based on how it is called. An arrow function uses this from the surrounding scope.");

const user = {
    name: "Rahul",
    normalFunction: function() {
        return this.name;
    },
    arrowFunction: () => {
        return this.name;
    }
};

console.log("Normal function this:", user.normalFunction());
console.log("Arrow function this:", user.arrowFunction());

console.log("\nQ4. What is the arguments object?");
console.log("Answer: arguments is an array-like object available inside normal functions.");
console.log("Explanation: Arrow functions do not have their own arguments object. Use rest parameters instead.");

function showArguments() {
    console.log("First argument:", arguments[0]);
    console.log("Total arguments:", arguments.length);
}

showArguments("Chrome", "Firefox", "Edge");

const showRestArguments = (...browsers) => {
    console.log("Rest parameter array:", browsers);
};

showRestArguments("Chrome", "Firefox", "Edge");

console.log("\nQ5. What are default parameters?");
console.log("Answer: Default parameters provide fallback values when arguments are missing or undefined.");

function greet(name = "Guest", course = "JavaScript") {
    return `Hello ${name}, welcome to ${course}`;
}

console.log(greet("Sneha", "Playwright"));
console.log(greet());

console.log("\nQ6. What is a rest parameter?");
console.log("Answer: A rest parameter collects multiple arguments into one array.");
console.log("Explanation: Rest parameter must be the last parameter in the function.");

function calculateTotalMarks(studentName, ...marks) {
    let total = 0;

    for (let mark of marks) {
        total = total + mark;
    }

    return `${studentName} total marks: ${total}`;
}

console.log(calculateTotalMarks("Amit", 80, 75, 90));

console.log("\nQ7. What is a callback function?");
console.log("Answer: A callback is a function passed as an argument to another function.");

function processUser(name, callback) {
    const message = `User name is ${name}`;
    callback(message);
}

processUser("Priya", function(message) {
    console.log("Callback output:", message);
});

console.log("\nQ8. What is a higher-order function?");
console.log("Answer: A higher-order function accepts another function as an argument or returns a function.");

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

console.log("\nQ9. What is closure?");
console.log("Answer: A closure is created when an inner function remembers variables from its outer function.");

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
console.log("Counter:", counter());

console.log("\nQ10. What is an IIFE?");
console.log("Answer: IIFE means Immediately Invoked Function Expression. It runs immediately after creation.");

(function() {
    const message = "IIFE executed immediately";
    console.log(message);
})();

console.log("\nQ11. What is a pure function?");
console.log("Answer: A pure function gives the same output for the same input and does not change outside data.");

function pureAdd(num1, num2) {
    return num1 + num2;
}

console.log("Pure function result:", pureAdd(5, 7));

console.log("\nQ12. What is recursion?");
console.log("Answer: Recursion means a function calls itself until a stopping condition is reached.");

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log("Factorial of 5:", factorial(5));

console.log("\n--- Practical Function Interview Questions ---");

console.log("\nQ13. Write a function to find the largest number from many arguments.");
console.log("Answer: Use rest parameter to collect all numbers, then compare them.");

function findLargestNumber(...numbers) {
    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log("Largest number:", findLargestNumber(10, 45, 2, 99, 23));

console.log("\nQ14. Write a function to calculate total cart price.");
console.log("Answer: Use an array of product prices and return the total.");

function calculateCartTotal(prices) {
    let total = 0;

    for (let price of prices) {
        total = total + price;
    }

    return total;
}

console.log("Cart total:", calculateCartTotal([299, 499, 199]));

console.log("\nQ15. Write a function to return only passed test cases.");
console.log("Answer: Use a callback with filter to keep only test cases where status is Passed.");

const testCases = [
    { name: "Login test", status: "Passed" },
    { name: "Payment test", status: "Failed" },
    { name: "Search test", status: "Passed" }
];

function getPassedTests(tests) {
    return tests.filter(function(test) {
        return test.status === "Passed";
    });
}

console.log("Passed tests:", getPassedTests(testCases));

console.log("\nQ16. Write a function that accepts another function to format a name.");
console.log("Answer: This is a higher-order function because it accepts a callback.");

function formatUserName(firstName, lastName, formatter) {
    return formatter(firstName, lastName);
}

const fullName = formatUserName("Rahul", "Sharma", function(firstName, lastName) {
    return `${firstName} ${lastName}`;
});

const shortName = formatUserName("Rahul", "Sharma", function(firstName, lastName) {
    return `${firstName} ${lastName[0]}.`;
});

console.log("Full name:", fullName);
console.log("Short name:", shortName);

console.log("\nQ17. Write a function that creates a discount calculator.");
console.log("Answer: Use closure to remember the discount percentage.");

function createDiscountCalculator(discountPercentage) {
    return function(price) {
        const discountAmount = price * discountPercentage / 100;
        return price - discountAmount;
    };
}

const tenPercentDiscount = createDiscountCalculator(10);
const twentyPercentDiscount = createDiscountCalculator(20);

console.log("Price after 10% discount:", tenPercentDiscount(1000));
console.log("Price after 20% discount:", twentyPercentDiscount(1000));

console.log("\nQ18. Predict the output and fix the function.");
console.log("Question: Why does badAdd(10, 20) return undefined?");
console.log("Answer: The function calculates the value but does not return it.");

function badAdd(num1, num2) {
    const total = num1 + num2;
}

function goodAdd(num1, num2) {
    const total = num1 + num2;
    return total;
}

console.log("Bad add result:", badAdd(10, 20));
console.log("Good add result:", goodAdd(10, 20));

console.log("\nQ19. Write a function to count how many times a word appears.");
console.log("Answer: Loop through the array and increase count when the word matches.");

function countWord(words, searchWord) {
    let count = 0;

    for (let word of words) {
        if (word === searchWord) {
            count++;
        }
    }

    return count;
}

const browsers = ["Chrome", "Firefox", "Chrome", "Edge", "Chrome"];
console.log("Chrome count:", countWord(browsers, "Chrome"));

console.log("\nQ20. Write a function to retry an action until it passes or reaches max attempts.");
console.log("Answer: Pass the action as a callback and call it inside a loop.");

function retryAction(action, maxAttempts) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        const result = action(attempt);

        console.log(`Attempt ${attempt}:`, result);

        if (result === "Passed") {
            return "Test passed";
        }
    }

    return "Test failed";
}

const retryResult = retryAction(function(attempt) {
    if (attempt === 3) {
        return "Passed";
    }

    return "Failed";
}, 5);

console.log("Retry result:", retryResult);
