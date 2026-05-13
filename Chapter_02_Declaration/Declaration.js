// `var` was the original keyword in JavaScript. 
// It is **function-scoped**, can be **redeclared**, can be 
// **reassigned**, and gets **hoisted** to the top of its scope with an initial value of `undefined`.
var v = 10;

var browser = "chrome";
var browser = "firefox"; // redeclaration allowed
browser = "edge";
// 1. Define of function
function greet() {
    console.log("Hi, How are you?");
}

// 2. Calling of the function
greet();
greet();

//  `let` -> the modern way for changing values
// `let` is **block-scoped** (lives only inside `{ }`), can be **reassigned**, but **cannot be redeclared** in the same scope. It is **hoisted** but not initialized, so accessing it before declaration throws a `ReferenceError`.

// Use `let` when the value will genuinely change -> counters, retry attempts, current page URL, etc.




