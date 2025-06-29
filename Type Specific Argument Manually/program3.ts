//Combining customs type
function combinee<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

type Cat = {name: string; meows: boolean};
type Dog = {name: string; barks: boolean};

const cats: Cat[] = [{name: "Milo",meows: true}];
const dogs: Dog[] = [{name: "Peter", barks: true}];

/*console.log(cats);
console.log(dogs);*/

const pets = combinee<Cat | Dog>(cats, dogs);
console.log(pets);