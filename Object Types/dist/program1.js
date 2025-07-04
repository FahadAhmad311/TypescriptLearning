"use strict";
function greet(person) {
    return "Greetings!, " + person.name;
}
let g = greet({ name: "Fahad Ahmad", age: 22 });
console.log(g);
