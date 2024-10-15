"use strict";
//Union types
let n = 10; // here | is using as a union operator, it means the variable can hold both number and string
console.log(n);
n = "Mr. Khan";
console.log(n);
//Another example with a function
function display(param) {
    console.log(param);
}
display("Assalamualikum Everyone");
//display(123);  // throw error as the function cannot take a number as parameter, we solve the in the following way
function display2(param) {
    console.log(param);
    //console.log(param.length);   //again this is not allowed as all param type does not have the length property
}
display2("Mrs. Khan");
display2(2000);
display2(true);
//So now we see no error as we made the param type union type
