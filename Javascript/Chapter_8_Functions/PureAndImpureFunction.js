// Pure and impure functions in JavaScript

// Pure function:
// 1. Gives the same output for the same input.
// 2. Does not change outside data.

console.log("Example 1: Pure function");

function add(num1, num2) {
    return num1 + num2;
}

console.log("add(10, 20):", add(10, 20));
console.log("add(10, 20):", add(10, 20));

console.log("\nExample 2: Pure function with array");

function addItemPure(items, newItem) {
    return [...items, newItem];
}

const browsers = ["Chrome", "Firefox"];
const updatedBrowsers = addItemPure(browsers, "Edge");

console.log("Original browsers:", browsers);
console.log("Updated browsers:", updatedBrowsers);

// Impure function:
// 1. May give different output for the same input.
// 2. May change outside data.
// 3. May depend on external state, date, random number, API, file, database, etc.

console.log("\nExample 3: Impure function changing outside data");

let count = 0;

function incrementCount() {
    count++;
    return count;
}

console.log("Count:", incrementCount());
console.log("Count:", incrementCount());
console.log("Outside count changed:", count);

console.log("\nExample 4: Impure function changing original array");

function addItemImpure(items, newItem) {
    items.push(newItem);
    return items;
}

const testStatuses = ["Passed", "Failed"];
const updatedStatuses = addItemImpure(testStatuses, "Skipped");

console.log("Original array changed:", testStatuses);
console.log("Returned array:", updatedStatuses);

console.log("\nExample 5: Impure function using random number");

function getRandomDiscount(price) {
    const discount = Math.floor(Math.random() * 100);
    return price - discount;
}

console.log("Random discount price:", getRandomDiscount(1000));
console.log("Random discount price:", getRandomDiscount(1000));

console.log("\nInterview Summary");
console.log("Pure function: predictable, testable, no side effects.");
console.log("Impure function: can depend on or change outside state.");
