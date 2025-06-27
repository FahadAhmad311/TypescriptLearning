// Generic Functions
function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}
let [newA, newB] = swap<number>(10,20);
console.log(`Swapped numbers ${newA}, ${newB}`);

let [firstA,secondB] = swap<string>("Fahad", "Ahmad");
console.log(`Swapped string ${firstA}, ${secondB}`);