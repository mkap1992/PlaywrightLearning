// Chapter 03 Interview Questions: Literals
// Theory questions plus practical examples.

console.log("Chapter 03: Literals Interview Questions\n");

console.log("Q1. What is a literal?");
console.log("Answer: A literal is a fixed value written directly in code.");

let numberLiteral = 25;
let stringLiteral = "JavaScript";
let booleanLiteral = true;

console.log(numberLiteral, stringLiteral, booleanLiteral);

console.log("\nQ2. What is the difference between null and undefined?");
console.log("Answer: undefined means value is not assigned. null means empty value is assigned intentionally.");

let pendingValue;
let emptyValue = null;

console.log("pendingValue:", pendingValue);
console.log("emptyValue:", emptyValue);
console.log("typeof undefined:", typeof pendingValue);
console.log("typeof null:", typeof emptyValue);

console.log("\nQ3. What are template literals?");
console.log("Answer: Template literals use backticks and support variables or expressions with ${}.");

let studentName = "Priya";
let marks = 88;
console.log(`${studentName} scored ${marks} marks`);

console.log("\nQ4. What are binary, octal, and hexadecimal literals?");
console.log("Answer: They represent numbers using base 2, base 8, and base 16.");

console.log("Binary 0b1010:", 0b1010);
console.log("Octal 0o12:", 0o12);
console.log("Hexadecimal 0xA:", 0xA);

console.log("\nQ5. What is NaN?");
console.log("Answer: NaN means Not-a-Number, but its type is number.");

let invalidNumber = Number("Hello");
console.log("Invalid number:", invalidNumber);
console.log("typeof NaN:", typeof invalidNumber);
console.log("Is NaN:", Number.isNaN(invalidNumber));

console.log("\nQ6. Practical: Build a full name using string literals.");

let firstName = "Rahul";
let lastName = "Sharma";
let fullName = `${firstName} ${lastName}`;

console.log("Full name:", fullName);

console.log("\nQ7. Practical: Calculate bill using numeric literals.");

let price = 499.99;
let quantity = 2;
let billAmount = price * quantity;

console.log("Bill amount:", billAmount);

console.log("\nQ8. Practical: Compare null and undefined.");

console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
