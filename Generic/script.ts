//Generic
function Display<T>(Value1: T, Value2: T) {
  console.log(Value1);
  console.log(Value2);
}

Display("Nakib", "Khan");
Display(123, 32);

//Multiple types
function DisplayV2<T, S>(Value1: T, Value2: S) {
  console.log(Value1);
  console.log(Value2);
}

//Return type in generic

function Assign<T>(Value: T): T {
  return Value;
}

let n1: number = Assign(1);
let s1: string = Assign("Nakib Khan");
let b1: boolean = Assign(true);

let emp1: {
  name: string;
  ID: number;
};

emp1 = Assign({
  name: "Nakib",
  ID: 20476581,
});

//Issue could arrais in Generic
function concat<T>(value1: T, Value2: T): T {
  //   return value1 + Value2;                              this is an issue
  return value1;
}


//Generic with array
function DisplayLogs<T>(logs: T[]){
    logs.forEach((log) =>
    {
        console.log(log);
    });
}

DisplayLogs(
    ["App started", "Taking request", "Shutting down", "Starting again"]
);

DisplayLogs([1,2,3,4,5,4]); 

//Generic class
class Pair <T>{
    private key: string;
    private value: T;

    constructor(key: string, value: T){
        this.key = key;
        this.value = value;
    }
    getKey(): string{
        return this.key;
    }

    getValue(): T{
        return this.value;
    }
}

let p1 = new Pair("Name", "Navid");
let p2 = new Pair("ID", 22222);
let p3 = new Pair("IsManager", true);


//Generic vs Any

function AssignWithGeneric<T>(value: T) : T{
  return value;
}

function AssignWithNonNumeric(value: any):any{
  return value;
}
let numericString: string = "10";
let listOfNames: string[] = ["Nakib", "Burhan", "Rahat"];

let genericNumericString = AssignWithGeneric(numericString);
let genericListOfName = AssignWithGeneric(listOfNames);

let nonGenericNumericString = AssignWithNonNumeric(numericString);
let nonGenericListOfName = AssignWithNonNumeric(listOfNames);

console.log(parseInt(genericNumericString));
//console.log(parseInt(genericListOfName));               //Not possibel


console.log(parseInt(nonGenericNumericString));
console.log(parseInt(nonGenericListOfName));             //Possible

