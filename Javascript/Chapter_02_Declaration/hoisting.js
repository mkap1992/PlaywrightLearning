console.log(greeting); // undefined due to hoisting
var greeting = "Hello, World!";
console.log(greeting); // "Hello, World!"
// This applicable for variables declared with `var` and function declarations.
//  They are hoisted to the top of their scope, but only `var` variables are initialized with `undefined`. 
// Accessing a `let` or `const` variable before its declaration will result in a `ReferenceError` due to the temporal dead zone.
console.log(greetingLet); // ReferenceError: Cannot access 'greetingLet' before initialization
let greetingLet = "Hello, Let!";
console.log(greetingLet); // "Hello, Let!"
// let is block-scoped, so it is not hoisted in the same way as var. It is hoisted but not initialized,
// which is why we get a ReferenceError when trying to access it before declaration.