// JavaScript Increment and Decrement Operators
// The increment operator (++) increases a number value by 1.
// The decrement operator (--) decreases a number value by 1.

// There are two types of increment operators:
// 1. Post-increment: variable++
// 2. Pre-increment: ++variable

// Example 1: Basic increment

let count = 5;

console.log("Original Count:", count);

count++;

console.log("After Increment:", count);

// Post-increment
// In post-increment, the current value is used first,
// then the value is increased by 1.

let postNumber = 10;
let postResult = postNumber++;

console.log("Post Number:", postNumber);
console.log("Post Result:", postResult);

// Pre-increment
// In pre-increment, the value is increased by 1 first,
// then the updated value is used.

let preNumber = 10;
let preResult = ++preNumber;

console.log("Pre Number:", preNumber);
console.log("Pre Result:", preResult);

// Example 2: Increment inside a loop

for (let i = 1; i <= 5; i++) {
  console.log("Loop Count:", i);
}

// Example 3: Increment marks

let marks = 79;

console.log("Marks Before Grace:", marks);

marks++;

console.log("Marks After Grace:", marks);

// Note:
// number++ and ++number both increase the value by 1.
// The difference matters when the increment is used inside another expression.

// JavaScript Decrement Operator
// The decrement operator (--) decreases a number value by 1.

// There are two types of decrement operators:
// 1. Post-decrement: variable--
// 2. Pre-decrement: --variable

// Example 4: Basic decrement

let stock = 20;

console.log("Original Stock:", stock);

stock--;

console.log("After Decrement:", stock);

// Post-decrement
// In post-decrement, the current value is used first,
// then the value is decreased by 1.

let postDecrementNumber = 10;
let postDecrementResult = postDecrementNumber--;

console.log("Post Decrement Number:", postDecrementNumber);
console.log("Post Decrement Result:", postDecrementResult);

// Pre-decrement
// In pre-decrement, the value is decreased by 1 first,
// then the updated value is used.

let preDecrementNumber = 10;
let preDecrementResult = --preDecrementNumber;

console.log("Pre Decrement Number:", preDecrementNumber);
console.log("Pre Decrement Result:", preDecrementResult);

// Example 5: Decrement inside a loop

for (let i = 5; i >= 1; i--) {
  console.log("Reverse Loop Count:", i);
}

// Example 6: Decrement lives

let lives = 3;

console.log("Lives Before Mistake:", lives);

lives--;

console.log("Lives After Mistake:", lives);

// Note:
// number-- and --number both decrease the value by 1.
// The difference matters when the decrement is used inside another expression.
