"use strict";
function doSomething(fn) {
    console.log(fn.description + "returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description ";
doSomething(myFunc);
//# sourceMappingURL=program3.js.map