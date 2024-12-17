class Employee {
  empName: string = "N/A";
}

//This is a commments
/*
 This is a multiline comments
*/

let city: string = "Chattogram";

console.log(city.length);

type DisplayStringOrNumberFunction = (value: String | Number) => void; //This is a type alies

function displayString(value1: string, value2: string): void {
  console.log(value1);
  console.log(value2);
}

//displayString("Hello from TS Advance Compilation");

//displayString.call(null, "Hello", 123);

//let func: DisplayStringOrNumberFunction = displayString;

class emp {
    name: string;
}

//NoUnusedLocals
function displayAny(){
  let s;
}

//NoFallThroughCaseinswitch
let i = 1;
switch(i){
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
    break;
}

//AllowUnreachableCode

function isGreaterThenFive(n: number): boolean{
  if(n<5){
    return false;
  }
  else{
    return true;
  }
  return true;
}