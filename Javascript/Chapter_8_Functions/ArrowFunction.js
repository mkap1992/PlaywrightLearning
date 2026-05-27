// Arrow function is introduced in ES6, 
// it is a shorter syntax for writing function expressions. It also has some differences in behavior compared to regular functions, such as not having its own 'this' context.

// Regular function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function expression
const addArrow = (a, b) => {
    return a + b;
};
const addArrowShort = (a, b) => a + b; // Shorter syntax for single expression

console.log("Regular function add(2, 3):", add(2, 3));
console.log("Arrow function addArrow(2, 3):", addArrow(2, 3));
console.log("Arrow function addArrowShort(2, 3):", addArrowShort(2, 3));
// double the number using arrow function
const double = x => x*2;
console.log("Double of 5 using arrow function:", double(5));
const name = name => `Hellow, ${name}!`;
console.log(name("Alice")); // Output: Hello, Alice!