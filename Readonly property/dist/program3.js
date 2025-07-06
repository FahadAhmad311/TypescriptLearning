"use strict";
let writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
