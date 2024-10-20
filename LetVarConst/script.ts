
//Magic of let

//Let var
var a = 10;
var a = 19; //Giving no error with the same name
if (true) {
  //Some business logic
  var a = 100;
}
console.log(a); //It prints 100, which is a problem if we want to have separately available value for business logic

//We can solve this issue with let
let x = 10;
//let x = 90;  //Giving error with the same name
while (true) {
  //Business logic
  let x = 100;
}

console.log(x);

//Const
const c = 100;
//c = 900;  //Reassign is not possible
//const c = 19;  //Redeclare is also not possible


//Let in details

let l = 10;
function fun1()
{
    let l = 11;
}
fun1();
console.log(l);
