// ============================================
// UNDERSTANDING: #balance: number = 0;
// ============================================

console.log("========== BREAKING DOWN: #balance: number = 0; ==========\n");

// Let's break this into parts:
// #balance : number = 0;
// │         │ │       │
// │         │ │       └─ Initial value (0)
// │         │ └─────────── Type annotation
// │         └───────────── Colon (syntax)
// └─────────────────────── Private field (# symbol)

// ============================================
// PART 1: THE # SYMBOL (Hash/Pound)
// ============================================

console.log("PART 1: THE # SYMBOL\n");

console.log("What does # mean?");
console.log("- # = Private");
console.log("- Private = HIDDEN from outside the class");
console.log("- Only accessible INSIDE the class\n");

class Example1 {
  #secret = "hidden"; // ✓ Private field
  public = "visible"; // ✓ Public field
}

const ex1 = new Example1();
console.log("Accessing public field:", ex1.public); // ✓ Works
// console.log("Accessing private field:", ex1.#secret); // ❌ ERROR!

console.log("\n❌ Cannot access #secret from outside\n");

// ============================================
// PART 2: THE FIELD NAME (balance)
// ============================================

console.log("PART 2: THE FIELD NAME (balance)\n");

console.log("What is 'balance'?");
console.log("- It's a VARIABLE name");
console.log("- It stores data (in this case, money)");
console.log("- This specific name = 'balance' (account balance)\n");

class BankAccount {
  #balance = 0; // This field stores the balance amount
  
  constructor(initialAmount: number) {
    this.#balance = initialAmount;
  }

  showBalance() {
    console.log(`Current balance: $${this.#balance}`);
  }
}

const account = new BankAccount(1000);
account.showBalance(); // Current balance: $1000

console.log("\nOther examples of field names:");
console.log("- #name = stores person's name");
console.log("- #age = stores person's age");
console.log("- #password = stores password");
console.log("- #email = stores email address\n");

// ============================================
// PART 3: THE COLON (:) - TYPE ANNOTATION
// ============================================

console.log("PART 3: THE COLON (:) - TYPE ANNOTATION\n");

console.log("What does 'number' mean?");
console.log("- Tells TypeScript that balance must be a NUMBER");
console.log("- Not a string, not a boolean - only a NUMBER");
console.log("- This is TYPE SAFETY\n");

// Example WITHOUT type:
class BadExample {
  #balance = 0;
}

const bad = new BadExample();
// No type checking - could accidentally do wrong things

// Example WITH type:
class GoodExample {
  #balance: number = 0; // Must be a number
}

const good = new GoodExample();

console.log("With type annotation:");
console.log("- #balance: number = 0");
console.log("  └─ balance CAN ONLY be a number");
console.log("  └─ balance: '500' ❌ ERROR (string, not number)");
console.log("  └─ balance: 500 ✓ OK (is a number)\n");

// ============================================
// PART 4: THE EQUALS (=) - INITIAL VALUE
// ============================================

console.log("PART 4: THE EQUALS (=) - INITIAL VALUE\n");

console.log("What does '= 0' mean?");
console.log("- Sets the STARTING value of balance");
console.log("- When an account is created, balance starts at 0");
console.log("- '0' is the default/initial value\n");

class DemoAccount {
  #balance: number = 0; // Starts at 0
}

const demo = new DemoAccount();
console.log("New account created");
console.log("Initial balance: $0\n");

// Another example:
class StudentGrade {
  #score: number = 0; // Starts at 0
}

console.log("Other examples of initial values:");
console.log("- #score: number = 0 (starts at 0 points)");
console.log("- #attempts: number = 0 (starts at 0 attempts)");
console.log("- #items: number = 0 (starts with 0 items)\n");

// ============================================
// COMPLETE BREAKDOWN
// ============================================

console.log("========== COMPLETE BREAKDOWN ==========\n");

console.log(`#balance: number = 0;

├─ # ................... Means PRIVATE (hidden)
├─ balance ............ Variable NAME (what data it stores)
├─ : number .......... Type annotation (must be NUMBER)
└─ = 0 ............... Initial value (starts at 0)

TRANSLATION:
"Create a PRIVATE variable named 'balance'
 that stores a NUMBER
 and starts with value 0"
\n`);

// ============================================
// REAL-WORLD EXAMPLE
// ============================================

console.log("========== REAL-WORLD EXAMPLE ==========\n");

class BankAccountFull {
  // Private fields (hidden from outside)
  #balance: number = 0;
  #accountNumber: string = "";
  #pin: number = 0;
  #transactionCount: number = 0;

  constructor(accountNumber: string, pin: number) {
    this.#accountNumber = accountNumber;
    this.#pin = pin;
    this.#balance = 0; // Start with 0 balance
  }

  // Public method to deposit
  deposit(amount: number): string {
    if (amount <= 0) {
      return "❌ Amount must be positive";
    }
    this.#balance += amount; // Access private field
    this.#transactionCount++;
    return `✓ Deposited $${amount}. New balance: $${this.#balance}`;
  }

  // Public method to check balance (with PIN verification)
  checkBalance(pin: number): string {
    if (pin !== this.#pin) {
      return "❌ Invalid PIN";
    }
    return `Balance: $${this.#balance}`; // Access private field
  }
}

