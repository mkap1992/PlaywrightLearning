// Chapter 07 Interview Questions: Arrays
// Theory questions plus practical examples.

console.log("Chapter 07: Arrays Interview Questions\n");

console.log("Q1. What is an array?");
console.log("Answer: An array stores multiple values in one variable.");

let browsers = ["Chrome", "Firefox", "Safari"];
console.log("Browsers:", browsers);

console.log("\nQ2. How do you access array values?");
console.log("Answer: Use index positions. Array index starts from 0.");

console.log("First browser:", browsers[0]);
console.log("Last browser using at():", browsers.at(-1));

console.log("\nQ3. Difference between push and pop?");
console.log("Answer: push adds item at the end. pop removes item from the end.");

browsers.push("Edge");
console.log("After push:", browsers);

let removedBrowser = browsers.pop();
console.log("Removed browser:", removedBrowser);
console.log("After pop:", browsers);

console.log("\nQ4. Difference between shift and unshift?");
console.log("Answer: unshift adds at the start. shift removes from the start.");

browsers.unshift("Opera");
console.log("After unshift:", browsers);

let firstRemoved = browsers.shift();
console.log("Removed first:", firstRemoved);
console.log("After shift:", browsers);

console.log("\nQ5. What does splice do?");
console.log("Answer: splice can add, remove, or replace items in an array.");

browsers.splice(1, 1, "Brave");
console.log("After splice:", browsers);

console.log("\nQ6. Practical: Sort numbers correctly.");

let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(a, b) {
    return a - b;
});

console.log("Sorted numbers:", numbers);

console.log("\nQ7. Practical: Get only selected array values using slice.");

let selectedNumbers = numbers.slice(1, 4);
console.log("Selected numbers:", selectedNumbers);

console.log("\nQ8. Practical: Combine two arrays.");

let mobileBrowsers = ["Chrome Mobile", "Safari Mobile"];
let allBrowsers = browsers.concat(mobileBrowsers);
console.log("Combined browsers:", allBrowsers);

console.log("\nQ9. Practical: Filter passed test cases.");

let testCases = [
    { name: "Login", status: "Passed" },
    { name: "Payment", status: "Failed" },
    { name: "Search", status: "Passed" }
];

let passedTests = testCases.filter(function(test) {
    return test.status === "Passed";
});

console.log("Passed tests:", passedTests);

console.log("\nQ10. Practical: Convert names to uppercase using map.");

let names = ["rahul", "priya", "amit"];
let upperCaseNames = names.map(function(name) {
    return name.toUpperCase();
});

console.log("Uppercase names:", upperCaseNames);
