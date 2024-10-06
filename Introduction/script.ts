//Demonstration of advantages with TS over JS

//Type safety
var marks = 10;
marks = "Nakib";  //It's immediately giving error, so we can't assign a string to a number variable: this is what should be from a programmer prespective.
marks = 1000;     // This is fine
console.log(marks); 


//Well syntex checking
studentName = "Nakib Khan";   //When we are trying to assign a value to a variable that is not declared yet, it's not going to allow us.

function fun1()
{
    console.log("Assalamualikum, I am from fun1()");
}

fun2();  //It's giving error, this is what should be.

//Making it's more radable and maintainable Typescript is having many more OOP functionalities like class, namespces, generic etc.. 
//In TS compilation first then execution. 