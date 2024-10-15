"use strict";
//Enums examples
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
})(LogLevel || (LogLevel = {}));
console.log(LogLevel);
console.log(LogLevel.ERROR);
console.log(LogLevel.INFO);
console.log(LogLevel.WARNING);
function displayLog(logLevel, message) {
    if (logLevel === LogLevel.ERROR) {
        console.log("Error:" + message);
    }
    else if (logLevel === LogLevel.INFO) {
        console.log("Info: " + message);
    }
    else if (logLevel === LogLevel.WARNING) {
        console.log("Warning: " + message);
    }
}
displayLog(LogLevel.INFO, "All good.");
displayLog(LogLevel.ERROR, "Array index issue");
displayLog(LogLevel.WARNING, "All Code path not covered");
//Another example
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["BADREQUEST"] = 400] = "BADREQUEST";
    HttpStatus[HttpStatus["INTERNALSERVERERROR"] = 500] = "INTERNALSERVERERROR";
})(HttpStatus || (HttpStatus = {}));
//More example
var Direction;
(function (Direction) {
    Direction["UP"] = "Up";
    Direction["DOWN"] = "Down ";
})(Direction || (Direction = {}));
//So in enum we can assign any constant values as per our need. Rest all will be similar.
