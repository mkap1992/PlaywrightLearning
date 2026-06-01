// Chapter 02 Interview Questions: Declarations, Hoisting, and Scope
// Theory questions plus practical examples.

console.log("Chapter 02: Declarations Interview Questions\n");

console.log("Q1. What is hoisting?");
console.log("Answer: Hoisting is JavaScript behavior where declarations are processed before code execution.");

console.log("var before declaration:", hoistedName);
var hoistedName = "JavaScript";
console.log("var after assignment:", hoistedName);

console.log("\nQ2. What happens when let is accessed before declaration?");
console.log("Answer: It gives ReferenceError because let stays in the temporal dead zone before declaration.");

try {
    eval("console.log(score); let score = 90;");
} catch (error) {
    console.log("let error:", error.name);
}

console.log("\nQ3. What is the temporal dead zone?");
console.log("Answer: The temporal dead zone is the time between entering scope and the let/const declaration line.");

console.log("\nQ4. What is block scope?");
console.log("Answer: Variables declared with let and const are available only inside their block.");

if (true) {
    let blockMessage = "Inside block";
    const blockStatus = "Available";
    console.log(blockMessage, blockStatus);
}

console.log("Outside block, blockMessage is:", typeof blockMessage);

console.log("\nQ5. What is function scope?");
console.log("Answer: var is scoped to the nearest function, not to an if block.");

function showVarScope() {
    if (true) {
        var message = "var is function scoped";
    }

    return message;
}

console.log(showVarScope());

console.log("\nQ6. Practical: Predict output of var inside loop.");

for (var index = 0; index < 3; index++) {
    console.log("Inside loop index:", index);
}

console.log("Outside loop index with var:", index);

console.log("\nQ7. Practical: Fix scope issue using let.");

for (let count = 0; count < 3; count++) {
    console.log("Inside loop count:", count);
}

console.log("Outside loop count is:", typeof count);

console.log("\nQ8. Can let be re-declared in the same scope?");
console.log("Answer: No. let cannot be re-declared in the same scope.");

try {
    eval("let browser = 'Chrome'; let browser = 'Firefox';");
} catch (error) {
    console.log("Re-declaration error:", error.name);
}
