//Conventional variable declaration 
let id: number = 10;

type empID = number;     //Aliasing the number type to empID, empID has now become a data type.
let id1 : empID = 100;
let id2 : empID = 101;

//Now let's see a bit more complex example: custom made object type (Aliases)
type employee = {
    empName : string;
    empId : number;
};

let emp1: employee = {
    empName : "Tamim Khan",
    empId : 20476581
}

//Another example (with functin): here Input is a custom made type that can hold string, nummber or boolean

type Input = string | number | boolean;   
function display(value : Input)
{
    console.log(value);
}

display("Nakib Khan");
display(20476581);
display(true);