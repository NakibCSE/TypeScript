//Parent class
abstract class BankAccount {
  accountName: string;
  accountNumber: number;
  protected accountBalance: number;
  abstract branch : string;

  constructor(
    accountName: string,
    accountNumber: number,
    accountBalance: number
  ) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.accountBalance = accountBalance;
  }
  debit(amount: number) {
    console.log("Debit called from parent class..");
    let updatedBalance = this.accountBalance - amount;
    if (updatedBalance < 0) {
      console.log("Not allowed debit..");
    } else {
      this.accountBalance = this.accountBalance - amount;
    }
  }
  credit() {
    console.log("Credit called");
  }
  showBalance() {
    console.log(this.accountBalance);
  }
   //Abstract method implmentation
  abstract netBanking() : void;
}

//Child class 1
class StudentBankAccount extends BankAccount {
  collageName: string;
  branch: string; 
  constructor(
    accountName: string,
    accountNumber: number,
    accountBalance: number,
    collageName: string,
    branch : string
  ) {
    super(accountName, accountNumber, accountBalance);
    this.collageName = collageName;
    this.branch = branch;
  }
  studentLoan() {
    console.log("Student loan called.");
  }
  netBanking(): void {
    console.log("netBanking for student users..");
    
  }
}

//Child class 2
class BusinessBankAccount extends BankAccount {
  businessName: string;
  branch: string;
  constructor(
    businessName: string,
    accountName: string,
    accountNumber: number,
    accountBalance: number,
    branch : string
  ) {
    super(accountName, accountNumber, accountBalance);
    this.businessName = businessName;
    this.branch = branch;
  }

  //Overriding
  debit(amount: number) {
    console.log("Debit called from child class..");
    let updatedBalance = this.accountBalance - amount;
    if (updatedBalance < -1000) {
      console.log("Not allowed debit..");
    } else {
      this.accountBalance = this.accountBalance - amount;
    }
  }
  businessLoan() {
    console.log("Business loan called.");
  }
  //Abstract method implmentation
  netBanking(): void {
    console.log("netBanking for business users.. ");
    
  }
}

let studentAcc1 = new StudentBankAccount("Nakib", 101, 1000, "ABC","Chittagong");
studentAcc1.credit();
//studentAcc1.debit();
studentAcc1.studentLoan();

let studentAcc2 = new StudentBankAccount("Rakib", 101, 1000, "ABCD", "Dhaka");

let businessAcc1 = new BusinessBankAccount("Khan", "PQR", 1001, 5000,"New Delhi");
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

class Person{
  private _name : string = "N\A";
  
  public get name() : string {
    return this._name;
  }
  
  public set name(v : string) {
    this._name = v;
  }
}
let p1 = new Person();
p1.name = "Nakib Khan";
console.log(p1.name);
