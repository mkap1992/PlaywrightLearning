// Chapter 10 Interview Questions: Objects
// Theory questions plus practical examples.

console.log("Chapter 10: Objects Interview Questions\n");

console.log("Q1. What is an object?");
console.log("Answer: An object stores data as key-value pairs called properties.");

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log("\nQ2. How do you access object properties?");
console.log("Answer: Use dot notation or bracket notation.");

console.log("Dot notation:", person.name);
console.log("Bracket notation:", person["city"]);

console.log("\nQ3. How do you add and update object properties?");
console.log("Answer: Assign a value to a property name.");

person.role = "Tester";
person.city = "Boston";

console.log("After add and update:", person);

console.log("\nQ4. What is a method in an object?");
console.log("Answer: A method is a function stored as an object property.");

let user = {
    name: "Alice",
    greet: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(user.greet());

console.log("\nQ5. What is this inside an object method?");
console.log("Answer: this refers to the object that is calling the method.");

let testCase = {
    name: "Login test",
    status: "Passed",
    printStatus: function() {
        return `${this.name}: ${this.status}`;
    }
};

console.log(testCase.printStatus());

console.log("\nQ6. How do you create objects using a constructor function?");
console.log("Answer: Use a function with this and create objects using the new keyword.");

function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

let student1 = new Student("Priya", 88);
let student2 = new Student("Rahul", 92);

console.log(student1);
console.log(student2);

console.log("\nQ7. What does Object.create() do?");
console.log("Answer: Object.create() creates a new object using another object as its prototype.");

let baseUser = {
    role: "Learner",
    active: true
};

let newUser = Object.create(baseUser);
newUser.name = "Sneha";

console.log(newUser.name);
console.log(newUser.role);
console.log(newUser.active);

console.log("\nQ8. What is copy by reference in objects?");
console.log("Answer: When one object variable is assigned to another, both variables point to the same object.");

let obj1 = { name: "John" };
let obj2 = obj1;

console.log(obj1.name);
console.log(obj2.name);

obj2.name = "Jane";

console.log("obj1 after obj2 change:", obj1.name);
console.log("obj2 after change:", obj2.name);

console.log("\nQ9. How do you create a shallow copy of an object?");
console.log("Answer: Use Object.assign({}, objectName) or the spread operator.");

let originalUser = { name: "Jane", role: "Tester" };

let copyUsingAssign = Object.assign({}, originalUser);
copyUsingAssign.name = "Alice";

let copyUsingSpread = { ...originalUser };
copyUsingSpread.name = "David";

console.log("Original:", originalUser);
console.log("Copy using Object.assign:", copyUsingAssign);
console.log("Copy using spread:", copyUsingSpread);

console.log("\nQ10. What is a nested object?");
console.log("Answer: A nested object is an object inside another object.");

let employee = {
    name: "Eve",
    address: {
        street: "123 Main St",
        city: "Boston"
    },
    hobbies: ["reading", "swimming"]
};

console.log(employee.name);
console.log(employee.address.street);
console.log(employee.address.city);
console.log(employee.hobbies[0]);
console.log(employee.hobbies[1]);

console.log("\nQ11. What is object destructuring?");
console.log("Answer: Destructuring extracts object property values into variables.");

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell"
};

let { productName, price, brand } = product;

console.log(productName);
console.log(price);
console.log(brand);

console.log("\nQ12. Practical: Destructure a nested object.");

let order = {
    orderId: 101,
    customer: {
        customerName: "Amit",
        city: "Pune"
    },
    status: "Delivered"
};

let {
    orderId,
    customer: { customerName, city },
    status
} = order;

console.log(orderId);
console.log(customerName);
console.log(city);
console.log(status);

console.log("\nQ13. Practical: Find passed tests from an array of objects.");

let testCases = [
    { name: "Login", status: "Passed" },
    { name: "Payment", status: "Failed" },
    { name: "Search", status: "Passed" }
];

let passedTests = testCases.filter(function(test) {
    return test.status === "Passed";
});

console.log("Passed tests:", passedTests);
