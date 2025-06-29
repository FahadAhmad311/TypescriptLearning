function combine<Type>(arr1: Type[], arr2: Type[]): Type[]{
    return arr1.concat(arr2)
}

const result = combine<string | number>([23],["Fahad"])
console.log(result);