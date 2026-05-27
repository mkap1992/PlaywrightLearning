// Function is a block of code designed to perform a particular task. 
// It is executed when "something" invokes it (calls it).\
//  A JavaScript function is defined with the function keyword, 
//  followed by a name, followed by parentheses ().
// A function is a reusable block of code.
// A method is also a function, but it belongs to an object.
function greet() {
    console.log("Hello, World!");

}
// Types of functions in JavaScript:
// 1. No Argument no return value
function sayHello() {
    console.log("Hello!");
}
let a = sayHello();
console.log("Return value of sayHello():", a); // undefined