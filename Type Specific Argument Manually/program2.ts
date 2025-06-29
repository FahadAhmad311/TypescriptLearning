function combined<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const mix = combined<string | boolean>(["yes", "no"], [true, false]);
console.log(mix); 
