//Classes
class BankAccount {
  public readonly accountNumber: number;
  public accountName: string;
  private accountBalance: number;
  private debitCharges : number = 5;
  private numberOfDebit : number = 0;
  private static count : number = 0;
  constructor(
    accountNumber: number,
    accountName: string,
    accountBalance: number = 0
  ) {
    //Incrementing count
    BankAccount.count += 1;
    this.accountBalance = accountBalance;
    this.accountNumber = accountNumber;
    this.accountName = accountName;
  }
  public debit(amount : number) {
    if(amount >= 10)
    {
      this.numberOfDebit += 1;
      console.log("Debit : " + this.numberOfDebit)
      console.log("Doing debit of "+amount);
      if(this.numberOfDebit > 3)
      {
        console.log("Debit charges applied : "+this.debitCharges);
        this.accountBalance = this.accountBalance - amount - this.debitCharges;
      }
      else
      {
        this.accountBalance = this.accountBalance - amount;
      } 
    }
    else
    {
      console.log("Invalid amount to debit...");
      
    }
  }
  public credit(amount:number) {
    if(amount >= 10)
    {
      console.log("Doing credit of "+ amount);
      this.accountBalance = this.accountBalance + amount;
    }
    else
    {
      console.log("Invalid amount to credit...");
      
    }
    
  }
  public showBalance()
  {
    console.log("Balance : " + this.accountBalance);
    
  }
  public static getCount()
  {
    return BankAccount.count;
  }
}


let account1 = new BankAccount(101,"Nakib", 1000);
console.log(account1);

let account2 = new BankAccount(102, "Khan", 1500);
//account2.debit();
//account1.credit();

//Making the third parameter optional : we can achive it in two ways (1) Optional perameter (2) Default value
let account3 = new BankAccount(103, "Ashik");

//account1.accountBalance = 300;           //After making the field private it is now inaccessible.
//console.log(account1.accountBalance);

account1.showBalance();
account1.credit(12);
account1.showBalance();
account1.debit(20);
account1.showBalance();
account1.debit(20);
account1.showBalance();
account1.debit(20);
account1.showBalance();
account1.debit(20);
account1.showBalance();
account1.debit(50);
account1.showBalance();
account1.debit(50);
account1.showBalance();



console.log("Number of account created is = "+BankAccount.getCount());
