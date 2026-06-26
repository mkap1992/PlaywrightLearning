"use strict";
// ============================================
// INTERFACE RULES IN TYPESCRIPT
// Explained like you're a kid!
// ============================================
// WHAT IS AN INTERFACE?
// Think of it like a SCHOOL RULEBOOK
// The rulebook says: "Every student MUST have:
//   - A name
//   - A roll number
//   - Ability to study
//   - Ability to attend class"
//
// If you don't follow ALL rules → ❌ TypeScript gives an ERROR!
// If you follow ALL rules       → ✅ TypeScript is happy!
var InterfaceRules;
(function (InterfaceRules) {
    // ==========================================
    // RULE 1: Interface defines WHAT, not HOW
    // ==========================================
    // Interface only says WHAT you must have
    // It does NOT say HOW to do it
    // Each class decides HOW
    console.log("====== RULE 1: Interface says WHAT, not HOW ======\n");
    // Dog FOLLOWS the IAnimal rulebook ✅
    class Dog {
        name = "Rex";
        sound = "Woof";
        makeSound() {
            return this.name + " says " + this.sound + "!";
        }
    }
    // Cat FOLLOWS the IAnimal rulebook ✅
    class Cat {
        name = "Whiskers";
        sound = "Meow";
        makeSound() {
            return this.name + " says " + this.sound + "!";
        }
    }
    // ❌ BAD - if you remove makeSound(), TypeScript ERRORS:
    // class BadAnimal implements IAnimal {
    //   name: string = "test";
    //   sound: string = "...";
    //   // missing makeSound()! ← ERROR!
    // }
    console.log(new Dog().makeSound()); // Rex says Woof!
    console.log(new Cat().makeSound()); // Whiskers says Meow!
    // ==========================================
    // RULE 2: ALL properties MUST be present
    // ==========================================
    // If interface has 3 properties, class MUST have all 3
    // Missing even ONE = ❌ ERROR
    console.log("\n====== RULE 2: ALL properties must be present ======\n");
    class GoodStudent {
        name;
        age;
        grade;
        constructor(name, age, grade) {
            this.name = name;
            this.age = age;
            this.grade = grade;
        }
        study() {
            return this.name + " (Grade " + this.grade + ") is studying!";
        }
    }
    const student1 = new GoodStudent("Alice", 10, "5th");
    const student2 = new GoodStudent("Bob", 12, "7th");
    console.log(student1.study());
    console.log(student2.study());
    // ==========================================
    // RULE 3: Optional properties use "?"
    // ==========================================
    // Sometimes a property is NOT required
    // Add "?" to make it optional
    console.log("\n====== RULE 3: Optional properties with '?' ======\n");
    // ✅ Works - has required fields only
    const emp1 = {
        name: "John",
        salary: 50000
    };
    // ✅ Also works - has optional fields too
    const emp2 = {
        name: "Jane",
        salary: 70000,
        department: "Engineering",
        bonus: 5000
    };
    console.log("Employee 1:", emp1.name, "- $" + emp1.salary);
    console.log("Employee 2:", emp2.name, "- $" + emp2.salary, "- Bonus: $" + emp2.bonus);
    // ==========================================
    // RULE 4: readonly properties CANNOT change
    // ==========================================
    // Like your birthday - it never changes!
    // readonly = set once, never change again
    console.log("\n====== RULE 4: readonly properties ======\n");
    const myPassport = {
        passportNumber: "P1234567",
        dateOfBirth: "01-01-2000",
        name: "Alice Smith",
        expiryDate: "2030-01-01"
    };
    // ✅ Can change name and expiry
    myPassport.name = "Alice Johnson";
    myPassport.expiryDate = "2035-01-01";
    // ❌ Cannot change passport number or DOB
    // myPassport.passportNumber = "P9999999"; // ERROR!
    // myPassport.dateOfBirth = "02-02-2002";  // ERROR!
    console.log("Passport:", myPassport.passportNumber);
    console.log("Name:", myPassport.name);
    console.log("DOB:", myPassport.dateOfBirth);
    // ==========================================
    // RULE 5: A class can implement MULTIPLE interfaces
    // ==========================================
    // A Duck can SWIM and FLY - so it follows BOTH rulebooks!
    console.log("\n====== RULE 5: Multiple interfaces ======\n");
    // Duck follows THREE rulebooks at once!
    class Duck {
        name;
        constructor(name) { this.name = name; }
        swim() { return this.name + " is swimming!"; }
        fly() { return this.name + " is flying!"; }
    }
    // Human follows TWO rulebooks
    class Human {
        name;
        constructor(name) { this.name = name; }
        swim() { return this.name + " is swimming!"; }
        run() { return this.name + " is running!"; }
    }
    const duck = new Duck("Donald");
    console.log(duck.swim());
    console.log(duck.fly());
    const human = new Human("Alice");
    console.log(human.swim());
    console.log(human.run());
    // ==========================================
    // RULE 6: Interface can extend another interface
    // ==========================================
    // Like a VIP rulebook that INCLUDES the basic rulebook
    // AND adds more rules on top
    console.log("\n====== RULE 6: Interface extending Interface ======\n");
    class Tesla {
        brand;
        speed;
        batteryLevel;
        constructor(brand, speed, battery) {
            this.brand = brand;
            this.speed = speed;
            this.batteryLevel = battery;
        }
        // From IVehicle
        move() { return this.brand + " moving at " + this.speed + " km/h"; }
        // From IElectricVehicle
        charge() { return this.brand + " charging... Battery: " + this.batteryLevel + "%"; }
    }
    const tesla = new Tesla("Tesla Model 3", 250, 80);
    console.log(tesla.move());
    console.log(tesla.charge());
    // ==========================================
    // RULE 7: Interface for function types
    // ==========================================
    // You can define what a FUNCTION should look like
    console.log("\n====== RULE 7: Interface for functions ======\n");
    class SimpleCalculator {
        add(a, b) { return a + b; }
        subtract(a, b) { return a - b; }
        multiply(a, b) { return a * b; }
    }
    const calc = new SimpleCalculator();
    console.log("5 + 3 =", calc.add(5, 3));
    console.log("5 - 3 =", calc.subtract(5, 3));
    console.log("5 x 3 =", calc.multiply(5, 3));
    // ==========================================
    // REAL-WORLD: WebDriver like Selenium!
    // ==========================================
    // Just like WebDriver in Selenium is an interface
    // ChromeDriver, FirefoxDriver implement it
    console.log("\n====== REAL-WORLD: WebDriver Like Selenium ======\n");
    // ChromeDriver follows IWebDriver rules ✅
    class ChromeDriver {
        browserName = "Chrome";
        get(url) {
            console.log("[Chrome] Opening: " + url);
        }
        findElement(selector) {
            return "[Chrome] Found: " + selector;
        }
        getTitle() {
            return "[Chrome] Page Title";
        }
        quit() {
            console.log("[Chrome] Browser closed");
        }
    }
    // FirefoxDriver follows IWebDriver rules ✅
    class FirefoxDriver {
        browserName = "Firefox";
        get(url) {
            console.log("[Firefox] Opening: " + url);
        }
        findElement(selector) {
            return "[Firefox] Found: " + selector;
        }
        getTitle() {
            return "[Firefox] Page Title";
        }
        quit() {
            console.log("[Firefox] Browser closed");
        }
    }
    // Test function works with ANY driver! (just like Selenium)
    function runTest(driver) {
        driver.get("https://google.com");
        console.log(driver.findElement("#search-box"));
        console.log("Title:", driver.getTitle());
        driver.quit();
    }
    console.log("--- Running test on Chrome ---");
    runTest(new ChromeDriver());
    console.log("\n--- Running test on Firefox ---");
    runTest(new FirefoxDriver());
    // ==========================================
    // SUMMARY OF ALL RULES
    // ==========================================
    console.log("\n====== INTERFACE RULES SUMMARY ======\n");
    console.log("RULE 1: Interface says WHAT, not HOW");
    console.log("        → Class decides HOW to do it\n");
    console.log("RULE 2: ALL properties/methods MUST be present");
    console.log("        → Missing one = TypeScript ERROR\n");
    console.log("RULE 3: Optional with '?'");
    console.log("        → department?: string (can skip)\n");
    console.log("RULE 4: readonly = set once, never change");
    console.log("        → readonly passportNumber: string\n");
    console.log("RULE 5: Class can implement MULTIPLE interfaces");
    console.log("        → class Duck implements ISwimmable, IFlyable\n");
    console.log("RULE 6: Interface can extend another interface");
    console.log("        → interface IElectricVehicle extends IVehicle\n");
    console.log("RULE 7: Interface can define function shapes");
    console.log("        → add(a: number, b: number): number\n");
    console.log("LIKE SELENIUM:");
    console.log("        → WebDriver = Interface");
    console.log("        → ChromeDriver = class implements WebDriver");
    console.log("        → Swap browser without changing test code!");
})(InterfaceRules || (InterfaceRules = {}));
