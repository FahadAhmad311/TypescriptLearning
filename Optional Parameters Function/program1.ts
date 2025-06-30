function greeting(name?: string){
    if (name){
        console.log("Hello "+name);
    }
    else
    {
        console.log("Hi, Guests");
    }
}
greeting()
greeting("Fahad Ahmad")