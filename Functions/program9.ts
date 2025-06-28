function merge<T, U>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
}

const user1 = merge ({name: "Fahad Ahmad", age: 22},{residence:"Kohat", occupation: "Software Engineer"});
console.log(user1);