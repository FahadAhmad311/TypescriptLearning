interface someType{
    readonly pro : string;
}

function doSomething(obj:someType){
    console.log(`Prop has the value ${obj.pro}`);
   // obj.pro = "Someobj";//Cannot assign to 'pro' because it is a read-only property.
}

doSomething({pro:"Fahad Ahmad"})