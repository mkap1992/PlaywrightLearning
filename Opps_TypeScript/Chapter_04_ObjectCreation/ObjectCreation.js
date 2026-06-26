// ============================================
// Multiple Ways to Create Objects in JavaScript
// ============================================

// Objects are fundamental to JavaScript. There are several ways to create them,
// each with different use cases and benefits.

// ============================================
// Method 1: Object Literal (Most Common)
// ============================================

const person1 = {
  name: "Alice",
  age: 25,
  city: "New York",
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

console.log("--- Method 1: Object Literal ---");
console.log(person1);
console.log(person1.greet());

// ============================================
// Method 2: Object Constructor Function
// ============================================

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;

  this.greet = function () {
    return `Hi, I'm ${this.name}`;
  };
}

const person2 = new Person("Bob", 30, "London");

console.log("\n--- Method 2: Constructor Function ---");
console.log(person2);
console.log(person2.greet());

// ============================================
// Method 3: ES6 Class
// ============================================

class PersonClass {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }

  getDetails() {
    return `${this.name}, ${this.age} years old from ${this.city}`;
  }
}

const person3 = new PersonClass("Charlie", 35, "Paris");

console.log("\n--- Method 3: ES6 Class ---");
console.log(person3);
console.log(person3.greet());
console.log(person3.getDetails());

// ============================================
// Method 4: Factory Function
// ============================================

function createPerson(name, age, city) {
  return {
    name,
    age,
    city,
    greet() {
      return `Hi, I'm ${this.name}`;
    },
    celebrate() {
      this.age++;
      return `${this.name} is now ${this.age}`;
    },
  };
}

const person4 = createPerson("Diana", 28, "Berlin");

console.log("\n--- Method 4: Factory Function ---");
console.log(person4);
console.log(person4.greet());
console.log(person4.celebrate());

// ============================================
// Method 5: Object.create() with Prototype
// ============================================

const personPrototype = {
  greet() {
    return `Hi, I'm ${this.name}`;
  },
  getAge() {
    return `Age: ${this.age}`;
  },
};

const person5 = Object.create(personPrototype);
person5.name = "Eve";
person5.age = 32;
person5.city = "Tokyo";

console.log("\n--- Method 5: Object.create() ---");
console.log(person5);
console.log(person5.greet());
console.log(person5.getAge());

// ============================================
// Method 6: Singleton Pattern
// ============================================

const Singleton = (function () {
  let instance;

  function createInstance() {
    return {
      name: "Singleton Instance",
      id: Math.random(),
      describe() {
        return `This is a ${this.name} with ID ${this.id}`;
      },
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log("\n--- Method 6: Singleton Pattern ---");
console.log(singleton1.describe());
console.log(singleton1 === singleton2); // true (same instance)

// ============================================
// Method 7: Using Closures for Private Data
// ============================================

function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();

console.log("\n--- Method 7: Closures for Private Data ---");
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

// ============================================
// Method 8: Object.assign() - Shallow Copy
// ============================================

const original = { name: "Frank", age: 40, city: "Madrid" };
const copy = Object.assign({}, original, {
  age: 41, // Override property
});

console.log("\n--- Method 8: Object.assign() ---");
console.log("Original:", original);
console.log("Copy:", copy);
console.log(original === copy); // false (different objects)

// ============================================
// Method 9: Spread Operator (ES6+)
// ============================================

const person6 = { name: "Grace", age: 27, city: "Amsterdam" };
const person6Extended = {
  ...person6,
  profession: "Engineer",
  city: "Amsterdam", // Override if needed
};

console.log("\n--- Method 9: Spread Operator ---");
console.log(person6Extended);

// ============================================
// Method 10: Destructuring and Creating New Object
// ============================================

const person7Data = { name: "Henry", age: 45, city: "Rome" };
const { name, age } = person7Data;

const newPerson = {
  name,
  age,
  introduction() {
    return `${this.name} is ${this.age} years old`;
  },
};

console.log("\n--- Method 10: Destructuring ---");
console.log(newPerson.introduction());

// ============================================
// Method 11: Class with Static Factory Method
// ============================================

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  static fromString(str) {
    const [name, department] = str.split(",");
    return new Employee(name.trim(), department.trim());
  }

  getInfo() {
    return `${this.name} works in ${this.department}`;
  }
}

const emp = Employee.fromString("Ivy, HR");

console.log("\n--- Method 11: Class with Static Factory ---");
console.log(emp.getInfo());

// ============================================
// Method 12: Builder Pattern
// ============================================

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
    return this; // Return this for chaining
  }

  setCity(city) {
    this.city = city;
    return this;
  }

  setProfession(profession) {
    this.profession = profession;
    return this;
  }

  build() {
    return {
      name: this.name,
      age: this.age,
      city: this.city,
      profession: this.profession,
      getDetails() {
        return `${this.name}, ${this.age}, ${this.city}, ${this.profession}`;
      },
    };
  }
}

const person8 = new PersonBuilder("Jack")
  .setAge(35)
  .setCity("Sydney")
  .setProfession("Developer")
  .build();

console.log("\n--- Method 12: Builder Pattern ---");
console.log(person8.getDetails());

// ============================================
// Comparison Summary
// ============================================

console.log("\n--- Comparison Summary ---");
console.log(`
1. Object Literal      - Simple, one-time objects
2. Constructor Fn      - Reusable, but less modern
3. ES6 Class           - Modern, clean syntax, recommended
4. Factory Function    - Flexible, no 'new' keyword needed
5. Object.create()     - Prototype-based creation
6. Singleton Pattern   - Only one instance
7. Closures            - Private data encapsulation
8. Object.assign()     - Copying/merging objects
9. Spread Operator     - Modern copying/merging
10. Destructuring      - Extract and create from data
11. Static Factory     - Named constructors in classes
12. Builder Pattern    - Complex object creation

Choose based on your needs:
- Simple objects → Object Literal
- Reusable templates → ES6 Class (preferred) or Factory Function
- Private data → Closures or Class with #private fields
- Complex construction → Builder Pattern
- Only one instance → Singleton Pattern
`);
