// ============================================
// Encapsulation in JavaScript
// ============================================

// Encapsulation is the practice of bundling data (properties) and the methods
// that operate on that data into a single unit (a class), while restricting
// direct access to some of the object's internals.

// Key Benefits:
// 1. Data Protection — prevents external code from directly modifying internal state
// 2. Controlled Access — getters/setters can validate before reading/writing
// 3. Reduced Coupling — consumers depend on public interface, not internals

// ============================================
// Example 1: Without Encapsulation (Bad Practice)
// ============================================

class UserWithoutEncapsulation {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new UserWithoutEncapsulation("Alice", 25);
user1.age = -5; // No validation! Anyone can set invalid data
console.log("Without Encapsulation:", user1.age); // -5 (invalid state)

// ============================================
// Example 2: With Encapsulation using # (Private Fields)
// ============================================

class User {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.setAge(age); // Use setter for validation even in constructor
  }

  // Getter — controlled read access
  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  // Setter — controlled write access with validation
  setName(name) {
    if (typeof name !== "string" || name.trim().length === 0) {
      throw new Error("Name must be a non-empty string");
    }
    this.#name = name.trim();
  }

  setAge(age) {
    if (typeof age !== "number" || age < 0 || age > 150) {
      throw new Error("Age must be a number between 0 and 150");
    }
    this.#age = age;
  }

  // Public method that uses private data
  introduce() {
    return `Hi, I'm ${this.#name} and I'm ${this.#age} years old.`;
  }
}

const user2 = new User("Bob", 30);
console.log("With Encapsulation:", user2.introduce());
console.log("Get Name:", user2.getName());

// user2.#name = "Hacker";  ❌ SyntaxError — #name is private
// user2.#age = -100;       ❌ SyntaxError — #age is private

try {
  user2.setAge(-5); // Throws error — validation prevents invalid state
} catch (error) {
  console.log("Validation Error:", error.message);
}

// ============================================
// Example 3: BankAccount — Real-world use case
// ============================================

class BankAccount {
  #balance;
  #owner;
  #transactions;

  constructor(owner, initialBalance) {
    this.#owner = owner;
    this.#balance = initialBalance;
    this.#transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.#balance += amount;
    this.#transactions.push({ type: "deposit", amount, date: new Date() });
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Withdrawal must be positive");
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
    this.#transactions.push({ type: "withdrawal", amount, date: new Date() });
  }

  getBalance() {
    return this.#balance;
  }

  getStatement() {
    return {
      owner: this.#owner,
      balance: this.#balance,
      totalTransactions: this.#transactions.length,
    };
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);
account.withdraw(200);
console.log("Balance:", account.getBalance()); // 1300
console.log("Statement:", account.getStatement());

// account.#balance = 999999;  ❌ Can't cheat — balance is private

// ============================================
// Example 4: Encapsulation with Closures (older pattern)
// ============================================

function createCounter() {
  let count = 0; // Private via closure — not accessible from outside

  return {
    increment() {
      count++;
    },
    decrement() {
      if (count > 0) count--;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log("Counter:", counter.getCount()); // 2
// console.log(counter.count);  ❌ undefined — count is not exposed

// ============================================
// Summary
// ============================================
// - Use #privateField syntax for true private fields in modern JS
// - Use closures for encapsulation in function-based patterns
// - Always validate data in setters to maintain object integrity
// - Expose only what consumers need through public methods
