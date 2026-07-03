"use strict";
// ============================================
// METHOD OVERRIDING IN TYPESCRIPT
// Explained like you're a kid!
// ============================================
// WHAT IS METHOD OVERRIDING?
// Think of it like a RECIPE for making pancakes
// The basic recipe says: "Mix flour, eggs, milk"
// But YOU add your own twist: "I'll add chocolate chips!"
//
// Your recipe OVERRIDES (changes) the basic recipe
// But it's still a pancake recipe!
//
// METHOD OVERRIDING = Child class changes parent's method
// Benefits:
// - Customize parent behavior for your needs
// - Keep the same method name
// - Child does things its own way
var OverrideMethodsDemo;
(function (OverrideMethodsDemo) {
    // ==========================================
    // CONCEPT 1: Basic Method Overriding
    // ==========================================
    // Parent has a method, child changes it
    console.log("====== CONCEPT 1: Basic Override ======\n");
    // Parent class with a method
    class Animal {
        name;
        constructor(name) {
            this.name = name;
        }
        makeSound() {
            return this.name + " makes a sound";
        }
        eat() {
            return this.name + " is eating";
        }
    }
    // Child class OVERRIDES makeSound()
    class Dog extends Animal {
        // OVERRIDE the parent's makeSound()
        makeSound() {
            return this.name + " says: Woof! Woof!";
        }
    }
    // Another child OVERRIDES makeSound() differently
    class Cat extends Animal {
        // OVERRIDE with different behavior
        makeSound() {
            return this.name + " says: Meow!";
        }
    }
    const dog = new Dog("Rex");
    const cat = new Cat("Whiskers");
    console.log(dog.makeSound()); // Calls Dog's version ✅
    console.log(cat.makeSound()); // Calls Cat's version ✅
    console.log(dog.eat()); // Calls Animal's version (not overridden)
    // ==========================================
    // CONCEPT 2: Using 'super' to Call Parent Method
    // ==========================================
    // Access parent's version from child
    console.log("\n====== CONCEPT 2: Using super() ======\n");
    class Vehicle {
        brand;
        constructor(brand) {
            this.brand = brand;
        }
        start() {
            return this.brand + " is starting...";
        }
        stop() {
            return this.brand + " stopped";
        }
    }
    class Car extends Vehicle {
        doors;
        constructor(brand, doors) {
            super(brand); // Call parent constructor
            this.doors = doors;
        }
        // OVERRIDE start() but call parent's version too
        start() {
            const parentStart = super.start(); // Get parent version
            return parentStart + " with engine roaring!";
        }
    }
    const myCar = new Car("Toyota", 4);
    console.log(myCar.start()); // Combines parent + custom
    console.log(myCar.stop()); // Uses parent (not overridden)
    // ==========================================
    // CONCEPT 3: Multi-Level Overriding
    // ==========================================
    // Grandparent → Parent → Child (each overrides)
    console.log("\n====== CONCEPT 3: Multi-Level Override ======\n");
    class Person {
        name;
        constructor(name) {
            this.name = name;
        }
        introduce() {
            return "Hi, I am " + this.name;
        }
    }
    class Worker extends Person {
        job;
        constructor(name, job) {
            super(name);
            this.job = job;
        }
        // OVERRIDE introduce()
        introduce() {
            const parent = super.introduce(); // "Hi, I am..."
            return parent + " and I work as a " + this.job;
        }
    }
    class Manager extends Worker {
        team;
        constructor(name, job, team) {
            super(name, job);
            this.team = team;
        }
        // OVERRIDE introduce() again
        introduce() {
            const parent = super.introduce(); // Gets Worker's version
            return parent + ". I manage the " + this.team + " team";
        }
    }
    const person = new Person("Alice");
    const worker = new Worker("Bob", "Engineer");
    const manager = new Manager("Charlie", "Senior Engineer", "Backend");
    console.log(person.introduce());
    console.log(worker.introduce());
    console.log(manager.introduce());
    // ==========================================
    // CONCEPT 4: Overriding with Different Return Type
    // ==========================================
    console.log("\n====== CONCEPT 4: Override Return Types ======\n");
    class Shape {
        getInfo() {
            return "I am a shape";
        }
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        radius;
        constructor(radius) {
            super();
            this.radius = radius;
        }
        // OVERRIDE with same return type
        getInfo() {
            return "I am a circle with radius " + this.radius;
        }
        // OVERRIDE with specific calculation
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Square extends Shape {
        side;
        constructor(side) {
            super();
            this.side = side;
        }
        getInfo() {
            return "I am a square with side " + this.side;
        }
        getArea() {
            return this.side * this.side;
        }
    }
    const circle = new Circle(5);
    const square = new Square(4);
    console.log(circle.getInfo()); // Circle-specific
    console.log("Circle area:", circle.getArea().toFixed(2));
    console.log(square.getInfo()); // Square-specific
    console.log("Square area:", square.getArea());
    // ==========================================
    // REAL-WORLD: Bank Accounts
    // ==========================================
    console.log("\n====== REAL-WORLD: Bank Accounts ======\n");
    class BankAccount {
        owner;
        balance;
        constructor(owner, initialBalance) {
            this.owner = owner;
            this.balance = initialBalance;
        }
        deposit(amount) {
            this.balance += amount;
            return this.owner + " deposited $" + amount + ". Balance: $" + this.balance;
        }
        withdraw(amount) {
            if (amount > this.balance) {
                return "Insufficient funds";
            }
            this.balance -= amount;
            return this.owner + " withdrew $" + amount + ". Balance: $" + this.balance;
        }
        getInterest() {
            return 0;
        }
        getAccountInfo() {
            return this.owner + "'s Account: $" + this.balance;
        }
    }
    class SavingsAccount extends BankAccount {
        // OVERRIDE: Savings accounts get interest
        getInterest() {
            return this.balance * 0.05; // 5% interest
        }
        getAccountInfo() {
            const parent = super.getAccountInfo();
            const interest = this.getInterest();
            return parent + " (Interest earned: $" + interest.toFixed(2) + ")";
        }
    }
    class CheckingAccount extends BankAccount {
        monthlyFee;
        constructor(owner, initialBalance, monthlyFee) {
            super(owner, initialBalance);
            this.monthlyFee = monthlyFee;
        }
        // OVERRIDE: Checking accounts have no interest
        getInterest() {
            return 0; // No interest on checking
        }
        getAccountInfo() {
            const parent = super.getAccountInfo();
            return parent + " (Monthly fee: $" + this.monthlyFee + ")";
        }
    }
    const savings = new SavingsAccount("Alice", 1000);
    const checking = new CheckingAccount("Bob", 500, 5);
    console.log(savings.getAccountInfo());
    console.log("Interest earned:", "$" + savings.getInterest().toFixed(2));
    console.log(checking.getAccountInfo());
    console.log("Interest earned:", "$" + checking.getInterest());
    // ==========================================
    // REAL-WORLD: Payment Methods
    // ==========================================
    console.log("\n====== REAL-WORLD: Payment Methods ======\n");
    class Payment {
        amount;
        constructor(amount) {
            this.amount = amount;
        }
        process() {
            return "Processing payment: $" + this.amount;
        }
        getProcessingFee() {
            return 0;
        }
        getTotal() {
            return this.amount + this.getProcessingFee();
        }
    }
    class CreditCardPayment extends Payment {
        // OVERRIDE: Credit card has processing fee
        getProcessingFee() {
            return this.amount * 0.02; // 2% fee
        }
        process() {
            const parent = super.process();
            const fee = this.getProcessingFee();
            return parent + " + $" + fee.toFixed(2) + " fee = Total: $" + this.getTotal().toFixed(2);
        }
    }
    class CashPayment extends Payment {
        // OVERRIDE: Cash has no fee
        getProcessingFee() {
            return 0; // No fee for cash
        }
        process() {
            return super.process() + " (No fees)";
        }
    }
    class BankTransferPayment extends Payment {
        // OVERRIDE: Bank transfer has lower fee
        getProcessingFee() {
            return 0.50; // Fixed 50 cents
        }
        process() {
            const parent = super.process();
            const fee = this.getProcessingFee();
            return parent + " + $" + fee.toFixed(2) + " fee = Total: $" + this.getTotal().toFixed(2);
        }
    }
    const creditCard = new CreditCardPayment(100);
    const cash = new CashPayment(100);
    const bankTransfer = new BankTransferPayment(100);
    console.log(creditCard.process());
    console.log(cash.process());
    console.log(bankTransfer.process());
    // ==========================================
    // REAL-WORLD: Different Employee Types
    // ==========================================
    console.log("\n====== REAL-WORLD: Employee Bonuses ======\n");
    class Employee {
        name;
        salary;
        constructor(name, salary) {
            this.name = name;
            this.salary = salary;
        }
        getBonus() {
            return 0; // Base: no bonus
        }
        getSalaryWithBonus() {
            return this.salary + this.getBonus();
        }
        getDetails() {
            return this.name + " - Salary: $" + this.salary + ", Bonus: $" + this.getBonus();
        }
    }
    class ManagerEmployee extends Employee {
        // OVERRIDE: Managers get bonus
        getBonus() {
            return this.salary * 0.15; // 15% bonus
        }
        getDetails() {
            const parent = super.getDetails();
            return parent + " (Total: $" + this.getSalaryWithBonus().toFixed(2) + ")";
        }
    }
    class Developer extends Employee {
        // OVERRIDE: Developers get different bonus
        getBonus() {
            return this.salary * 0.10; // 10% bonus
        }
        getDetails() {
            const parent = super.getDetails();
            return parent + " (Total: $" + this.getSalaryWithBonus().toFixed(2) + ")";
        }
    }
    class Intern extends Employee {
        // OVERRIDE: Interns get no bonus
        getBonus() {
            return 0; // Interns don't get bonus
        }
        getDetails() {
            return this.name + " - Salary: $" + this.salary + " (No bonus)";
        }
    }
    const managerEmp = new ManagerEmployee("Alice", 5000);
    const developer = new Developer("Bob", 4000);
    const intern = new Intern("Charlie", 1000);
    console.log(managerEmp.getDetails());
    console.log(developer.getDetails());
    console.log(intern.getDetails());
    // ==========================================
    // SUMMARY
    // ==========================================
    console.log("\n====== METHOD OVERRIDE SUMMARY ======\n");
    console.log("WHAT IS METHOD OVERRIDING?");
    console.log("  → Child class changes parent's method\n");
    console.log("WHY OVERRIDE?");
    console.log("  1. Customize behavior for child");
    console.log("  2. Keep same method name");
    console.log("  3. Different logic per child\n");
    console.log("KEY CONCEPTS:");
    console.log("  • Child REPLACES parent method");
    console.log("  • Use 'super' to call parent version");
    console.log("  • Same method name, different behavior\n");
    console.log("REAL-WORLD EXAMPLES:");
    console.log("  • Animal: Dog barks, Cat meows");
    console.log("  • Accounts: Savings (5% interest), Checking (no interest)");
    console.log("  • Payments: Credit card (2% fee), Cash (no fee)");
    console.log("  • Employees: Manager (15% bonus), Dev (10% bonus), Intern (no bonus)");
})(OverrideMethodsDemo || (OverrideMethodsDemo = {}));
