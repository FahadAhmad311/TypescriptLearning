//Call Signatures
type DiscribableFunction = {
    description : string;
    (someArg: number): boolean;
};

function doSomething(fn: DiscribableFunction){
    console.log(fn.description+ "returned "+fn(6));
}

function myFunc(someArg:  number){
    return someArg > 3;
}

myFunc.description = "default description ";
doSomething(myFunc);