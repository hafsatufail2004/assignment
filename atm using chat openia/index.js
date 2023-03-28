class MyATM {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log("Insufficient balance");
        }
        else {
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
export {};
