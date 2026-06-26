// ============================================
// Inheritance in JavaScript
// ============================================

// Inheritance allows a child class to inherit properties and methods from
// a parent class. It promotes code reuse and establishes hierarchical relationships.

// Key Terms:
// - Parent/Base Class: Contains shared code
// - Child/Derived Class: Inherits from parent using 'extends'
// - super(): Calls parent class constructor or methods
// - Method Overriding: Child class redefines parent method

// ============================================
// Example 1: Basic Inheritance
// ============================================

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  eat() {
    return `${this.name} is eating`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }

  describe() {
    return `${this.name} is a ${this.species}`;
  }
}

class Dog extends Animal {
  constructor(name, species, breed) {
    super(name, species); // Call parent constructor
    this.breed = breed;
  }

  // Method Overriding — Dog has its own bark method
  speak() {
    return `${this.name} barks!`;
  }
}

class Cat extends Animal {
  constructor(name, species, color) {
    super(name, species);
    this.color = color;
  }

  speak() {
    return `${this.name} meows!`;
  }
}

const dog = new Dog("Rex", "Canine", "Golden Retriever");
const cat = new Cat("Whiskers", "Feline", "Orange");

console.log("--- Example 1: Basic Inheritance ---");
console.log(dog.describe()); // "Rex is a Canine"
console.log(dog.eat()); // "Rex is eating" (inherited from Animal)
console.log(dog.speak()); // "Rex barks!" (Dog's own method)
console.log(cat.speak()); // "Whiskers meows!" (Cat's own method)

// ============================================
// Example 2: Multi-level Inheritance
// ============================================

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    return `${this.make} ${this.model} engine started`;
  }
}

class Car extends Vehicle {
  constructor(make, model, doors) {
    super(make, model);
    this.doors = doors;
  }

  openTrunk() {
    return "Trunk opened";
  }
}

class ElectricCar extends Car {
  constructor(make, model, doors, batteryCapacity) {
    super(make, model, doors);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    return `${this.make} ${this.model} is charging (${this.batteryCapacity} kWh battery)`;
  }

  // Override parent method
  startEngine() {
    return `${this.make} ${this.model} is powered up (electric)`;
  }
}

const tesla = new ElectricCar("Tesla", "Model 3", 4, 75);

console.log("\n--- Example 2: Multi-level Inheritance ---");
console.log(tesla.startEngine()); // Overridden method
console.log(tesla.openTrunk()); // Inherited from Car
console.log(tesla.charge()); // Own method

// ============================================
// Example 3: Method Overriding with super
// ============================================

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return `${this.name} earns $${this.salary}`;
  }

  getDetails() {
    return `Employee: ${this.name}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  // Override with super — calling parent's method and adding more
  getDetails() {
    const parentDetails = super.getDetails();
    return `${parentDetails}, Department: ${this.department}`;
  }

  approveExpense(amount) {
    return `${this.name} approved $${amount}`;
  }
}

const manager = new Manager("John", 75000, "Engineering");

console.log("\n--- Example 3: Method Overriding with super ---");
console.log(manager.getSalary()); // Inherited
console.log(manager.getDetails()); // Overridden with super call
console.log(manager.approveExpense(5000)); // Own method

// ============================================
// Example 4: instanceof — Check inheritance relationships
// ============================================

console.log("\n--- Example 4: instanceof ---");
console.log(tesla instanceof ElectricCar); // true
console.log(tesla instanceof Car); // true
console.log(tesla instanceof Vehicle); // true
console.log(tesla instanceof Animal); // false

console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Vehicle); // false

// ============================================
// Example 5: Polymorphism through Inheritance
// ============================================

class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    return "Area calculation depends on shape";
  }

  describe() {
    return `This is a ${this.name}`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];

console.log("\n--- Example 5: Polymorphism ---");
shapes.forEach((shape) => {
  console.log(`${shape.describe()}: Area = ${shape.getArea().toFixed(2)}`);
});

// ============================================
// Example 6: Static methods and inheritance
// ============================================

class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static PI = 3.14159;
}

class AdvancedMath extends MathUtils {
  static multiply(a, b) {
    return a * b;
  }
}

console.log("\n--- Example 6: Static Methods ---");
console.log("Add:", AdvancedMath.add(5, 3)); // Inherited static method
console.log("Multiply:", AdvancedMath.multiply(5, 3)); // Own static method
console.log("PI:", AdvancedMath.PI); // Inherited static property

// ============================================
// Example 7: Constructor chaining
// ============================================

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("Person constructor called");
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, studentId) {
    super(firstName, lastName); // Call parent first
    this.studentId = studentId;
    console.log("Student constructor called");
  }

  getStudentInfo() {
    return `${this.fullName()} - ID: ${this.studentId}`;
  }
}

console.log("\n--- Example 7: Constructor Chaining ---");
const student = new Student("Alice", "Johnson", "S001");
console.log(student.getStudentInfo());

// ============================================
// Summary
// ============================================
// - Use 'extends' to inherit from a parent class
// - Use 'super()' in constructor to call parent constructor
// - Override methods by redefining them in child class
// - Use 'super.method()' to call parent's method from child
// - Use 'instanceof' to check inheritance relationships
// - Inheritance enables code reuse and polymorphism
// - A child can inherit from only ONE parent (single inheritance)
