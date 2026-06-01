// Closure in JavaScript
// A closure is created when an inner function remembers variables
// from its outer function even after the outer function has finished running.

console.log("Example 1: Basic closure");

function outerFunction() {
    const message = "Hello from outer function";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure();

console.log("\nExample 2: Counter using closure");

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log("Counter:", counter());
console.log("Counter:", counter());
console.log("Counter:", counter());

console.log("\nExample 3: Private variable using closure");

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance = balance + amount;
            return balance;
        },
        withdraw: function(amount) {
            balance = balance - amount;
            return balance;
        },
        checkBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

console.log("Initial Balance:", account.checkBalance());
console.log("After Deposit:", account.deposit(500));
console.log("After Withdraw:", account.withdraw(300));
console.log("Direct balance access:", account.balance);

console.log("\nExample 4: Interview style explanation");
console.log("Closure means inner function remembers outer function variables.");
console.log("It is useful for data privacy, counters, callbacks, and function factories.");
