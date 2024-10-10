//Number type
function compare(n1: number, n2: number) {
  if (n1 > n2) {
    console.log("N1 is bigger");
  } else {
    console.log("N2 is bigger");
  }
}

compare(1, 2);
//compare("1", 2);   // Immediately give error

//String type
function concat(s1: string, s2: string) {
  console.log(s1 + s2);
}
concat("Nakib ", "Khan");
//concat(1, "Khan"); //this is not gonna work


//Boolean type
let flg: boolean = true;

//Bigint
let x:number = 1.7976931348623157e+309+1999999999;
console.log(x);

//Symbol
let s1 = Symbol("Key1");
let s2 = Symbol("key1");
console.log(s1 === s2);

//Type assingment : Implicit vs Explicit
let x1 = 100;
//x1 = "Hello";           //Not possible, that is it took the x variable as number
let x2;
x2 = 100;
x2 = "This is a new assignment";    //It's valid as the variable x2 got any date type: it is something like let x2: any;


