interface Person {
  name: string;
  age: number;
}
 
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
 
let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};
 

let readonlyPerson: ReadonlyPerson = writablePerson;
 
console.log(readonlyPerson.age); 
writablePerson.age++;
console.log(readonlyPerson.age); 
//This will work here.