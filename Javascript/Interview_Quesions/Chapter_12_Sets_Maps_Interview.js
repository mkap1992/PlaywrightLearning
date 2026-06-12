// Chapter 12 Interview Questions: Sets and Maps
// Theory questions plus practical examples.

console.log("Chapter 12: Sets and Maps Interview Questions\n");

console.log("Q1. What is a Set in JavaScript?");
console.log("Answer: A Set is a collection that stores only unique values.");

let browsers = new Set(["Chrome", "Firefox", "Safari", "Chrome"]);
console.log("Browsers set:", browsers);

console.log("\nQ2. How do you add values to a Set?");
console.log("Answer: Use the add() method.");

browsers.add("Edge");
browsers.add("Chrome");

console.log("After add:", browsers);

console.log("\nQ3. How do you check whether a Set contains a value?");
console.log("Answer: Use the has() method. It returns true or false.");

console.log("Has Chrome:", browsers.has("Chrome"));
console.log("Has Opera:", browsers.has("Opera"));

console.log("\nQ4. How do you remove values from a Set?");
console.log("Answer: Use delete() to remove one value and clear() to remove all values.");

let testStatuses = new Set(["Passed", "Failed", "Skipped"]);
testStatuses.delete("Skipped");

console.log("After delete:", testStatuses);

console.log("\nQ5. How do you find the size of a Set?");
console.log("Answer: Use the size property.");

console.log("Set size:", testStatuses.size);

console.log("\nQ6. Practical: Remove duplicate values from an array.");

let numbers = [10, 20, 10, 30, 20, 40];
let uniqueNumbers = [...new Set(numbers)];

console.log("Original numbers:", numbers);
console.log("Unique numbers:", uniqueNumbers);

console.log("\nQ7. Practical: Iterate through a Set.");

let skills = new Set(["JavaScript", "Playwright", "API Testing"]);

skills.forEach(function(skill) {
    console.log("Skill:", skill);
});

console.log("\nQ8. What is a Map in JavaScript?");
console.log("Answer: A Map stores key-value pairs and allows keys of any data type.");

let userRoles = new Map();
userRoles.set("Nagarjuna", "Tester");
userRoles.set("Priya", "Developer");
userRoles.set("Amit", "Manager");

console.log("User roles:", userRoles);

console.log("\nQ9. How do you get a value from a Map?");
console.log("Answer: Use the get() method with the key.");

console.log("Nagarjuna role:", userRoles.get("Nagarjuna"));
console.log("Priya role:", userRoles.get("Priya"));

console.log("\nQ10. How do you check whether a Map contains a key?");
console.log("Answer: Use the has() method.");

console.log("Has Amit:", userRoles.has("Amit"));
console.log("Has Sneha:", userRoles.has("Sneha"));

console.log("\nQ11. How do you update and delete values in a Map?");
console.log("Answer: Use set() again to update a key, and delete() to remove a key.");

userRoles.set("Amit", "Senior Manager");
userRoles.delete("Priya");

console.log("After update and delete:", userRoles);

console.log("\nQ12. Difference between Object and Map?");
console.log("Answer: Object is best for fixed property names. Map is best for dynamic key-value data and supports any key type.");

let browserObject = {
    Chrome: 120,
    Firefox: 121
};

let browserMap = new Map([
    ["Chrome", 120],
    ["Firefox", 121]
]);

console.log("Object value:", browserObject.Chrome);
console.log("Map value:", browserMap.get("Chrome"));

console.log("\nQ13. Practical: Count repeated values using Map.");

let testResults = ["Passed", "Failed", "Passed", "Skipped", "Failed", "Passed"];
let resultCount = new Map();

for (let i = 0; i < testResults.length; i++) {
    let result = testResults[i];

    if (resultCount.has(result)) {
        resultCount.set(result, resultCount.get(result) + 1);
    } else {
        resultCount.set(result, 1);
    }
}

console.log("Result count:", resultCount);

console.log("\nQ14. Practical: Convert a Map to an array.");

let roleEntries = [...userRoles];
let roleKeys = [...userRoles.keys()];
let roleValues = [...userRoles.values()];

console.log("Map entries:", roleEntries);
console.log("Map keys:", roleKeys);
console.log("Map values:", roleValues);

console.log("\nQ15. Practical: Use an object as a Map key.");

let loginTest = { name: "Login Test", id: 101 };
let testExecutionMap = new Map();

testExecutionMap.set(loginTest, "Passed");

console.log("Object key value:", testExecutionMap.get(loginTest));
