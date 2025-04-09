function greet(person : string, age : number, date : Date){
    console.log(`Greetings!, Myself ${person} having age ${age}, today is ${date.toDateString()}`);
}
let g = greet("Fahad Ahmad",22, new Date());
console.log(g);

//We don't always write explicit type.
const flower = "Lillies";
console.log("I like",flower);