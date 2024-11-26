//Interfaces
interface BankAccount {
  accountNumber: number | string;
  accountName: string;
  accountBalance: number;

  debit:(amount: number) => void;
  credit:(amount: number) => void;
}

interface BankAccountV2 extends BankAccount{
  netBanking: () => void;
}

class StudentBankAccount implements BankAccountV2 {
  accountNumber: number;
  accountName: string;
  accountBalance: number;

  constructor(
    accountNumber: number,
    accountName: string,
    accountBalance: number
  ) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.accountBalance = accountBalance;
  }

  debit(amount: number) : void
  {
    console.log("Debit is happening in Student Bank Account."); 
  }
  credit(amount: number) : void
  {
    console.log("Debit is happening in Student Bank Account."); 
  }
  netBanking(): void
  {
    console.log("Student netBanking...");
    
  }
}

class BusinessBankAccount implements BankAccount{
    accountNumber: string; 
    accountName: string;
    accountBalance: number;

    constructor(accountNumber : string, accountName:string, accountBalance:number)
    {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    
  debit(amount: number) : void
  {
    console.log("Debit is happening in Student Bank Account."); 
  }
  credit(amount: number) : void
  {
    console.log("Debit is happening in Student Bank Account."); 
  }
}
let StudentAcc1 = new StudentBankAccount(101, "Mr. Khan", 1000);
let BusinessAccount = new BusinessBankAccount("201", "Tamim Agro", 2000);
