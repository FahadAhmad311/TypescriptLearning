function longest<Type extends {length: number}>(a: Type, b: Type) {
    if(a.length >= b.length){
        return a;
    }
    else{
        return b;
    }
}

const longestArray = longest([1,2],[3,4,5]);
const longerString = longest("Fahad","Ahmad");

console.log(longestArray);
console.log(longerString);

//const notOk = longest(10, 100);//Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.