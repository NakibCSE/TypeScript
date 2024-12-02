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

interface BankStandard {
  idProof:string;
  helpline:() => void;
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

class BusinessBankAccount implements BankAccount, BankStandard{
    accountNumber: string; 
    accountName: string;
    accountBalance: number;
    idProof: string = 'BAcc';

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
  helpline(){
    console.log("Hello form Businessbank account helpline.....");
  }
}
let StudentAcc1 = new StudentBankAccount(101, "Mr. Khan", 1000);
let BusinessAccount = new BusinessBankAccount("201", "Tamim Agro", 2000);


//Interface as type and utility types: Partial, Required, Omit, Pick
console.log("Practice interface as a type");
interface Employee{
  name: string;
  city: string;
  skill: string[]; 
}

let emp1: Employee = {
  name : "Nakib Khan",
  city : "Chattogram",
  skill : ["C#", "Dot Net", "Angular", "Typescript"],
};

let emp2: Partial<Employee> = {
  name : "Nakib Khan",
  city : "Chattogram",
};

let emp3:Required<Employee> = {
  name : "Nakib Khan",
  city : "Chattogram",
  skill : ["C#", "Dot Net", "Angular", "Typescript"],
};


let emp4: Omit<Employee, "skill"> = {
  name : "Nakib Khan",
  city : "Chattogram",
  //skill : ["C#", "Dot Net", "Angular", "Typescript"],
};

let emp5: Pick<Employee, "name" | "city">  = {
  name : "Nakib Khan",
  city : "Chattogram",
  //skill : ["C#", "Dot Net", "Angular", "Typescript"],
};
