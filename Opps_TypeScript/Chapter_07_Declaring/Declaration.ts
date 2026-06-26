// ============================================
// TYPESCRIPT - VARIABLE DECLARATIONS
// All ways to declare variables in TypeScript
// ============================================

console.log("========== 1. let ==========\n");

// let - block scoped, can be reassigned, cannot be re-declared
let userName: string = "Nagarjuna";
let userAge: number = 25;
let isLoggedIn: boolean = true;

console.log("userName:", userName);
console.log("userAge:", userAge);
console.log("isLoggedIn:", isLoggedIn);

// let CAN be reassigned
userName = "Patil";
userAge = 26;
console.log("After reassign - userName:", userName);
console.log("After reassign - userAge:", userAge);

// ❌ let CANNOT be re-declared in same scope
// let userName = "test"; // ERROR: Cannot redeclare block-scoped variable

console.log("\n========== 2. const ==========\n");

// const - block scoped, CANNOT be reassigned, CANNOT be re-declared
const PI: number = 3.14159;
const APP_NAME: string = "PlaywrightApp";
const IS_PRODUCTION: boolean = false;

console.log("PI:", PI);
console.log("APP_NAME:", APP_NAME);
console.log("IS_PRODUCTION:", IS_PRODUCTION);

// ❌ const CANNOT be reassigned
// PI = 3.14; // ERROR: Cannot assign to 'PI' because it is a constant

// ✅ const OBJECT properties CAN be changed
const user = { name: "Alice", age: 30 };
user.name = "Bob";        // ✅ Allowed - changing property
user.age = 31;            // ✅ Allowed - changing property
console.log("const object:", user);

// ✅ const ARRAY items CAN be changed
const colors: string[] = ["red", "green"];
colors.push("blue");      // ✅ Allowed - adding item
console.log("const array:", colors);

console.log("\n========== 3. var (Old way - Avoid!) ==========\n");

// var - function scoped, can be reassigned, CAN be re-declared (bad!)
var oldVariable: string = "I am var";
var oldVariable = "Redeclared var"; // ✅ No error (but bad practice!)
console.log("var:", oldVariable);

// var is function scoped - leaks outside blocks
if (true) {
  var leakyVar = "I leak outside!";
  let safeVar = "I stay inside";
}
console.log("var leaks:", leakyVar);         // ✅ Works (bad!)
// console.log("let safe:", safeVar);        // ❌ ERROR (good!)

console.log("\n========== 4. TypeScript Basic Types ==========\n");

// STRING
let firstName: string = "John";
let lastName: string = 'Doe';
let fullName: string = `${firstName} ${lastName}`;  // template literal
console.log("string:", fullName);

// NUMBER (integer, float, negative)
let integer: number = 42;
let decimal: number = 3.14;
let negative: number = -10;
let hex: number = 0xFF;       // hexadecimal
let binary: number = 0b1010;  // binary
console.log("numbers:", integer, decimal, negative, hex, binary);

// BOOLEAN
let isActive: boolean = true;
let isDeleted: boolean = false;
console.log("boolean:", isActive, isDeleted);

// NULL
let emptyValue: null = null;
console.log("null:", emptyValue);

// UNDEFINED
let notAssigned: undefined = undefined;
console.log("undefined:", notAssigned);

console.log("\n========== 5. TypeScript Special Types ==========\n");

// ANY - disables type checking (avoid using it!)
let anything: any = "I can be anything";
anything = 42;             // ✅ No error
anything = true;           // ✅ No error
anything = { key: "val" }; // ✅ No error
console.log("any:", anything);

// UNKNOWN - safer version of any (must check type before use)
let userInput: unknown = "Hello";
userInput = 100;
if (typeof userInput === "number") {
  console.log("unknown (number):", userInput + 10); // Safe after check
}

// NEVER - a function that never returns
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("something went wrong"); // Would stop execution

// VOID - function that returns nothing
function logMessage(msg: string): void {
  console.log("void function:", msg);
}
logMessage("Hello from void function");

console.log("\n========== 6. Arrays ==========\n");

// Array - two ways to declare
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "cherry"];
let mixed: (string | number)[] = ["hello", 1, "world", 2];

console.log("number[]:", numbers);
console.log("Array<string>:", fruits);
console.log("mixed array:", mixed);

