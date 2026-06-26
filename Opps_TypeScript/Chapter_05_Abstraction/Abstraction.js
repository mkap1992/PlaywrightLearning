// ============================================
// Abstraction in JavaScript
// ============================================

// Abstraction is the practice of hiding complex implementation details
// and exposing only the essential features through a simple interface.

// Key Benefits:
// 1. Simplifies code usage — users don't need to know internal complexity
// 2. Reduces coupling — changes to internal implementation don't break external code
// 3. Improves maintainability — logic is centralized and easier to modify
// 4. Focuses on "what" not "how" — users care about the interface, not implementation

// ============================================
// Example 1: Abstraction with Private Fields and Methods
// ============================================

class BankAccount {
  #balance = 0;
  #transactionHistory = [];
  #pin;

  constructor(accountHolder, initialPin) {
    this.accountHolder = accountHolder;
    this.#pin = initialPin;
  }

  // Public interface — simple methods
  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    this.#balance += amount;
    this.#recordTransaction("deposit", amount);
    return `Deposited $${amount}. Balance: $${this.#balance}`;
  }

  withdraw(amount, pin) {
    if (!this.#verifyPin(pin)) throw new Error("Invalid PIN");
    if (amount > this.#balance) throw new Error("Insufficient funds");

    this.#balance -= amount;
    this.#recordTransaction("withdrawal", amount);
    return `Withdrawn $${amount}. Balance: $${this.#balance}`;
  }

  getBalance(pin) {
    if (!this.#verifyPin(pin)) throw new Error("Invalid PIN");
    return this.#balance;
  }

  // Private methods — hidden from users
  #verifyPin(pin) {
    return pin === this.#pin;
  }

  #recordTransaction(type, amount) {
    this.#transactionHistory.push({
      type,
      amount,
      timestamp: new Date(),
    });
  }
}

const account = new BankAccount("Alice", 1234);

console.log("--- Example 1: Bank Account Abstraction ---");
console.log(account.deposit(1000));
console.log(account.withdraw(200, 1234));
console.log(`Balance: $${account.getBalance(1234)}`);

// User doesn't see: #verifyPin, #recordTransaction, #transactionHistory
// User only interacts with: deposit(), withdraw(), getBalance()

// ============================================
// Example 2: Abstraction with Classes - Payment Processing
// ============================================

class PaymentProcessor {
  #apiKey;
  #encryptionKey;

  constructor(apiKey) {
    this.#apiKey = apiKey;
    this.#encryptionKey = this.#generateEncryptionKey();
  }

  processPayment(cardNumber, amount) {
    const encryptedCard = this.#encryptCard(cardNumber);
    const isValid = this.#validateCard(encryptedCard);

    if (!isValid) {
      return { success: false, message: "Invalid card" };
    }

    const response = this.#callPaymentGateway(encryptedCard, amount);
    return { success: true, transactionId: response.id, amount };
  }

  // All complex logic hidden
  #encryptCard(cardNumber) {
    return `encrypted_${cardNumber.slice(-4)}`;
  }

  #validateCard(encryptedCard) {
    return encryptedCard.includes("encrypted_");
  }

  #generateEncryptionKey() {
    return Math.random().toString(36);
  }

  #callPaymentGateway(encryptedCard, amount) {
    return { id: `TXN_${Date.now()}`, status: "processed" };
  }
}

const processor = new PaymentProcessor("secret-key");

console.log("\n--- Example 2: Payment Processor Abstraction ---");
const result = processor.processPayment("1234567890123456", 99.99);
console.log(result);

// User calls: processPayment()
// User never sees: #encryptCard, #validateCard, #callPaymentGateway, etc.

// ============================================
// Example 3: Database Connection Abstraction
// ============================================

class Database {
  #connection = null;
  #pool = [];
  #connected = false;

  constructor(host, port) {
    this.host = host;
    this.port = port;
  }

  // Public interface
  connect() {
    this.#establishConnection();
    this.#connected = true;
    return "Connected to database";
  }

  query(sql) {
    if (!this.#connected) throw new Error("Database not connected");

    const connection = this.#getConnection();
    const result = this.#executeQuery(connection, sql);
    this.#releaseConnection(connection);

    return result;
  }

  disconnect() {
    this.#closeConnection();
    this.#connected = false;
    return "Disconnected from database";
  }

  // Private methods — complex logic hidden
  #establishConnection() {
    this.#connection = `Connection to ${this.host}:${this.port}`;
  }

  #getConnection() {
    return this.#connection;
  }

  #executeQuery(connection, sql) {
    // Simulate query execution
    return { rows: [], columns: [] };
  }

  #releaseConnection(connection) {
    // Cleanup logic
  }

  #closeConnection() {
    this.#connection = null;
  }
}

const db = new Database("localhost", 5432);

console.log("\n--- Example 3: Database Abstraction ---");
console.log(db.connect());
console.log(db.query("SELECT * FROM users"));
console.log(db.disconnect());

// ============================================
// Example 4: Abstraction with Closures
// ============================================

