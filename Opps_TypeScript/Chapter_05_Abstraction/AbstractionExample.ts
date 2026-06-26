namespace AbstractionDemo {

  // WITHOUT ABSTRACTION (Bad)
  class BadBank {
    balance: number = 0;
    pin: number;

    constructor(pin: number) {
      this.pin = pin;
    }
  }

  const badBank = new BadBank(1234);
  badBank.balance = 999999;
  console.log("WITHOUT ABSTRACTION: Balance = $" + badBank.balance);

  // WITH ABSTRACTION (Good)
  class GoodBank {
    #balance: number = 0;
    #pin: number;

    constructor(pin: number) {
      this.#pin = pin;
    }

    deposit(amount: number): string {
      if (amount <= 0) return "Invalid amount";
      this.#balance += amount;
      return "Deposited: $" + amount + " | Balance: $" + this.#balance;
    }

    withdraw(amount: number, pin: number): string {
      if (pin !== this.#pin) return "Invalid PIN";
      if (amount > this.#balance) return "Insufficient funds";
      this.#balance -= amount;
      return "Withdrawn: $" + amount + " | Balance: $" + this.#balance;
    }

    getBalance(pin: number): string {
      if (pin !== this.#pin) return "Invalid PIN";
      return "Balance: $" + this.#balance;
    }
  }

  const goodBank = new GoodBank(5678);
  console.log("\nWITH ABSTRACTION - Secure:");
  console.log(goodBank.deposit(1000));
  console.log(goodBank.withdraw(200, 5678));
  console.log(goodBank.getBalance(5678));

  // CAR EXAMPLE
  class Car {
    #engineRunning: boolean = false;
    #fuelLevel: number = 100;
    #mileage: number = 0;
    brand: string;

    constructor(brand: string) {
      this.brand = brand;
    }

    startEngine(): string {
      if (this.#fuelLevel <= 0) return "No fuel";
      this.#engineRunning = true;
      return this.brand + " engine started";
    }

    drive(distance: number): string {
      if (!this.#engineRunning) return "Engine off";
      if (this.#fuelLevel < distance * 0.1) return "Not enough fuel";
      this.#mileage += distance;
      this.#fuelLevel -= distance * 0.1;
      return "Drove " + distance + "km | Fuel: " + this.#fuelLevel.toFixed(1) + "L";
    }

    stop(): string {
      this.#engineRunning = false;
      return "Engine stopped";
    }

    getInfo(): string {
      return "Mileage: " + this.#mileage + "km | Fuel: " + this.#fuelLevel.toFixed(1) + "L";
    }
  }

  const car = new Car("Toyota");
  console.log("\nCAR EXAMPLE:");
  console.log(car.startEngine());
  console.log(car.drive(50));
  console.log(car.drive(30));
  console.log(car.getInfo());
  console.log(car.stop());

  console.log("\nABSTRACTION = Hiding internal complexity");
  console.log("Private (#) fields protect data from unauthorized access");
  console.log("Public methods provide controlled interface for users");
}
