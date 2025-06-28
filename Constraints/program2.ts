function getProperty<T,K extends keyof T>(obj: T, key: K){
    return obj[key];
}

const user11 = {firstname: "Fahad", age: 22};
const firstname = getProperty(user11, 'firstname');
const age = getProperty(user11,"age");

console.log(firstname);
console.log(age);

//const email = getProperty(user11,"email"); //Argument of type '"email"' is not assignable to parameter of type '"firstname" | "age"'