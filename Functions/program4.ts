/* //Construct Signature
//type someConstruct = {
    //new (s: string): someObject;
};
//function fn(ctor:someConstruct){
    return new ctor("Fahad");

interface CallOrConstruct{
    (n?: number): string;
    new (s: string): Date;
}

function fn(ctor:CallOrConstruct){
    console.log(ctor(10));
    

    console.log(new ctor("10"));
}

fn(Date);*/