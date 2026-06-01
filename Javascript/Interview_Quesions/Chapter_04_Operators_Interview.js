// Chapter 04 Interview Questions: Operators
// Theory questions plus practical examples.

console.log("Chapter 04: Operators Interview Questions\n");

console.log("Q1. What is the difference between post-increment and pre-increment?");
console.log("Answer: post-increment uses the current value first, then increments. pre-increment increments first, then uses the value.");

let postNumber = 5;
let postResult = postNumber++;
console.log("Post result:", postResult);
console.log("Post number:", postNumber);

let preNumber = 5;
let preResult = ++preNumber;
console.log("Pre result:", preResult);
console.log("Pre number:", preNumber);

console.log("\nQ2. What is the ternary operator?");
console.log("Answer: It is a short way to write simple if-else logic.");

let age = 20;
let votingResult = age >= 18 ? "Eligible" : "Not eligible";
console.log("Voting result:", votingResult);

console.log("\nQ3. What is the nullish coalescing operator?");
console.log("Answer: ?? returns the right value only when the left value is null or undefined.");

let userName = null;
let displayName = userName ?? "Guest";
console.log("Display name:", displayName);

console.log("\nQ4. Difference between || and ??");
console.log("Answer: || replaces all falsy values. ?? replaces only null or undefined.");

let cartItems = 0;
console.log("Using ||:", cartItems || 10);
console.log("Using ??:", cartItems ?? 10);

console.log("\nQ5. Practical: Check even or odd using ternary.");

let number = 15;
let numberType = number % 2 === 0 ? "Even" : "Odd";
console.log("Number type:", numberType);

console.log("\nQ6. Practical: Calculate grade using nested ternary.");

let marks = 82;
let grade = marks >= 90
    ? "A"
    : marks >= 75
    ? "B"
    : marks >= 60
    ? "C"
    : "Fail";

console.log("Grade:", grade);

console.log("\nQ7. Practical: Apply discount only when coupon exists.");

let couponCode = "SAVE10";
let price = 1000;
let finalPrice = couponCode ? price - 100 : price;

console.log("Final price:", finalPrice);

console.log("\nQ8. Practical: Use decrement for retry count.");

let retries = 3;

while (retries > 0) {
    console.log("Retries left:", retries);
    retries--;
}
