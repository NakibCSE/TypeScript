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
