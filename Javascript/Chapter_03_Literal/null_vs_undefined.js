// Difference between null and undefined in JavaScript

// undefined means a variable has been declared but no value is assigned yet.
let studentName;
console.log("studentName:", studentName);
console.log("typeof studentName:", typeof studentName);

// null means we intentionally assigned an empty or no-value result.
let selectedStudent = null;
console.log("selectedStudent:", selectedStudent);
console.log("typeof selectedStudent:", typeof selectedStudent);

// Main difference:
// undefined is usually assigned by JavaScript.
// null is usually assigned by the developer.

let userAge;
let userAddress = null;

console.log("userAge is undefined:", userAge === undefined);
console.log("userAddress is null:", userAddress === null);

// Equality comparison:
// == checks only value after type conversion.
// === checks value and type both.

console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);

// Example use case:
// undefined: value is not provided yet.
// null: value is intentionally empty.

let phoneNumber;
let middleName = null;

console.log("phoneNumber:", phoneNumber);
console.log("middleName:", middleName);
