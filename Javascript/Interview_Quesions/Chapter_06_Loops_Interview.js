// Chapter 06 Interview Questions: Loops
// Theory questions plus practical examples.

console.log("Chapter 06: Loops Interview Questions\n");

console.log("Q1. What is a loop?");
console.log("Answer: A loop repeats a block of code while a condition is true.");

console.log("\nQ2. When do we use a for loop?");
console.log("Answer: Use a for loop when the number of iterations is known.");

for (let number = 1; number <= 5; number++) {
    console.log("For loop number:", number);
}

console.log("\nQ3. When do we use a while loop?");
console.log("Answer: Use a while loop when the loop depends on a condition.");

let retryCount = 1;

while (retryCount <= 3) {
    console.log("Retry attempt:", retryCount);
    retryCount++;
}

console.log("\nQ4. What is the difference between while and do while?");
console.log("Answer: do while runs at least once, even if the condition is false.");

let paymentAttempt = 1;

do {
    console.log("Payment attempt:", paymentAttempt);
    paymentAttempt++;
} while (paymentAttempt <= 1);

console.log("\nQ5. What is break?");
console.log("Answer: break stops the loop immediately.");

for (let index = 1; index <= 5; index++) {
    if (index === 3) {
        break;
    }

    console.log("Before break:", index);
}

console.log("\nQ6. Practical: Print all browsers from an array.");

let browsers = ["Chrome", "Firefox", "Safari", "Edge"];

for (let index = 0; index < browsers.length; index++) {
    console.log("Browser:", browsers[index]);
}

console.log("\nQ7. Practical: Find the first failed test.");

let testResults = ["Passed", "Passed", "Failed", "Skipped"];

for (let result of testResults) {
    if (result === "Failed") {
        console.log("First failed test found");
        break;
    }
}

console.log("\nQ8. Practical: Count passed test cases.");

let passedCount = 0;

for (let result of testResults) {
    if (result === "Passed") {
        passedCount++;
    }
}

console.log("Passed count:", passedCount);
