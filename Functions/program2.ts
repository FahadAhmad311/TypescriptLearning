type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction){
    fn("Fahad")
}
function sayHello(name: string){
    console.log("Greetings, "+name);
}
greeter(sayHello)