const myAccount = new BankAccountFull("ACC123", 1234);

console.log("Account created:");
console.log("- #balance starts at 0");
console.log("- #pin is set to 1234");
console.log("- #transactionCount starts at 0\n");

console.log(myAccount.deposit(1000)); // Deposits 1000
console.log(myAccount.deposit(500)); // Deposits 500
console.log(myAccount.checkBalance(1234)); // Shows balance

console.log("\nNote: We CANNOT access:");
console.log("- myAccount.#balance (❌ ERROR)");
console.log("- myAccount.#pin (❌ ERROR)");
console.log("- myAccount.#transactionCount (❌ ERROR)");
console.log("- These are PRIVATE and HIDDEN\n");

// ============================================
// COMPARING DIFFERENT DECLARATIONS
// ============================================

console.log("========== COMPARING DIFFERENT DECLARATIONS ==========\n");

console.log("1. PUBLIC field (anyone can access):");
console.log("   balance: number = 0;");
console.log("   └─ ❌ NOT SAFE - anyone can change it\n");

console.log("2. PRIVATE field (only inside class):");
console.log("   #balance: number = 0;");
console.log("   └─ ✓ SAFE - hidden from outside\n");

console.log("3. Without type annotation:");
console.log("   #balance = 0;");
console.log("   └─ Works but no type safety\n");

console.log("4. Without initial value:");
console.log("   #balance: number;");
console.log("   └─ Must initialize before using\n");

console.log("5. BEST PRACTICE (like our example):");
console.log("   #balance: number = 0;");
console.log("   └─ Private + type safe + initialized\n");

// ============================================
// WHAT HAPPENS INSIDE
// ============================================

console.log("========== WHAT HAPPENS INSIDE THE CLASS ==========\n");

class Shop {
  #money: number = 100; // Starts with $100

  sellItem(price: number): void {
    console.log(`Customer pays $${price}`);
    this.#money += price; // Can ACCESS and MODIFY #money
    console.log(`Shop now has: $${this.#money}`);
  }

  getMoney(): number {
    return this.#money; // Can ACCESS #money to return it
  }
}

const shop = new Shop();
console.log("Shop starts with: $100\n");

shop.sellItem(50); // Can sell items
console.log(""); // blank line
shop.sellItem(25); // Can sell more items
console.log("");

console.log("Total money:", shop.getMoney());
console.log("\n✓ Inside the class, #money is fully accessible");
console.log("✓ Outside the class, #money is completely hidden\n");

// ============================================
// VISUAL COMPARISON
// ============================================

console.log("========== VISUAL COMPARISON ==========\n");

console.log("WITHOUT ABSTRACTION (No # symbol):");
console.log(`
class Bank {
  balance: number = 0;  // PUBLIC
}

const bank = new Bank();
bank.balance = 999999;  // ❌ HACKED! Anyone can change it
\n`);

console.log("WITH ABSTRACTION (With # symbol):");
console.log(`
class Bank {
  #balance: number = 0;  // PRIVATE
}

const bank = new Bank();
bank.#balance = 999999;  // ❌ ERROR! Cannot access
bank.deposit(100);       // ✓ Only way to change balance
\n`);

// ============================================
// SUMMARY TABLE
// ============================================

console.log("========== SUMMARY TABLE ==========\n");

console.log("Syntax: #balance: number = 0;\n");

console.log("Part          | Meaning               | Example");
console.log("─────────────────────────────────────────────────");
console.log("#             | Private field         | Hide from outside");
console.log("balance       | Field name            | What it stores");
console.log(": number      | Type annotation       | Must be a number");
console.log("= 0           | Initial value         | Starts at 0");
console.log("\n");

// ============================================
// PRACTICE EXERCISE
// ============================================

console.log("========== PRACTICE EXERCISE ==========\n");

console.log("Create these private fields:\n");

console.log("1. Age field (should be number, start at 0):");
console.log("   Answer: #age: number = 0;\n");

console.log("2. Name field (should be string, start as empty):");
console.log("   Answer: #name: string = \"\";\n");

console.log("3. Active flag (should be boolean, start as false):");
console.log("   Answer: #active: boolean = false;\n");

console.log("4. Scores list (should be array, start empty):");
console.log("   Answer: #scores: number[] = [];\n");

// ============================================
// KEY TAKEAWAYS
// ============================================

console.log("========== KEY TAKEAWAYS ==========\n");

console.log(`
✓ #balance: number = 0; means:
  
  Private field named 'balance'
  that stores a NUMBER
  with initial value of 0

✓ # makes it PRIVATE (hidden)
  - Can only be used INSIDE the class
  - Cannot be accessed from outside

✓ : number is TYPE ANNOTATION
  - Ensures only numbers are stored
  - TypeScript checks this for us

✓ = 0 is INITIAL VALUE
  - When object is created, starts at 0
  - Can be changed later using methods

✓ This is SAFE because:
  - Data is protected
  - Can only be modified through methods
  - Methods can validate changes
  - Prevents accidental or intentional corruption

ANALOGY:
Private field = Diary with a lock
Public method = Reading specific entry to friend
  (friend can't see all pages, just what you show)
`);

// export { BankAccountFull, Shop };
