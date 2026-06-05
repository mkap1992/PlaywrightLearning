// Objects are collections of properties, and a property is an association between a name (or key) and a value.
// Objects can be created using object literals, constructor functions, or the Object.create() method.
// Object literal syntax
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);
// Constructor function syntax
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
let person2 = new Person("Jane", 25, "Los Angeles");
console.log(person2.name);
console.log(person2.age);
console.log(person2.city);
// Object.create() method
let person3 = Object.create(person);
console.log(person3.name);
console.log(person3.age);
console.log(person3.city);  
// Objects can also have methods, which are functions that are properties of an object.
let person4 = {
    name: "Alice",
    age: 28,
    city: "Chicago",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person4.greet();    
// Copy by reference
let person5 = person4;
person5.name = "Bob";
console.log(person4.name);
console.log(person5.name);
// To create a copy of an object, you can use Object.assign() or the spread operator.
let person6 = Object.assign({}, person4);       
person6.name = "Charlie";
console.log(person4.name);
console.log(person6.name);

let person7 = {...person4};
person7.name = "David";
console.log(person4.name);
console.log(person7.name);  
// Objects can also have nested objects and arrays as properties.
let person8 = {
    name: "Eve",
    address: {
        street: "123 Main St",
        city: "Boston" },
    hobbies: ["reading", "swimming"]
};  
console.log(person8.name);
console.log(person8.address.street);
console.log(person8.address.city);
console.log(person8.hobbies[0]);
console.log(person8.hobbies[1]);