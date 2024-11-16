//Parent class
class BankAccount {
  accountName: string;
  accountNumber: number;
  accountBalance: number;

  constructor(
    accountName: string,
    accountNumber: number,
    accountBalance: number
  ) {
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
  collageName: string;
  constructor(
    accountName: string,
    accountNumber: number,
    accountBalance: number,
    collageName: string
  ) {
    super(accountName, accountNumber, accountBalance);
    this.collageName = collageName;
  }
  studentLoan() {
    console.log("Student loan called.");
  }
}

//Child class 2
class BusinessBankAccount extends BankAccount {
  businessName: string;

  constructor(
    businessName: string,
    accountName: string,
    accountNumber: number,
    accountBalance: number
  ) {
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
