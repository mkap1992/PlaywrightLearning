// IIFE stands for Immediately Invoked Function Expression.
// It is a function that runs immediately after it is created.

console.log("Example 1: Normal function IIFE");

(function() {
    console.log("Normal function IIFE runs immediately");
})();

console.log("\nExample 2: Arrow function IIFE");

(() => {
    console.log("Arrow function IIFE runs immediately");
})();

console.log("\nExample 3: IIFE with parameters");

(function(userName) {
    console.log(`Hello, ${userName}!`);
})("Alice");

console.log("\nExample 4: IIFE returning a value");

const total = (function(num1, num2) {
    return num1 + num2;
})(10, 20);

console.log("Total:", total);

console.log("\nExample 5: IIFE creates private scope");

(function() {
    const secretMessage = "This variable is private inside the IIFE";
    console.log(secretMessage);
})();

console.log("Outside IIFE, secretMessage is:", typeof secretMessage);

console.log("\nExample 6: Real use case - setup code");

const appConfig = (() => {
    const appName = "Playwright Learning";
    const version = "1.0.0";

    return {
        appName: appName,
        version: version
    };
})();

console.log("App name:", appConfig.appName);
console.log("Version:", appConfig.version);
