// ============================================
// INTERFACES AND INHERITANCE IN TYPESCRIPT
// Explained for kids!
// ============================================

namespace InheritanceDemo {

  // ==========================================
  // PART 1: INHERITANCE - "Child gets from Parent"
  // ==========================================

  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    eat(): string { return this.name + " is eating"; }
    sleep(): string { return this.name + " is sleeping"; }
    makeSound(): string { return this.name + " makes a sound"; }
  }

  class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, breed: string) {
      super(name, age);
      this.breed = breed;
    }
    makeSound(): string { return this.name + " says: Woof! Woof!"; }
    fetch(): string { return this.name + " fetches the ball!"; }
  }

  class Cat extends Animal {
    indoor: boolean;
    constructor(name: string, age: number, indoor: boolean) {
      super(name, age);
      this.indoor = indoor;
    }
    makeSound(): string { return this.name + " says: Meow!"; }
    purr(): string { return this.name + " purrs..."; }
  }

  class Bird extends Animal {
    canFly: boolean;
    constructor(name: string, age: number, canFly: boolean) {
      super(name, age);
      this.canFly = canFly;
    }
    makeSound(): string { return this.name + " says: Tweet! Tweet!"; }
    fly(): string {
      return this.canFly ? this.name + " is flying high!" : this.name + " cannot fly";
    }
  }

  console.log("========== PART 1: INHERITANCE ==========\n");

  const dog = new Dog("Rex", 3, "Labrador");
  const cat = new Cat("Whiskers", 2, true);
  const bird = new Bird("Tweety", 1, true);

  console.log("--- Dog ---");
  console.log(dog.eat());        // Inherited from Animal
  console.log(dog.sleep());      // Inherited from Animal
  console.log(dog.makeSound());  // Overridden in Dog
  console.log(dog.fetch());      // Only in Dog

  console.log("\n--- Cat ---");
  console.log(cat.eat());        // Inherited from Animal
  console.log(cat.makeSound());  // Overridden in Cat
  console.log(cat.purr());       // Only in Cat

  console.log("\n--- Bird ---");
  console.log(bird.eat());       // Inherited from Animal
  console.log(bird.makeSound()); // Overridden in Bird
  console.log(bird.fly());       // Only in Bird

  // ==========================================
  // PART 2: MULTI-LEVEL INHERITANCE
  // Grandparent → Parent → Child
  // ==========================================

  console.log("\n========== PART 2: MULTI-LEVEL INHERITANCE ==========\n");

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    introduce(): string {
      return "My name is " + this.name + " and I am " + this.age + " years old";
    }
  }

  class Student extends Person {
    grade: string;
    school: string;
    constructor(name: string, age: number, grade: string, school: string) {
      super(name, age);
      this.grade = grade;
      this.school = school;
    }
    study(): string { return this.name + " is studying in grade " + this.grade; }
    introduce(): string {
      return super.introduce() + ". I study at " + this.school;
    }
  }

  class CollegeStudent extends Student {
    major: string;
    constructor(name: string, age: number, major: string, university: string) {
      super(name, age, "College", university);
      this.major = major;
    }
    research(): string { return this.name + " is researching " + this.major; }
    introduce(): string {
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

  interface IAnimal {
    name: string;
    age: number;
    makeSound(): string;
    eat(): string;
  }

  interface ISwimmable { swim(): string; }
  interface IFlyable   { fly(): string;  }

  class Fish implements IAnimal, ISwimmable {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    makeSound(): string { return this.name + " blows bubbles"; }
    eat(): string       { return this.name + " eats fish food"; }
    swim(): string      { return this.name + " swims gracefully"; }
  }

  class Duck implements IAnimal, ISwimmable, IFlyable {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    makeSound(): string { return this.name + " says: Quack!"; }
    eat(): string       { return this.name + " eats bread crumbs"; }
    swim(): string      { return this.name + " swims in the pond"; }
    fly(): string       { return this.name + " flies south for winter"; }
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

  interface IShape {
    color: string;
    getArea(): number;
  }

  interface IShape3D extends IShape {
    depth: number;
    getVolume(): number;
  }

  class Circle implements IShape {
    color: string;
    radius: number;
    constructor(color: string, radius: number) {
      this.color = color;
      this.radius = radius;
    }
    getArea(): number { return Math.PI * this.radius * this.radius; }
  }

  class Cube implements IShape3D {
    color: string;
    side: number;
    depth: number;
    constructor(color: string, side: number) {
      this.color = color;
      this.side = side;
      this.depth = side;
    }
    getArea(): number   { return 6 * this.side * this.side; }
    getVolume(): number { return this.side * this.side * this.side; }
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

  abstract class Vehicle {
    brand: string;
    speed: number;
    constructor(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
    }
    getInfo(): string { return this.brand + " goes " + this.speed + " km/h"; }
    abstract startEngine(): string;
    abstract fuelType(): string;
  }

  class PetrolCar extends Vehicle {
    constructor(brand: string, speed: number) { super(brand, speed); }
    startEngine(): string { return this.brand + " petrol engine: VROOM!"; }
    fuelType(): string    { return "Petrol"; }
  }

  class ElectricCar extends Vehicle {
    batteryLevel: number;
    constructor(brand: string, speed: number, batteryLevel: number) {
      super(brand, speed);
      this.batteryLevel = batteryLevel;
    }
    startEngine(): string { return this.brand + " electric motor: Whirrrr..."; }
    fuelType(): string    { return "Electric (Battery: " + this.batteryLevel + "%)"; }
  }

  class Bicycle extends Vehicle {
    gears: number;
    constructor(brand: string, speed: number, gears: number) {
      super(brand, speed);
      this.gears = gears;
    }
    startEngine(): string { return this.brand + " pedaling: Whoosh!"; }
    fuelType(): string    { return "Human power (" + this.gears + " gears)"; }
  }

  const vehicles: Vehicle[] = [
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

  interface IPayment {
    process(amount: number): string;
    refund(transactionId: string): string;
    getStatus(transactionId: string): string;
  }

  class BasePayment implements IPayment {
    providerName: string;
    constructor(providerName: string) { this.providerName = providerName; }
    process(amount: number): string         { return this.providerName + " processing $" + amount; }
    refund(transactionId: string): string   { return this.providerName + " refunding " + transactionId; }
    getStatus(transactionId: string): string { return this.providerName + " status: " + transactionId + " - SUCCESS"; }
  }

  class PayPal extends BasePayment {
    email: string;
    constructor(email: string) { super("PayPal"); this.email = email; }
    process(amount: number): string { return "PayPal charged $" + amount + " from " + this.email; }
  }

  class Stripe extends BasePayment {
    cardLast4: string;
    constructor(cardLast4: string) { super("Stripe"); this.cardLast4 = cardLast4; }
    process(amount: number): string { return "Stripe charged $" + amount + " from card ending " + this.cardLast4; }
  }

  class CreditCard extends BasePayment {
    cardNumber: string;
    constructor(cardNumber: string) { super("CreditCard"); this.cardNumber = cardNumber; }
    process(amount: number): string { return "Credit card charged $" + amount + " from card " + this.cardNumber; }
  }

  function processPayment(payment: IPayment, amount: number): void {
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

}
