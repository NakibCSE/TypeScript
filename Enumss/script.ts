//Enums examples
enum LogLevel {
  ERROR,
  INFO,
  WARNING,
}
console.log(LogLevel);
console.log(LogLevel.ERROR);
console.log(LogLevel.INFO);
console.log(LogLevel.WARNING);

function displayLog(logLevel: LogLevel, message: string) {
  if (logLevel === LogLevel.ERROR) {
    console.log("Error:" + message);
  }
  else if(logLevel === LogLevel.INFO)
  {
    console.log("Info: "+message);
  }
  else if(logLevel === LogLevel.WARNING)
  {
    console.log("Warning: "+message);
  }
}

displayLog(LogLevel.INFO, "All good.");
displayLog(LogLevel.ERROR, "Array index issue");
displayLog(LogLevel.WARNING, "All Code path not covered");

//Another example
enum HttpStatus{
    BADREQUEST = 400,
    INTERNALSERVERERROR = 500,
}

//More example
enum Direction{
    UP = "Up",
    DOWN = "Down "
}

//So in enum we can assign any constant values as per our need. Rest all will be similar.
