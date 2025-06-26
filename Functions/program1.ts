function greeterr(fn:(a:string) => void){
    fn("Fahad Ahmad")
}

function printToConsole(s: string ){
    console.log(s);
}

greeterr(printToConsole)