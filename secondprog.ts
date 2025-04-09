const num1 = 5;
const num2 = 4;

const sum = num1 + num2;
console.log("Sum is ",sum);

const user = {
    name : "Fahad",
    age : 21
}
let aa = user.age;
console.log(aa);
//bb = user.location; // Property 'location' does not exist on type '{ name: string; age: number; }'.
let cc = user.name
console.log(cc);
console.log("Myself",user.name,"Ahmad");

const announcement = "Graduated!.."
let aaa = announcement.toLocaleLowerCase();
//let bbb = announcement.toLocalLowerCase();
console.log(aaa);