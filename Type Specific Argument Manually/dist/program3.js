"use strict";
function combinee(arr1, arr2) {
    return arr1.concat(arr2);
}
const cats = [{ name: "Milo", meows: true }];
const dogs = [{ name: "Peter", barks: true }];
const pets = combinee(cats, dogs);
console.log(pets);
//# sourceMappingURL=program3.js.map