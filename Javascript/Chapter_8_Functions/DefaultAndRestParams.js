// Default parameters and rest parameters in JavaScript

// Default parameter:
// A default value is used when an argument is not passed or is undefined.
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

console.log("Example 1: Default parameter");
greetUser("Alice");
greetUser();

// Default parameters with multiple values
function createUser(name = "Unknown", role = "Student", city = "Pune") {
    console.log(`Name: ${name}, Role: ${role}, City: ${city}`);
}

console.log("\nExample 2: Multiple default parameters");
createUser("Rahul", "Tester", "Mumbai");
createUser("Priya");
createUser();

// Rest parameter:
// The rest parameter collects multiple arguments into one array.
function addNumbers(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
}

console.log("\nExample 3: Rest parameter");
console.log("Total:", addNumbers(10, 20));
console.log("Total:", addNumbers(10, 20, 30, 40));

// Normal parameter with rest parameter
// Rest parameter must always be the last parameter.
function showStudentMarks(studentName, ...marks) {
    console.log(`Student Name: ${studentName}`);
    console.log("Marks:", marks);
    console.log("Total Marks:", addNumbers(...marks));
}

console.log("\nExample 4: Normal parameter with rest parameter");
showStudentMarks("Amit", 80, 75, 90);

// Default parameter and rest parameter together
function orderFood(customerName = "Guest", ...items) {
    console.log(`Customer Name: ${customerName}`);
    console.log("Ordered Items:", items);
}

console.log("\nExample 5: Default parameter and rest parameter together");
orderFood("Sneha", "Pizza", "Pasta", "Cold Drink");
orderFood();
