"use strict";
// ============================================
// INTERFACES AND INHERITANCE IN TYPESCRIPT
// Explained for kids!
// ============================================
var InheritanceDemo;
(function (InheritanceDemo) {
    // ==========================================
    // PART 1: INHERITANCE - "Child gets from Parent"
    // ==========================================
    class Animal {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        eat() { return this.name + " is eating"; }
        sleep() { return this.name + " is sleeping"; }
        makeSound() { return this.name + " makes a sound"; }
    }
    class Dog extends Animal {
        breed;
        constructor(name, age, breed) {
            super(name, age);
            this.breed = breed;
        }
        makeSound() { return this.name + " says: Woof! Woof!"; }
        fetch() { return this.name + " fetches the ball!"; }
    }
    class Cat extends Animal {
        indoor;
        constructor(name, age, indoor) {
            super(name, age);
            this.indoor = indoor;
        }
        makeSound() { return this.name + " says: Meow!"; }
        purr() { return this.name + " purrs..."; }
    }
    class Bird extends Animal {
        canFly;
        constructor(name, age, canFly) {
            super(name, age);
            this.canFly = canFly;
        }
        makeSound() { return this.name + " says: Tweet! Tweet!"; }
        fly() {
            return this.canFly ? this.name + " is flying high!" : this.name + " cannot fly";
        }
    }
    console.log("========== PART 1: INHERITANCE ==========\n");
    const dog = new Dog("Rex", 3, "Labrador");
    const cat = new Cat("Whiskers", 2, true);
    const bird = new Bird("Tweety", 1, true);
    console.log("--- Dog ---");
    console.log(dog.eat()); // Inherited from Animal
    console.log(dog.sleep()); // Inherited from Animal
    console.log(dog.makeSound()); // Overridden in Dog
    console.log(dog.fetch()); // Only in Dog
    console.log("\n--- Cat ---");
    console.log(cat.eat()); // Inherited from Animal
    console.log(cat.makeSound()); // Overridden in Cat
    console.log(cat.purr()); // Only in Cat
    console.log("\n--- Bird ---");
    console.log(bird.eat()); // Inherited from Animal
    console.log(bird.makeSound()); // Overridden in Bird
    console.log(bird.fly()); // Only in Bird
    // ==========================================
    // PART 2: MULTI-LEVEL INHERITANCE
    // Grandparent → Parent → Child
    // ==========================================
    console.log("\n========== PART 2: MULTI-LEVEL INHERITANCE ==========\n");
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        introduce() {
            return "My name is " + this.name + " and I am " + this.age + " years old";
        }
    }
    class Student extends Person {
        grade;
        school;
        constructor(name, age, grade, school) {
            super(name, age);
            this.grade = grade;
            this.school = school;
        }
        study() { return this.name + " is studying in grade " + this.grade; }
        introduce() {
            return super.introduce() + ". I study at " + this.school;
        }
    }
    class CollegeStudent extends Student {
        major;
        constructor(name, age, major, university) {
            super(name, age, "College", university);
            this.major = major;
        }
        research() { return this.name + " is researching " + this.major; }
        introduce() {
            return super.introduce() + ". My major is " + this.major;
        }
    }
    const person = new Person("Alice", 30);
    const student = new Student("Bob", 15, "10th", "City High School");
    const collegeStudent = new CollegeStudent("Charlie", 20, "Computer Science", "MIT");
    console.log(person.introduce());
    console.log(student.introduce());
    console.log(student.study());
    console.log(collegeStudent.introduce());
    console.log(collegeStudent.research());
    // ==========================================
    // PART 3: INTERFACE - "A Rulebook / Contract"
    // ==========================================
    console.log("\n========== PART 3: INTERFACE ==========\n");
    class Fish {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        makeSound() { return this.name + " blows bubbles"; }
        eat() { return this.name + " eats fish food"; }
        swim() { return this.name + " swims gracefully"; }
    }
    class Duck {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        makeSound() { return this.name + " says: Quack!"; }
        eat() { return this.name + " eats bread crumbs"; }
        swim() { return this.name + " swims in the pond"; }
        fly() { return this.name + " flies south for winter"; }
    }
    const fish = new Fish("Nemo", 2);
    const duck = new Duck("Donald", 3);
    console.log("--- Fish (IAnimal + ISwimmable) ---");
    console.log(fish.makeSound());
    console.log(fish.eat());
    console.log(fish.swim());
    console.log("\n--- Duck (IAnimal + ISwimmable + IFlyable) ---");
    console.log(duck.makeSound());
    console.log(duck.eat());
    console.log(duck.swim());
    console.log(duck.fly());
    // ==========================================
    // PART 4: INTERFACE INHERITANCE
    // ==========================================
    console.log("\n========== PART 4: INTERFACE INHERITANCE ==========\n");
    class Circle {
        color;
        radius;
        constructor(color, radius) {
            this.color = color;
            this.radius = radius;
        }
        getArea() { return Math.PI * this.radius * this.radius; }
    }
    class Cube {
        color;
        side;
        depth;
        constructor(color, side) {
            this.color = color;
            this.side = side;
            this.depth = side;
        }
        getArea() { return 6 * this.side * this.side; }
        getVolume() { return this.side * this.side * this.side; }
    }
    const circle = new Circle("red", 5);
    const cube = new Cube("blue", 4);
    console.log("--- Circle (2D Shape) ---");
    console.log("Color: " + circle.color);
    console.log("Area: " + circle.getArea().toFixed(2));
    console.log("\n--- Cube (3D Shape) ---");
    console.log("Color: " + cube.color);
    console.log("Surface Area: " + cube.getArea());
    console.log("Volume: " + cube.getVolume());
    // ==========================================
    // PART 5: ABSTRACT CLASS
    // ==========================================
    console.log("\n========== PART 5: ABSTRACT CLASS ==========\n");
    class Vehicle {
        brand;
        speed;
        constructor(brand, speed) {
            this.brand = brand;
            this.speed = speed;
        }
        getInfo() { return this.brand + " goes " + this.speed + " km/h"; }
    }
    class PetrolCar extends Vehicle {
        constructor(brand, speed) { super(brand, speed); }
        startEngine() { return this.brand + " petrol engine: VROOM!"; }
        fuelType() { return "Petrol"; }
    }
    class ElectricCar extends Vehicle {
        batteryLevel;
        constructor(brand, speed, batteryLevel) {
            super(brand, speed);
            this.batteryLevel = batteryLevel;
        }
        startEngine() { return this.brand + " electric motor: Whirrrr..."; }
        fuelType() { return "Electric (Battery: " + this.batteryLevel + "%)"; }
    }
    class Bicycle extends Vehicle {
        gears;
        constructor(brand, speed, gears) {
            super(brand, speed);
            this.gears = gears;
        }
        startEngine() { return this.brand + " pedaling: Whoosh!"; }
        fuelType() { return "Human power (" + this.gears + " gears)"; }
    }
    const vehicles = [
        new PetrolCar("Toyota", 180),
        new ElectricCar("Tesla", 250, 90),
        new Bicycle("Trek", 30, 21)
    ];
    vehicles.forEach(v => {
        console.log(v.startEngine());
        console.log(v.getInfo());
        console.log("Fuel: " + v.fuelType() + "\n");
    });
    // ==========================================
    // PART 6: REAL-WORLD - PAYMENT SYSTEM
    // ==========================================
    console.log("========== PART 6: REAL-WORLD PAYMENT SYSTEM ==========\n");
    class BasePayment {
        providerName;
        constructor(providerName) { this.providerName = providerName; }
        process(amount) { return this.providerName + " processing $" + amount; }
        refund(transactionId) { return this.providerName + " refunding " + transactionId; }
        getStatus(transactionId) { return this.providerName + " status: " + transactionId + " - SUCCESS"; }
    }
    class PayPal extends BasePayment {
        email;
        constructor(email) { super("PayPal"); this.email = email; }
        process(amount) { return "PayPal charged $" + amount + " from " + this.email; }
    }
    class Stripe extends BasePayment {
        cardLast4;
        constructor(cardLast4) { super("Stripe"); this.cardLast4 = cardLast4; }
        process(amount) { return "Stripe charged $" + amount + " from card ending " + this.cardLast4; }
    }
    class CreditCard extends BasePayment {
        cardNumber;
        constructor(cardNumber) { super("CreditCard"); this.cardNumber = cardNumber; }
        process(amount) { return "Credit card charged $" + amount + " from card " + this.cardNumber; }
    }
    function processPayment(payment, amount) {
        console.log(payment.process(amount));
        console.log(payment.getStatus("TXN123") + "\n");
    }
    processPayment(new PayPal("user@email.com"), 50);
    processPayment(new Stripe("4242"), 100);
    processPayment(new CreditCard("**** **** **** 9999"), 75);
    // ==========================================
    // SUMMARY
    // ==========================================
    console.log("========== SUMMARY ==========\n");
    console.log("INHERITANCE (extends):  Child gets parent methods for FREE");
    console.log("INTERFACE (implements): Class MUST follow the rulebook");
    console.log("ABSTRACT CLASS:         Template — child fills in the blanks\n");
    console.log("WHEN TO USE:");
    console.log("  extends    → Dog IS an Animal");
    console.log("  implements → Car MUST follow IVehicle contract");
    console.log("  abstract   → Vehicle is a base template");
})(InheritanceDemo || (InheritanceDemo = {}));
