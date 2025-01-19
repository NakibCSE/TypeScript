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

