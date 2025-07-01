function sum(num1: number, num2: number) : number;
function sum(num1: number, num2: number, num3: number) : number ;
function sum(num1: number, num2: number, num3?: number) : number {
    if (typeof num3 == "number"){
        return num1 + num2 + num3;
    }
    else
    {
        return num1 + num2;
    }
}
const s1 =  sum(3,7);
const s2 = sum(7,4,8);

console.log(s1);
console.log(s2);