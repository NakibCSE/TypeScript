//Functions :
//Starting with a very basic function that add two numbers

function add(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(add(10, 3));

function add2(n1: number, n2: number, n3: number): number {
  return n1 + n2 + n3;
}
console.log(add2(10, 3, 5));

//Function with optional perameter
function add3(n1: number, n2: number, n3?: number): number {
  return n1 + n2 + (n3 || 0);
}
console.log(add3(10, 3));

//Another way for optional perameter
function add4(n1: number, n2: number, n3: number = 0): number {
  return n1 + n2 + n3;
}
console.log(add4(10, 3));

function displayLog(log: string, log2: string) {
  console.log(log);
  console.log(log2);
}
displayLog("Log 1", "Log 2");

//Use of rest param: we use it when we are not sure how many parameter it requires
console.log("Practice rest parameter..");

function displayLogRest(...logs:string[])
{
  logs.forEach(element => {
    console.log(element);
  });
}
displayLogRest("Log 1", "Log 2", "Log 3");


//Arrow functins example
let add1 = (n1:number, n2: number): number => {
  return n1 + n2;
}


//If we don't need to return anything from the function, it can written as below
let add5  = () =>
{
  console.log("Assalammualikum From the simplest arrow function...");
  
}

add5();

//Function as a parameter
function takeAction(n1: number, n2:number, fun:any)
{
  fun(n1, n2);
}

takeAction(1, 2, (n1:number, n2:number) => {
  console.log(n1 + n2);
  
});

takeAction(3,5, (n1:number, n2:number) =>
{
  console.log(n1 * n2);
  
});

//Annonymous functino constructor

let multi = new Function("n1", "n2", "return n1*n2")
console.log(multi(10,10));

//Casting
function displayLength(input : String | Number)
{
    if(typeof input === "string")
    {
        console.log((input as String).length);   
    }
    else
    {
        console.log("Sorry length calculation is possible for string only...");
        
    }
}
displayLength("Nakib Khan");
displayLength(400);

//Casting with HTML
let input = document.getElementById("input") as HTMLInputElement;
console.log(input.value);