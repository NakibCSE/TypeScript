//Interface - Declaration merging
interface BankAccount{
    accountNumber : number;
    accountName : string; 

    debit: (amount: number) => void;
}

interface BankAccount{
    accountBalance : number;

    credit: (amount: number) => void;
}

let acc1 : BankAccount = {
    accountNumber : 101,
    accountName : "Lucky Vashkar",
    accountBalance : 140000,

    debit: (amount: number){
        console.log("Debit Successful");
    },

    credit: (amount: number){
        console.log("Credit Successful");
    },
};

//Enum declaration merging 

enum ErrorCode{
    ARRAY = "Arry",
    CLASS = "Class",
}

enum ErrorCode{
    INDEX,
}

console.log(ErrorCode.ARRAY);
console.log(ErrorCode.CLASS);

//Any vs Unknow
let val1: any;
val1 = 100;
console.log(val1);

let result = val1 + 100;

let val2: unknown;
val2 = "Nakib Khan";

if(typeof val2 == "number"){
    let result = val2 + 1;
}
else if(typeof val2 == "string")
{
    let result = val2.toUpperCase();
    console.log(result);
}
