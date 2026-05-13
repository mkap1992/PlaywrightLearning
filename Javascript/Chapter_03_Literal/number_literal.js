// Number Literals in JavaScript
// A number literal is a fixed number value written directly in the code.

// Integer literal
let age = 25;
console.log("Integer literal:", age);

// Decimal or floating-point literal
let price = 99.99;
console.log("Decimal literal:", price);

// Negative number literal
let temperature = -10;
console.log("Negative number literal:", temperature);

// Zero
let zeroValue = 0;
console.log("Zero literal:", zeroValue);

// Binary number literal
// Binary numbers start with 0b.
let binaryNumber = 0b1010;
console.log("Binary literal 0b1010:", binaryNumber);

// Octal number literal
// Octal numbers start with 0o.
let octalNumber = 0o12;
console.log("Octal literal 0o12:", octalNumber);

// Hexadecimal number literal
// Hexadecimal numbers start with 0x.
let hexNumber = 0xA;
console.log("Hexadecimal literal 0xA:", hexNumber);

// Exponential notation
let largeNumber = 1e6;
let smallNumber = 1e-3;
console.log("Exponential literal 1e6:", largeNumber);
console.log("Exponential literal 1e-3:", smallNumber);

// Numeric separator
// Underscore can make large numbers easier to read.
let yearlySalary = 1_200_000;
console.log("Numeric separator literal:", yearlySalary);

// Special number values
let infinityValue = Infinity;
let notANumberValue = NaN;
console.log("Infinity value:", infinityValue);
console.log("NaN value:", notANumberValue);

// typeof number literal
console.log("typeof age:", typeof age);
console.log("typeof price:", typeof price);
console.log("typeof NaN:", typeof notANumberValue);
