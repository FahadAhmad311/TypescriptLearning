"use strict";
function visitForBirthday(home) {
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}
visitForBirthday({ resident: { name: "Fahad", age: 22 } });
