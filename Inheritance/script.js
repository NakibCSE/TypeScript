"use strict";
//Parent class
class BankAccount {
    constructor(accountName, accountNumber, accountBalance) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
    debit(amount) {
        console.log("Debit called from parent class..");
        let updatedBalance = this.accountBalance - amount;
        if (updatedBalance < 0) {
            console.log("Not allowed debit..");
        }
        else {
            this.accountBalance = this.accountBalance - amount;
        }
    }
    credit() {
        console.log("Credit called");
    }
    showBalance() {
        console.log(this.accountBalance);
    }
}
//Child class 1
class StudentBankAccount extends BankAccount {
    constructor(accountName, accountNumber, accountBalance, collageName, branch) {
        super(accountName, accountNumber, accountBalance);
        this.collageName = collageName;
        this.branch = branch;
    }
    studentLoan() {
        console.log("Student loan called.");
    }
    netBanking() {
        console.log("netBanking for student users..");
    }
}
//Child class 2
class BusinessBankAccount extends BankAccount {
    constructor(businessName, accountName, accountNumber, accountBalance, branch) {
        super(accountName, accountNumber, accountBalance);
        this.businessName = businessName;
        this.branch = branch;
    }
    //Overriding
    debit(amount) {
        console.log("Debit called from child class..");
        let updatedBalance = this.accountBalance - amount;
        if (updatedBalance < -1000) {
            console.log("Not allowed debit..");
        }
        else {
            this.accountBalance = this.accountBalance - amount;
        }
    }
    businessLoan() {
        console.log("Business loan called.");
    }
    //Abstract method implmentation
    netBanking() {
        console.log("netBanking for business users.. ");
    }
}
let studentAcc1 = new StudentBankAccount("Nakib", 101, 1000, "ABC", "Chittagong");
studentAcc1.credit();
//studentAcc1.debit();
studentAcc1.studentLoan();
let studentAcc2 = new StudentBankAccount("Rakib", 101, 1000, "ABCD", "Dhaka");
let businessAcc1 = new BusinessBankAccount("Khan", "PQR", 1001, 5000, "New Delhi");
businessAcc1.showBalance();
businessAcc1.debit(10);
businessAcc1.showBalance();
businessAcc1.debit(5900);
businessAcc1.showBalance();
businessAcc1.debit(10);
businessAcc1.showBalance();
//Test abstract method
studentAcc1.netBanking();
businessAcc1.netBanking();
//Getter and setter
class Person {
    constructor() {
        this._name = "N\A";
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
let p1 = new Person();
p1.name = "Nakib Khan";
console.log(p1.name);
