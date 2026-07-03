# Method Overriding in TypeScript - Explained Like You're 10 Years Old! 🎂

## What is Method Overriding?

Imagine you have a **pancake recipe** from your grandmother:
- Basic recipe says: "Mix flour, eggs, milk"

But YOU want to make your own special version:
- Your recipe says: "Mix flour, eggs, milk, AND add chocolate chips!"

Your recipe **OVERRIDES** (changes) the basic recipe, but it's still pancakes!

### In Programming Terms:
**Method Overriding = Child class changes parent's method**

Parent class has a method → Child class says "I'll do it MY way!" 🎨

---

## Why Do We Override Methods? 🤔

### 1. **Customize Behavior**
You keep the same name but change what it does.

### 2. **Same Method Name, Different Results**
- Parent: `makeSound()` → "some sound"
- Child Dog: `makeSound()` → "Woof! Woof!"
- Child Cat: `makeSound()` → "Meow!"

### 3. **Reuse Parent Code**
Use `super` to get the parent's version and ADD to it.

---

## Key Concept: "super" - Your Parent's Tool 🔧

Think of `super` like calling your parent:

```typescript
class Dog extends Animal {
  makeSound(): string {
    const parentVersion = super.makeSound();  // "Animal makes a sound"
    return parentVersion + " but I say WOOF!";  // "Animal makes a sound but I say WOOF!"
  }
}
```

---

## The 4 Main Ideas

### ✅ Idea 1: Basic Override
The child class completely replaces the parent's method.

```typescript
class Animal {
  makeSound(): string {
    return "Some sound";
  }
}

class Dog extends Animal {
  makeSound(): string {  // ← This REPLACES parent's version
    return "Woof! Woof!";
  }
}
```

---

### ✅ Idea 2: Using `super`
Call the parent's version from inside the child.

```typescript
class Vehicle {
  start(): string {
    return "Engine starting...";
  }
}

class Car extends Vehicle {
  start(): string {
    const parentVersion = super.start();  // Get parent's version
    return parentVersion + " with power!";
  }
}
```

---

### ✅ Idea 3: Multi-Level Override
Grandparent → Parent → Child (each one changes it)

```typescript
class Person {
  introduce() { return "Hi, I am Person"; }
}

class Worker extends Person {
  introduce() { return super.introduce() + ", I work"; }
  // Result: "Hi, I am Person, I work"
}

class Manager extends Worker {
  introduce() { return super.introduce() + ", I manage"; }
  // Result: "Hi, I am Person, I work, I manage"
}
```

---

### ✅ Idea 4: Same Method, Different Return Values
Child calculates or returns something different.

```typescript
class Shape {
  getArea(): number { return 0; }
}

class Circle extends Shape {
  getArea(): number { return Math.PI * 5 * 5; }  // π × r²
}

class Square extends Shape {
  getArea(): number { return 4 * 4; }  // s²
}
```

---

## 🌟 Real-World Examples

### Example 1: Bank Accounts (Different Interest Rates)

**The Story:**
Your mom has two bank accounts:
- **Savings Account**: Gets 5% interest (money grows!)
- **Checking Account**: Gets 0% interest (just holds money)

Same method name `getInterest()`, but different results!

```typescript
class BankAccount {
  getInterest(): number {
    return 0;  // Base: no interest
  }
}

class SavingsAccount extends BankAccount {
  getInterest(): number {
    return this.balance * 0.05;  // 5% interest! 💰
  }
}

class CheckingAccount extends BankAccount {
  getInterest(): number {
    return 0;  // No interest for checking
  }
}
```

---

### Example 2: Payment Methods (Different Fees)

**The Story:**
You're buying something online. You have 3 payment options:
- **Credit Card**: Costs 2% fee
- **Cash**: No fee
- **Bank Transfer**: 50 cents fee

Same `process()` method, but different fees!

```typescript
class Payment {
  getProcessingFee(): number {
    return 0;  // Base: no fee
  }
}

class CreditCardPayment extends Payment {
  getProcessingFee(): number {
    return this.amount * 0.02;  // 2% fee
  }
}

class CashPayment extends Payment {
  getProcessingFee(): number {
    return 0;  // No fee for cash
  }
}
```

---

### Example 3: Employee Bonuses (Different Amounts)

**The Story:**
At your mom's company, different employees get different bonuses:
- **Manager**: Gets 15% bonus
- **Developer**: Gets 10% bonus  
- **Intern**: Gets 0% bonus

Same `getBonus()` method, different results!

```typescript
class Employee {
  getBonus(): number {
    return 0;  // Base: no bonus
  }
}

class Manager extends Employee {
  getBonus(): number {
    return this.salary * 0.15;  // 15% bonus
  }
}

class Developer extends Employee {
  getBonus(): number {
    return this.salary * 0.10;  // 10% bonus
  }
}
```

---

## 📝 Summary

| Concept | Meaning | Example |
|---------|---------|---------|
| **Override** | Child changes parent's method | Dog overrides `makeSound()` |
| **super** | Get parent's version | `super.start()` |
| **Same name, different behavior** | Methods with same name do different things | Savings vs Checking account |
| **Multi-level** | Grandparent → Parent → Child | Person → Worker → Manager |

---

## The Recipe for Method Overriding 👨‍🍳

1. **Parent class** has a method
2. **Child class** REPLACES it with `override` keyword
3. Child's version runs when you call it on a child object
4. Use `super` to get parent's version if needed
5. Different children can override the same method differently!

---

## Quick Checklist ✅

- [ ] Parent has a method
- [ ] Child extends parent
- [ ] Child defines the SAME method name (this is "overriding")
- [ ] Child's version gets called instead of parent's
- [ ] Use `super.methodName()` to call parent's version if needed

---

## Remember! 🎓

**Method Overriding = Making your own recipe based on a basic recipe**

- Keep the same method name ✅
- Change what it does ✅
- Each child class can do it differently ✅
- Use `super` when you want to use the parent's version ✅

You're overriding like a pro now! 🚀

