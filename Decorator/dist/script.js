"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LockClass() {
    console.log("LockClass decorator factory called.");
    return function (constructor) {
        console.log("LockClass decorator called.");
        Object.freeze(constructor);
        Object.freeze(constructor.prototype);
    };
}
let BankAccount = class BankAccount {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
    }
};
BankAccount = __decorate([
    LockClass()
], BankAccount);
class StudentBankAccount extends BankAccount {
}
function BankStandard() {
    return function (constructor) {
        constructor.prototype.createdDateTime = Math.random();
    };
}
let BankAccountt = class BankAccountt {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
    }
};
BankAccountt = __decorate([
    BankStandard()
], BankAccountt);
let acc1 = new BankAccountt(101);
let acc2 = new BankAccountt(101);
function Component(htmlCode, selector) {
    return function (constructor) {
        document.addEventListener("DOMContentLoaded", () => {
            let htmlEle = document.getElementById(selector);
            let data = new constructor();
            htmlCode = htmlCode.replace("{{numberOfOrder}}", data.numberOfOrder);
            htmlCode = htmlCode.replace("{{nextOrder}}", data.nextOrder);
            htmlEle.innerHTML = htmlCode;
        });
    };
}
let Order = class Order {
    constructor() {
        this.numberOfOrder = 684;
        this.nextOrder = 685;
    }
};
Order = __decorate([
    Component(`
  <h1>Orders = {{numberOfOrder}} <h1>
  <p>Next order = {{nextOrder}}</p>
  `, "orderDiv")
], Order);
function Trim() {
    return function (target, key) {
        let value = target[key];
        let getter = () => {
            return value;
        };
        let setter = (nextValue) => {
            value = nextValue.trim();
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
class BankAccountPr {
    constructor() {
        this.accountName = "       Nakib         ";
    }
}
__decorate([
    Trim()
], BankAccountPr.prototype, "accountName", void 0);
let accPr = new BankAccountPr();
console.log(accPr.accountName + " : Length " + accPr.accountName.length);
function UserConfirmation(message) {
    return function (target, key, descriptor) {
        let originalFun = descriptor.value;
        descriptor.value = function (...args) {
            let isOk = confirm(message);
            if (isOk) {
                let result = originalFun.apply(target, args);
                return result;
            }
            else {
                return null;
            }
        };
    };
}
class BankAccountMd {
    constructor() {
        this.accountName = "  Nakib  ";
    }
    debit() {
        console.log("Debit Successful.");
    }
    credit() {
        console.log("Credit Successful.");
    }
}
__decorate([
    UserConfirmation("Are you sure to debit from your account?")
], BankAccountMd.prototype, "debit", null);
__decorate([
    UserConfirmation("Are you sure to credit to your account?")
], BankAccountMd.prototype, "credit", null);
let accMd = new BankAccountMd();
accMd.credit();
accMd.debit();
