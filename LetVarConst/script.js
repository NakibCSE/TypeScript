"use strict";
//Magic of let
//Let var
var a = 10;
if (true) {
    //Some business logic
    var a = 100;
}
console.log(a); //It prints 100, which is a problem if we want to have separately available value for business logic
//We can solve this issue with let 
let x = 10;
while (true) {
    //Business logic
    let x = 100;
}
console.log(x);
