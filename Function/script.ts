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