function createCar(make, model) {
  let fuelLevel = 100;
  let speed = 0;

  return {
    // Public methods
    drive() {
      if (fuelLevel > 0) {
        speed = 60;
        fuelLevel -= 10;
        return `${make} ${model} is driving at ${speed} mph. Fuel: ${fuelLevel}%`;
      }
      return "Out of fuel!";
    },

    refuel() {
      fuelLevel = 100;
      return `${make} ${model} refueled. Fuel: ${fuelLevel}%`;
    },

    stop() {
      speed = 0;
      return `${make} ${model} stopped`;
    },

    getInfo() {
      return `${make} ${model} - Speed: ${speed}, Fuel: ${fuelLevel}%`;
    },

    // fuelLevel and speed are private via closure
  };
}

const myCar = createCar("Toyota", "Camry");

console.log("\n--- Example 4: Abstraction with Closures ---");
console.log(myCar.drive());
console.log(myCar.drive());
console.log(myCar.getInfo());
console.log(myCar.refuel());

// console.log(myCar.fuelLevel);  ❌ undefined (private)

// ============================================
// Example 5: Abstraction in API Wrapper
// ============================================

class WeatherAPI {
  #apiUrl = "https://api.weather.com";
  #apiKey;

  constructor(apiKey) {
    this.#apiKey = apiKey;
  }

  // Simple public method
  getWeather(city) {
    const data = this.#fetchWeatherData(city);
    return this.#formatWeatherResponse(data);
  }

  // Complex logic hidden
  #fetchWeatherData(city) {
    // Simulate API call with authentication, error handling, etc.
    return {
      city,
      temp: 72,
      condition: "Sunny",
      humidity: 65,
    };
  }

  #formatWeatherResponse(data) {
    return {
      location: data.city,
      temperature: `${data.temp}°F`,
      condition: data.condition,
      humidity: `${data.humidity}%`,
    };
  }

  #handleErrors(error) {
    // Error handling logic
    console.log("API Error:", error);
  }

  #validateApiResponse(response) {
    return response && response.city;
  }
}

const weather = new WeatherAPI("secret-api-key");

console.log("\n--- Example 5: API Wrapper Abstraction ---");
console.log(weather.getWeather("New York"));

// User just calls: getWeather()
// User doesn't care about: API calls, authentication, formatting, validation

// ============================================
// Example 6: Abstraction with Abstract-like Behavior (Simulated)
// ============================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  // This method should be overridden in child classes
  makeSound() {
    throw new Error("makeSound() must be implemented in subclass");
  }

  sleep() {
    return `${this.name} is sleeping`;
  }
}

class Dog extends Animal {
  makeSound() {
    return `${this.name} barks: Woof! Woof!`;
  }
}

class Cat extends Animal {
  makeSound() {
    return `${this.name} meows: Meow!`;
  }
}

function animalSound(animal) {
  console.log(animal.makeSound());
}

console.log("\n--- Example 6: Simulated Abstract Methods ---");
const dog = new Dog("Rex");
const cat = new Cat("Whiskers");

animalSound(dog);
animalSound(cat);

// User doesn't care how each animal produces sound
// Just calls makeSound() on any animal

// ============================================
// Example 7: Abstraction in File Operations
// ============================================

class FileManager {
  #fileSystem = new Map();

  createFile(filename, content) {
    this.#validateFilename(filename);
    this.#fileSystem.set(filename, content);
    return `File '${filename}' created`;
  }

  readFile(filename) {
    if (!this.#fileSystem.has(filename)) {
      throw new Error(`File '${filename}' not found`);
    }
    return this.#fileSystem.get(filename);
  }

  deleteFile(filename) {
    this.#fileSystem.delete(filename);
    return `File '${filename}' deleted`;
  }

  listFiles() {
    return Array.from(this.#fileSystem.keys());
  }

  // Private helper methods
  #validateFilename(filename) {
    if (!filename || filename.trim().length === 0) {
      throw new Error("Invalid filename");
    }
  }

  #checkFilePermissions(filename) {
    // Permission checking logic
    return true;
  }
}

const fm = new FileManager();

console.log("\n--- Example 7: File Manager Abstraction ---");
console.log(fm.createFile("notes.txt", "This is a note"));
console.log(fm.readFile("notes.txt"));
console.log(fm.listFiles());
console.log(fm.deleteFile("notes.txt"));

// ============================================
// Summary
// ============================================

console.log(`
\n--- Abstraction Summary ---

Abstraction in JavaScript:
✓ IS present and very useful
✓ Achieved through:
  - Private fields (#privateField)
  - Closures
  - Hidden methods
  - Encapsulation

Key Principles:
1. Expose ONLY what's necessary
2. Hide internal complexity
3. Provide clear, simple interfaces
4. Use meaningful method names
5. Document what each public method does

Real-world Examples:
- fetch() API: users don't see network details
- Array.map(): users don't see iteration internals
- Date object: users don't see timestamp calculations
- Database drivers: hide connection pooling, query optimization

Without Abstraction (Bad):
- Users must know all implementation details
- Changes to internals break external code
- Code is harder to understand and maintain

With Abstraction (Good):
- Simple interface for complex operations
- Internal changes don't affect users
- Code is cleaner and more maintainable
`);
