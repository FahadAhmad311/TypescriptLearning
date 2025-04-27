function printName(obj:{first: string, last?: string }){
    return ` My name is ${obj.first} ${obj.last}`;
}
let n1 = printName({first: "Fahad"});// Optional Parameter
let n2 = printName({first: "Fahad", last: "Ahmad"});
console.log(n1);
console.log(n2);