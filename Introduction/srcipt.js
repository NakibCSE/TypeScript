//Check whether the JS file is connected or not
console.log("Assalamualikum, from JavaScript file!");


//Issues in javascrit: Demonstration.
//Type safety issue
var marks = 10;   
marks = "Nakib";    //This is not should be, But JS is not identifying it. 
console.log(marks);

//Lack of syntex checking, Direct execution (no compilation)
studentName = "Nakib Khan";   //Without declaring, we are assigning value to a variable.
console.log(studentName);

function fun1()
{
    console.log("Assalamualikum, from fun1()");
}
fun1();  //It's fine

fun2(); // But let say for example by mistakenly we call fun2(), but JS is not complainging that is not checking the syntex. (We have to go to the browser console to see the error)


//From the above issues of course it is not readable and maintainable.
//It is not object oriented
//From the above example we can see that it is not compiling the code, it's directly executing.