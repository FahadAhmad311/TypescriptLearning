function identity<T>(value: T): T {
    return value;
}
const str = identity("Fahad Ahmad");
const num = identity(345);

console.log(str);
console.log(num);