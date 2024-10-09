
function compare(n1, n2)
{
    if(n1>n2){
        console.log("N1 is bigger");
    }
    else
    {
        console.log("N2 is bigger");
    }
}

compare("1",2);   //No error, no output
 //We should give two number, but we are giving one number and one string which is not right. See JS is not complaining

//We can validate it with applying some condition
function compare2(n1, n2){
    if(typeof(n1) === Number && typeof(n2) == Number)
    {
        if(n1>n2)
        {
            console.log("N1 is bigger");
        }
        else
        {
            console.log("N2 is bigger");
        }
    }
    else
    {
        console.log("Invalid Type");
    }
} 

compare2("1",1); //Will give the output Invalid Type
compare2(1,2);

//We can solve this issue very easily using TS, as TS is strongly typed