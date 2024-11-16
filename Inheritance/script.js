"use strict";
//Parent class
class BankAccount {
    constructor(accountName, accountNumber, accountBalance) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
    debit() {
        console.log("Debit called");
    }
    credit() {
        console.log("Credit called");
    }
}
//Child class 1
class StudentBankAccount extends BankAccount {
    constructor(accountName, accountNumber, accountBalance, collageName) {
        super(accountName, accountNumber, accountBalance);
        this.collageName = collageName;
    }
    studentLoan() {
        console.log("Student loan called.");
    }
}
//Child class 2
class BusinessBankAccount extends BankAccount {
    constructor(businessName, accountName, accountNumber, accountBalance) {
        super(accountName, accountNumber, accountBalance);
        this.businessName = businessName;
    }
    businessLoan() {
        console.log("Business loan called.");
    }
}
let studentAcc1 = new StudentBankAccount("Nakib", 101, 1000, "ABC");
studentAcc1.credit();
studentAcc1.debit();
studentAcc1.studentLoan();
let studentAcc2 = new StudentBankAccount("Rakib", 101, 1000, "ABCD");
let businessAcc1 = new BusinessBankAccount("Khan", "PQR", 1001, 500000000);
