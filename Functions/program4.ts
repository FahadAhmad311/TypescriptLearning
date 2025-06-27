//Construct Signature
type someConstruct = {
    new (s: string): someObject;
};
function fn(ctor:someConstruct){
    return new ctor("Fahad");
}