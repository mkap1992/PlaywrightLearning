// 2. With Argument no return value
function sayHello(name) {
    console.log("Hello, " + name + "!");
}
sayHello("Alice"); // Output: Hello, Alice!
let result = sayHello("Bob");
console.log("Return value of sayHello('Bob'):", result); // undefined

// 3. No Argument with return value
function getUniverdalName(){
    return "Universe";
}
let universalName = getUniverdalName();
console.log("Universal Name:", universalName); // Output: Universal Name: Universe

// 4. With Argument with return value   
function add(a, b) {
    return a + b;
}   
let sum = add(5, 3);
console.log("Sum:", sum); // Output: Sum: 8
//function with template literal return value
function greetWithTemplate(name) {
    return `Hello, ${name}!`;
}
console.log(greetWithTemplate("Charlie")); // Output: Hello, Charlie! 

// Function expression
const multiply = function(x, y) {
    return x * y;
};