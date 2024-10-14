"use strict";
//Object
let emp = {
    empName: "Shaheed Afridi",
    companyName: "ABC",
    salary: 10000
};
//Showing the results
console.log(emp);
console.log(emp.companyName);
console.log(emp.empName);
console.log(emp.salary);
//Trying to reassign values
emp.empName = "Khan Shaheb";
//emp.salary = "Nakib Khan";      //Not possible due to type mismatch
//Declaring object with explicitly adding type with value assignment
let emp1 = {
    empName: "Tamim Iqbal",
    companyName: "BAC",
    salary: 20000
};
//basically it's like the following
let a = 100; //declaring a variable which is explicitly typed and assigned a vlue
//It can be done in the following way too
let x; //declare first
x = 900; //thn assign value
//declare a object
let emp2;
//assign value to the object: use the radonly keyword to make it readonly, and use ? after the fiel name to make the field optional
emp2 =
    {
        ID: 'EMP-1923',
        Name: 'Nazmul Khan',
        Salary: 10000
    };
console.log(emp2);
//Readonly and optional in object
let emp3 = {
    Name: "Tamim Uddin",
    ID: 2323,
};
//emp3.Name = "Tamim Khan";    //Give error as the name field is readonly
//Onject inside a object : Nested object
let emp4 = {
    Name: "Mufti Menk",
    ID: 'EMP-1023232',
    Address: {
        Country: "Australia",
        City: "Sydny",
        Area: "MM"
    }
};
console.log(emp4.Address);
