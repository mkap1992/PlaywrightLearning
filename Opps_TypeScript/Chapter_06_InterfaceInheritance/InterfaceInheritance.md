# Interface and Inheritance in TypeScript
### Explained Like You're a Kid! 🧒

---

## 🧬 What is Inheritance?

Imagine your family. You got your **eyes from your mom** and your **height from your dad**.
You didn't have to "build" those features yourself — you **inherited** them!

In TypeScript, a **child class** can inherit features from a **parent class**.

> **Simple Rule:** If a Dog IS an Animal → Dog should `extend` Animal

---

## 📖 Part 1: Inheritance — "Child gets from Parent"

```
Animal (Parent)
│
├── eat()    ← all animals can eat
├── sleep()  ← all animals can sleep
│
├── Dog (Child) ── gets eat() and sleep() for FREE!
│     └── makeSound() → "Woof!"
│
├── Cat (Child) ── gets eat() and sleep() for FREE!
│     └── makeSound() → "Meow!"
│
└── Bird (Child) ── gets eat() and sleep() for FREE!
      └── makeSound() → "Tweet!"
```

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): string {
    return this.name + " is eating";
  }
}

class Dog extends Animal {          // Dog inherits Animal
  makeSound(): string {
    return this.name + " says: Woof!";
  }
}

const dog = new Dog("Rex");
dog.eat();        // ✅ Inherited from Animal
dog.makeSound();  // ✅ Defined in Dog
```

### Key Keywords
| Keyword | Meaning |
|---------|---------|
| `extends` | Child class gets parent's methods |
| `super()` | Calls parent's constructor |
| `override` | Child replaces parent's method |

---

## 🏗️ Part 2: Multi-Level Inheritance

Like a family tree — Grandparent → Parent → Child

```
Person
  └── Student  (extends Person)
        └── CollegeStudent  (extends Student)
```

```typescript
class Person {
  name: string;
  greet(): string { return "Hi, I am " + this.name; }
}

class Student extends Person {
  grade: string;
  study(): string { return this.name + " is studying"; }
}

class CollegeStudent extends Student {
  major: string;
  research(): string { return this.name + " is researching " + this.major; }
}
```

> CollegeStudent gets `greet()` and `study()` automatically!

---

## 📋 Part 3: Interface — "A Rulebook / Contract"

Imagine a **job contract**. It says:

> "If you want to be a Driver, you MUST know how to: drive, brake, steer"

An **interface** is exactly that — a list of rules a class MUST follow.

```typescript
interface IAnimal {
  name: string;
  makeSound(): string;   // MUST have this
  eat(): string;         // MUST have this
}
```

```typescript
class Fish implements IAnimal {  // Fish agrees to follow IAnimal rules
  name: string = "Nemo";

  makeSound(): string {
    return "Nemo blows bubbles";
  }

  eat(): string {
    return "Nemo eats fish food";
  }
}
```

### A Class Can Implement Multiple Interfaces!

```typescript
interface ISwimmable { swim(): string; }
interface IFlyable   { fly(): string;  }

class Duck implements IAnimal, ISwimmable, IFlyable {
  name: string = "Donald";
  age: number = 3;
  makeSound(): string { return "Quack!"; }
  eat(): string       { return "Eating bread"; }
  swim(): string      { return "Swimming in pond"; }
  fly(): string       { return "Flying south!"; }
}
```

---

## 🔗 Part 4: Interface Inheritance

An interface can also extend another interface!

```typescript
interface IShape {
  color: string;
  getArea(): number;
}

interface IShape3D extends IShape {    // IShape3D adds MORE rules
  depth: number;
  getVolume(): number;
}
```

```
IShape  →  color, getArea()
   └── IShape3D  →  color, getArea(), depth, getVolume()
```

---

## 🎭 Part 5: Abstract Class

Think of it like a **recipe template**:
- It tells you WHAT to make (abstract methods)
- It may show you SOME steps (concrete methods)
- But YOU must fill in the details

```typescript
abstract class Vehicle {
  brand: string;

  // Ready-to-use method (inherited as-is)
  getInfo(): string {
    return "Brand: " + this.brand;
  }

  // Must be implemented by child
  abstract startEngine(): string;
  abstract fuelType(): string;
}

class PetrolCar extends Vehicle {
  startEngine(): string { return "VROOM!"; }
  fuelType(): string    { return "Petrol"; }
}

class ElectricCar extends Vehicle {
  startEngine(): string { return "Whirrrr..."; }
  fuelType(): string    { return "Electric"; }
}
```

> ❌ `new Vehicle()` — ERROR! Cannot create abstract class directly
> ✅ `new PetrolCar()` — Works fine!

---

## 🏦 Part 6: Real-World Example — Payment System

```
IPayment (Interface)
  └── BasePayment (Base Class implements IPayment)
        ├── PayPal   (extends BasePayment)
        ├── Stripe   (extends BasePayment)
        └── CreditCard (extends BasePayment)
```

```typescript
interface IPayment {
  process(amount: number): string;
  refund(transactionId: string): string;
}

class BasePayment implements IPayment {
  providerName: string;
  process(amount: number): string {
    return this.providerName + " processing $" + amount;
  }
  refund(id: string): string {
    return this.providerName + " refunding " + id;
  }
}

class PayPal extends BasePayment {
  process(amount: number): string {
    return "PayPal charged $" + amount;
  }
}
```

---

## 🆚 Inheritance vs Interface vs Abstract Class

| Feature | `extends` | `implements` | `abstract` |
|---------|-----------|-------------|-----------|
| Inherit code | ✅ Yes | ❌ No | ✅ Partial |
| Multiple | ❌ One parent | ✅ Many interfaces | ❌ One parent |
| Force methods | ❌ Optional | ✅ Yes | ✅ Yes |
| Create directly | ✅ Yes | ✅ Yes | ❌ No |

---

## 🧠 Easy Memory Tricks for Kids

| Scenario | Use |
|----------|-----|
| Dog **IS A** Animal | `extends` |
| Car **CAN** drive | `implements` |
| Same methods, different behavior | `abstract` |
| Share code across classes | `extends` |
| Define a contract | `interface` |

---

## 🎯 Quick Recap

```
INHERITANCE (extends)
  Parent → Child
  Dog extends Animal
  Child gets parent's methods for FREE ✅

INTERFACE (implements)
  Rulebook → Class must follow
  Fish implements ISwimmable
  Class MUST have all interface methods ✅

ABSTRACT CLASS (abstract)
  Template → Child fills in blanks
  Vehicle is abstract
  Cannot use directly, must extend ✅
```

---

## 📝 Files in This Chapter

| File | Description |
|------|-------------|
| `InterfaceInheritance.js` | JavaScript version |
| `InterfaceInheritance.ts` | TypeScript version with full examples |
| `InterfaceInheritance.md` | This explanation file |

---

## ✅ Run the TypeScript File

```bash
# Compile TypeScript to JavaScript
npx tsc --ignoreConfig InterfaceInheritance.ts

# Run the compiled JavaScript
node InterfaceInheritance.js
```

---

*TypeScript Version: 6.0.3*
*Chapter: 06 — Interface and Inheritance*
