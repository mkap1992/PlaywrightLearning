// Decontructing an object is a convenient way to extract values from an object and assign them to variables. 
//  It allows you to unpack properties from objects into distinct variables in a concise and readable manner.
// Object deconstruction syntax
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
let { name, age, city } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York
// You can also assign new variable names while deconstructing
let { name: personName, age: personAge, city: personCity } = person;
console.log(personName); // John
console.log(personAge); // 30
console.log(personCity); // New York
// Deconstructing nested objects
let person2 = {
    name: "Jane",
    address: {
        street: "456 Oak Ave",
        city: "Los Angeles"
    }
};
let { name, address: { street, city } } = person2;
console.log(name); // Jane
console.log(street); // 456 Oak Ave
console.log(city); // Los Angeles   
// Deconstructing arrays
let numbers = [1, 2, 3];
let [first, second, third] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
// You can also skip values while deconstructing arrays
let [first, , third] = numbers;
console.log(first); // 1
console.log(third); // 3    
