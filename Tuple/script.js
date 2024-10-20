"use strict";
//Tuples
let t = [1, 4, 5];
let x = ["Kahn", "Nakib", "IT"]; //These two are array as they are holding the same type data
let z = [1, "Nakib", true]; //This is tupe as it is holding different type value
function display(pair) {
    console.log(pair[0]);
    console.log(pair[1]);
    console.log(pair[0].length);
    //console.log(pair[1].length);  //Will give error as number does not a property named length
    pair.push("Khan Shaheb"); // We can also push new elements to the tuple
}
display(["Nakib Khan", 1]);
//Tuple destructing
function display2([empName, empID]) {
    console.log("Employee Name : " + empName);
    console.log("Employee ID : " + empID);
}
display2(["Khan Shaheb", 20476581]);
