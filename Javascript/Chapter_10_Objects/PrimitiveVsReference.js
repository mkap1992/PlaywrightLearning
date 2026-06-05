// Primitive vs Reference Types

// Primitive Types
let a = 10;
let b = a;  
console.log(a); // 10
console.log(b); // 10
b = 20;  
console.log(a); // 10
console.log(b); // 20
// Reference Types
let obj1 = { name: "John" };
let obj2 = obj1;  
console.log(obj1.name); // John
console.log(obj2.name); // John
obj2.name = "Jane";  
console.log(obj1.name); // Jane
console.log(obj2.name); // Jane
// To create a copy of an object, you can use Object.assign() or the spread operator.
let obj3 = Object.assign({}, obj1);       
obj3.name = "Alice";
console.log(obj1.name); // Jane
console.log(obj3.name); // Alice