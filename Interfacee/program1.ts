interface Person {
    name : string;
    age : number;
    greet() : void; 
}

class Student implements Person{
    name: string;
    age: number;

    constructor (name : string, age : number){
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Greetings!, my name is ${this.name} and i'm ${this.age} years old.`);
    }
}

const Student1 = new Student("Ahmad Saeed",23);
Student1.greet();