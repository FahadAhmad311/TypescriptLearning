function printUser({name, age}: {name: string, age: number}){
    console.log(`Name: ${name}, Age: ${age}`);
}
printUser({name: "Fahad Ahmad", age: 22})