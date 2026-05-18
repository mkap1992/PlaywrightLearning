// JavaScript Ternary Operator
// The ternary operator is a short way to write an if-else condition.

// Syntax:
// condition ? value_if_true : value_if_false

let age = 20;

let votingResult = age >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log("Age:", age);
console.log("Voting Result:", votingResult);

// Example 2: Check even or odd number

let number = 15;

let numberType = number % 2 === 0 ? "Even number" : "Odd number";

console.log("Number:", number);
console.log("Number Type:", numberType);

// Nested Ternary Operator
// A nested ternary means using one ternary operator inside another ternary operator.

// Example: Find student grade based on marks

let marks = 82;

let grade =
  marks >= 90
    ? "Grade A"
    : marks >= 75
    ? "Grade B"
    : marks >= 60
    ? "Grade C"
    : marks >= 35
    ? "Pass"
    : "Fail";

console.log("Marks:", marks);
console.log("Grade:", grade);

// Example 2: Find temperature message

let temperature = 32;

let weatherMessage =
  temperature >= 40
    ? "Very hot"
    : temperature >= 30
    ? "Hot"
    : temperature >= 20
    ? "Pleasant"
    : temperature >= 10
    ? "Cold"
    : "Very cold";

console.log("Temperature:", temperature);
console.log("Weather:", weatherMessage);

// Note:
// Use simple ternary operators for small conditions.
// If the condition becomes too complex, use if-else for better readability.

// Nullish Coalescing Operator
// The nullish coalescing operator (??) returns the right side value only when
// the left side value is null or undefined.

// Syntax:
// value ?? default_value

let userName = null;

let displayName = userName ?? "Guest User";

console.log("User Name:", userName);
console.log("Display Name:", displayName);

// Example 2: undefined value

let selectedLanguage;

let language = selectedLanguage ?? "English";

console.log("Selected Language:", selectedLanguage);
console.log("Language:", language);

// Example 3: It does not replace false, 0, or empty string

let cartItems = 0;
let isLoggedIn = false;
let searchText = "";

let finalCartItems = cartItems ?? 10;
let finalLoginStatus = isLoggedIn ?? true;
let finalSearchText = searchText ?? "No search text";

console.log("Cart Items:", finalCartItems);
console.log("Login Status:", finalLoginStatus);
console.log("Search Text:", finalSearchText);

// Difference between || and ??
// || checks for any falsy value like 0, false, "", null, or undefined.
// ?? checks only for null or undefined.

let score = 0;

let scoreUsingOr = score || 100;
let scoreUsingNullish = score ?? 100;

console.log("Score using ||:", scoreUsingOr);
console.log("Score using ??:", scoreUsingNullish);
