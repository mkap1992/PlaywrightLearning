// String Literals in JavaScript
// A string literal is text written directly in the code.

// String using double quotes
let firstName = "Rahul";
console.log("Double quote string:", firstName);

// String using single quotes
let city = 'Pune';
console.log("Single quote string:", city);

// String using backticks
let country = `India`;
console.log("Backtick string:", country);

// String with apostrophe
let message = "It's a JavaScript class";
console.log("String with apostrophe:", message);

// String with double quotes inside
let quote = 'He said, "JavaScript is easy"';
console.log("String with double quotes inside:", quote);

// Escape character
let escapedText = "He said, \"Practice daily\"";
console.log("Escaped string:", escapedText);

// New line using escape sequence
let multiLineWithEscape = "JavaScript\nPlaywright";
console.log("String with new line:");
console.log(multiLineWithEscape);

// Template literal with variable
let studentName = "Priya";
let courseName = "JavaScript";
let introduction = `My name is ${studentName}. I am learning ${courseName}.`;
console.log("Template literal:", introduction);

// Template literal with expression
let price = 500;
let quantity = 2;
let billMessage = `Total price is ${price * quantity}`;
console.log("Template literal with expression:", billMessage);

// Multi-line string using template literal
let address = `Flat 101
Pune
India`;
console.log("Multi-line template literal:");
console.log(address);

// Empty string
let emptyString = "";
console.log("Empty string:", emptyString);

// String length
let language = "JavaScript";
console.log("String length:", language.length);

// typeof string literal
console.log("typeof language:", typeof language);
