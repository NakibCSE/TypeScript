"use strict";
//Generic
function Display(Value1, Value2) {
    console.log(Value1);
    console.log(Value2);
}
Display("Nakib", "Khan");
Display(123, 32);
//Multiple types
function DisplayV2(Value1, Value2) {
    console.log(Value1);
    console.log(Value2);
}
//Return type in generic
function Assign(Value) {
    return Value;
}
let n1 = Assign(1);
let s1 = Assign("Nakib Khan");
let b1 = Assign(true);
let emp1;
emp1 = Assign({
    name: "Nakib",
    ID: 20476581,
});
//Issue could arrais in Generic
function concat(value1, Value2) {
    //   return value1 + Value2;                              this is an issue
    return value1;
}
//Generic with array
function DisplayLogs(logs) {
    logs.forEach((log) => {
        console.log(log);
    });
}
DisplayLogs(["App started", "Taking request", "Shutting down", "Starting again"]);
DisplayLogs([1, 2, 3, 4, 5, 4]);
//Generic class
class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    getKey() {
        return this.key;
    }
    getValue() {
        return this.value;
    }
}
let p1 = new Pair("Name", "Navid");
let p2 = new Pair("ID", 22222);
let p3 = new Pair("IsManager", true);
