"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Greetings!, my name is ${this.name} and i'm ${this.age} years old.`);
    }
}
const Student1 = new Student("Ahmad Saeed", 23);
Student1.greet();
