"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const user11 = { firstname: "Fahad", age: 22 };
const firstname = getProperty(user11, 'firstname');
const age = getProperty(user11, "age");
console.log(firstname);
console.log(age);
