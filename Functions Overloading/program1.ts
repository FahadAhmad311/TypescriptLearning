function makeDate(timestamp: number) : Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?:number, y?:number) : Date {
    if (d != undefined && y != undefined){
        return new Date(y, mOrTimestamp, d);
    }
    else
    {
        return new Date(mOrTimestamp);
    }
}

const d1 = makeDate(23456);
const d2 = makeDate(3,7,9);
//const d3 = makeDate(2,5); //No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.

console.log(d1);
console.log(d2);