console.log("\n========== 7. Tuple ==========\n");

// Tuple - fixed length array with known types at each position
let person: [string, number, boolean] = ["Alice", 30, true];
let coordinate: [number, number] = [10, 20];
let nameAge: [string, number] = ["Bob", 25];

console.log("person tuple:", person);
console.log("coordinate tuple:", coordinate);
console.log("nameAge[0]:", nameAge[0]); // "Bob"
console.log("nameAge[1]:", nameAge[1]); // 25

console.log("\n========== 8. Object Types ==========\n");

// Object with inline type
let student: { name: string; age: number; grade: string } = {
  name: "Charlie",
  age: 15,
  grade: "A"
};
console.log("object:", student);

// Type Alias (reusable type definition)
type Car = {
  brand: string;
  model: string;
  year: number;
};

let myCar: Car = { brand: "Toyota", model: "Camry", year: 2023 };
let yourCar: Car = { brand: "Honda", model: "Civic", year: 2022 };
console.log("Car type alias:", myCar);
console.log("Car type alias:", yourCar);

console.log("\n========== 9. Union Types ==========\n");

// Union - variable can be one of multiple types
let id: string | number;
id = 101;
console.log("union (number):", id);
id = "ABC101";
console.log("union (string):", id);

// Union in function parameter
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Number ID:", id);
  }
}
printId(42);
printId("abc");

console.log("\n========== 10. Enum ==========\n");

// Enum - named constants
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

enum Status {
  Active = 1,
  Inactive = 2,
  Pending = 3
}

let move: Direction = Direction.Up;
let userStatus: Status = Status.Active;

console.log("Direction enum:", move);
console.log("Status enum:", userStatus);

console.log("\n========== 11. Type Inference ==========\n");

// TypeScript can INFER the type without you writing it
let inferredString = "Hello";        // TypeScript knows it's string
let inferredNumber = 42;             // TypeScript knows it's number
let inferredBoolean = true;          // TypeScript knows it's boolean

console.log("inferred string:", inferredString);
console.log("inferred number:", inferredNumber);
console.log("inferred boolean:", inferredBoolean);

// ❌ This would fail because TypeScript inferred the type
// inferredString = 100; // ERROR: Type 'number' is not assignable to type 'string'

console.log("\n========== 12. Optional & Default Values ==========\n");

// Optional variable (can be string OR undefined)
let middleName: string | undefined;
console.log("optional (before set):", middleName); // undefined

middleName = "Kumar";
console.log("optional (after set):", middleName);  // "Kumar"

// Function with optional parameter
function greet(name: string, greeting?: string): string {
  return (greeting ?? "Hello") + ", " + name + "!";
}
console.log(greet("Alice"));           // Hello, Alice!
console.log(greet("Bob", "Hi"));       // Hi, Bob!

// Function with default parameter
function createUser(name: string, role: string = "user"): string {
  return name + " is a " + role;
}
console.log(createUser("Alice"));           // Alice is a user
console.log(createUser("Admin", "admin"));  // Admin is a admin

console.log("\n========== SUMMARY ==========\n");

console.log(`
VARIABLE DECLARATION SUMMARY:

┌─────────┬────────────┬─────────────┬──────────────┬─────────────┐
│ Keyword │ Re-assign  │ Re-declare  │ Scope        │ Use         │
├─────────┼────────────┼─────────────┼──────────────┼─────────────┤
│ let     │ ✅ Yes     │ ❌ No       │ Block        │ Most vars   │
│ const   │ ❌ No      │ ❌ No       │ Block        │ Constants   │
│ var     │ ✅ Yes     │ ✅ Yes      │ Function     │ ❌ Avoid!   │
└─────────┴────────────┴─────────────┴──────────────┴─────────────┘

TYPESCRIPT TYPES:
  string    → "hello", 'world', \`template\`
  number    → 42, 3.14, -10, 0xFF
  boolean   → true, false
  null      → null
  undefined → undefined
  any       → anything (avoid!)
  unknown   → anything but safer
  void      → function returns nothing
  never     → function never returns
  string[]  → array of strings
  [str,num] → tuple (fixed types per index)
  str|num   → union (either type)
  enum      → named constants
`);

const _module = true; // Prevents duplicate identifier errors
