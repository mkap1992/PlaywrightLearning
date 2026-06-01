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

const functionComparison = [
    {
        Feature: "Syntax",
        "Normal Function": "function add(a, b) { return a + b; }",
        "Arrow Function": "const add = (a, b) => a + b;"
    },
    {
        Feature: "this keyword",
        "Normal Function": "Has its own this",
        "Arrow Function": "Uses this from its surrounding scope"
    },
    {
        Feature: "arguments object",
        "Normal Function": "Available inside the function",
        "Arrow Function": "Not available directly"
    },
    {
        Feature: "Best use",
        "Normal Function": "Methods, constructors, reusable functions",
        "Arrow Function": "Short callbacks and simple expressions"
    }
];

console.table(functionComparison);

console.log("Regular function add(2, 3):", add(2, 3));
console.log("Arrow function addArrow(2, 3):", addArrow(2, 3));
console.log("Arrow function addArrowShort(2, 3):", addArrowShort(2, 3));
// double the number using arrow function
const double = x => x*2;
console.log("Double of 5 using arrow function:", double(5));
const name = name => `Hellow, ${name}!`;
console.log(name("Alice")); // Output: Hello, Alice!
