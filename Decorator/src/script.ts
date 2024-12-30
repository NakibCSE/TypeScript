// Class Decorator

function LockClass() {
  console.log("LockClass decorator factory called.");
  return function (constructor: Function) {
    console.log("LockClass decorator called.");
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
  };
}

@LockClass()
class BankAccount {
  accountNumber: number;

  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }
}

class StudentBankAccount extends BankAccount {
  // Additional options
}

//let acc1 = new BankAccount(101);
// let acc2 = new BankAccount(101);
// let acc3 = new BankAccount((101);

//Class Decorator Example
function BankStandard() {
  return function (constructor: Function) {
    constructor.prototype.createdDateTime = Math.random();
  };
}

@BankStandard()
class BankAccountt {
  accountNumber: number;
  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }
}

let acc1 = new BankAccountt(101);
//console.log(acc1.createdDateTime);

let acc2 = new BankAccountt(101);
//console.log(acc2.createdDateTime);

//Decorator in angular way:
function Component(htmlCode: string, selector: string) {
  return function (constructor: any) {
    document.addEventListener("DOMContentLoaded", () => {
      let htmlEle = document.getElementById(selector);
      let data = new constructor();   //Creating a new instanc of the class order
      
      htmlCode = htmlCode.replace("{{numberOfOrder}}", data.numberOfOrder);
      htmlCode = htmlCode.replace("{{nextOrder}}", data.nextOrder);
      
      htmlEle!.innerHTML = htmlCode;
    });
  };
}

@Component(
  `
  <h1>Orders = {{numberOfOrder}} <h1>
  <p>Next order = {{nextOrder}}</p>
  `
  , "orderDiv")
class Order {
  numberOfOrder: number = 684;
  nextOrder: number = 685;
}
