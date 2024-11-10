//Classes
class BankAccount {
  accountNumber: number;
  accountName: string;
  accountBalance: number;

  constructor(
    accountNumber: number,
    accountName: string,
    accountBalance: number
  ) {
    this.accountBalance = accountBalance;
    this.accountNumber = accountNumber;
    this.accountName = accountName;
  }
  debit() {
    console.log(
      "Debit is being called for the account number: " + this.accountNumber
    );
  }
  credit() {
    console.log(
      "Credit is being called for the account number: " + this.accountNumber
    );
  }
}


let account1 = new BankAccount(101,"Nakib", 1000);
console.log(account1);

let account2 = new BankAccount(102, "Khan", 1500);
account2.debit();
account1.credit();