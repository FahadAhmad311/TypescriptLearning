function getFirstElement<T>(arr: T[]) : T | undefined{
    return arr.length > 0 ? arr[0] : undefined;
}

console.log(getFirstElement<number>([2,3,5,7]));
console.log(getFirstElement<string>(["Mango","PineApple","Orange"]));