function minimummLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    throw new Error("Object does not meet the minimum length");
  }
}

const namee = minimummLength("Fahad", 3); 
const arr = minimummLength([1, 2, 3], 2); 
// const short = minimumLength([1, 2], 5); 

console.log(namee);
console.log(arr);