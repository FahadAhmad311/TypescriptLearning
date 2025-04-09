//Parameters type function annotation.

const greetingss = (message: string) => {
        return message;
}

console.log(greetingss("I am happy with what i have..")); 

let addition = (num1: number, num2: number) => {
    return num1 + num2;
}

let division = (num1: number, num2: number) => {
    return num1 / num2;
}


let multiplication = (num1: number, num2: number) => {
    return num1 * num2;
}

let subtraction = (num1: number, num2: number) => {
    return num1 - num2;
}

console.log("Addition is: "+addition(3,6));
console.log("Division is: "+division(45,3));
console.log("Multiplcation is: "+multiplication(34,67));
console.log("Subtraction is: "+subtraction(78,25));