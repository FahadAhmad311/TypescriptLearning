function compareById< T extends {id: number}>(a: T, b: T){
    return a.id > b.id ? a : b
}

const a = {id: 1, nameAa : "Item Aa"};
const b = {id: 2, nameBb: "Item Bb"};

//const result = compareById(a,b);//Argument of type '{ id: number; nameBb: string; }' is not assignable to parameter of type '{ id: number; nameAa: string; }'.
  //Property 'nameAa' is missing in type '{ id: number; nameBb: string; }' but required in type '{ id: number; nameAa: string; }'.
//console.log(result);