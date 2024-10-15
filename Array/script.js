"use strict";
//Array
let numbers = [1, 2, 3, 4];
console.log(numbers);
//Adding new element to the existing array
numbers.push(5);
console.log(numbers);
//Want to fetch and reassign array elemetn ? see how you can do that
let updatedArray = numbers.filter((n) => n > 2);
console.log(updatedArray);
let updatedArray2 = numbers.map((n) => n * n);
console.log(updatedArray2);
//Printing the array element one by one
for (let i = 0; i < 5; i++) {
    console.log(numbers[i]);
}
//Trying to print out of array range: it will not throw any error. Instead it will show undefined
for (let i = 0; i < 6; i++) {
    console.log(numbers[i]);
}
//Foreach loop to print the all elemetns: It's advantage is we have not to be worry about starting and ending position
numbers.forEach((n) => {
    console.log(n);
});
//Readonly property of array
let numbers1 = [1, 2, 3, 4, 5];
//numbers1.push();  //It will not allow to push
//Array of object: that is the element of the array will be an object
let listOfEmp = [
    {
        empName: "Mark Zu",
        salary: 1000,
    },
    {
        empName: "Elon Ma",
        salary: 2000,
    },
    {
        empName: "Bill ga",
        salary: 2040,
    },
];
console.log(listOfEmp);
//Fetching the emp name only
let listOfEmpName = listOfEmp.map((ob) => ob.empName);
console.log(listOfEmpName);
let listOfEmpUpdated = listOfEmp.filter((sal) => sal.salary > 1000);
console.log(listOfEmpUpdated);
//Array destructing
let [n1, n2, n3] = [1, 2, 4];
console.log(n1);
console.log(n2);
console.log(n3);
let [peraon1, person2] = ["Nakib", "Rakib"];
console.log(peraon1);
console.log(person2);
peraon1 = "Khan";
person2 = "Shahed";
console.log(peraon1);
console.log(person2);
//Array with a constructor
let arr = new Array(1, 3, 5);
//Conventional array declaration
let x = [1, 3, 43, 3]; //Behind the scene it actually use the constructor
