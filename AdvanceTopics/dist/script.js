"use strict";
let acc1 = {
    accountNumber: 101,
    accountName: "Lucky Vashkar",
    accountBalance: 140000,
    debit: (amount) => {
        console.log("Debit Successful");
    },
    credit: (amount) => {
        console.log("Credit Successful");
    },
};
//Enum declaration merging 
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["ARRAY"] = "Arry";
    ErrorCode["CLASS"] = "Class";
})(ErrorCode || (ErrorCode = {}));
(function (ErrorCode) {
    ErrorCode[ErrorCode["INDEX"] = 0] = "INDEX";
})(ErrorCode || (ErrorCode = {}));
console.log(ErrorCode.ARRAY);
console.log(ErrorCode.CLASS);
//Any vs Unknow
let val1;
val1 = 100;
console.log(val1);
let result = val1 + 100;
let val2;
val2 = "Nakib Khan";
if (typeof val2 == "number") {
    let result = val2 + 1;
}
else if (typeof val2 == "string") {
    let result = val2.toUpperCase();
    console.log(result);
}
