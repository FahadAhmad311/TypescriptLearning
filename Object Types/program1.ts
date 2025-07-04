function greet(person: {
    name: string,
    age: number
}){
    return "Greetings!, "+person.name;
}

let g = greet({name:"Fahad Ahmad", age: 22})
console.log(g);