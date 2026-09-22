class BankAccount {
    static bankName = "YES Bank";
    static minBalance = 500;
    constructor(accountNo, holderName, balance){
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    deposit(amount){
        if (amount <= 0){
            console.log("Invalid deposit amount.");
            return;
        }
        this.balance = this.balance + amount;
        console.log("Deposited : " + amount + " | New balance : " + this.balance);
    }
    withdraw(amount){
        if (amount <= 0){
            console.log("Invalid withdrawal amount.");
            return;
        }
        if (amount > this.balance) {
            console.log("Withdrawal of " + amount + " failed. Insufficient balance (available: " + this.balance + ").");
            return;
        }
        this.balance = this.balance - amount;
        console.log("Withdrawn : " + amount + " | New balance : " + this.balance);
    }
    displayBalance(){
        console.log("Account No  : " + this.accountNo);
        console.log("Holder Name : " + this.holderName);
        console.log("Balance     : " + this.balance);
    }
    static bankInfo(){
        console.log("Bank Name       : " + BankAccount.bankName);
        console.log("Minimum Balance : " + BankAccount.minBalance);
    }
}
BankAccount.bankInfo();
const acc1 = new BankAccount(1001, "Akshat", 5000);
const acc2 = new BankAccount(1002, "Ashna", 2000);
console.log("Transactions on Account 1001");
acc1.deposit(1500);
acc1.withdraw(2000);
acc1.withdraw(10000);
acc1.displayBalance();
console.log("Transactions on Account 1002");
acc2.withdraw(500);
acc2.deposit(3000);
acc2.withdraw(6000);
acc2.displayBalance();