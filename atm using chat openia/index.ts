interface ATM {
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
}
class MyATM implements ATM {
  balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (this.balance < amount) {
      console.log("Insufficient balance");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance is ${this.balance}`);
    }
  }
}
const myATM = new MyATM(1000);
console.log(`Starting balance: ${myATM.balance}`);
myATM.deposit(500);
console.log(`New balance after deposit: ${myATM.balance}`);
myATM.withdraw(200);
console.log(`New balance after withdrawal: ${myATM.balance}`);
myATM.withdraw(2000);

