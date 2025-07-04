"use strict";
function printFullName(user) {
    if (user.middleName) {
        console.log(`${user.firstName}, ${user.middleName}, ${user.lastName}`);
    }
    else {
        console.log(`${user.firstName}, ${user.lastName}`);
    }
}
printFullName({ firstName: "Fahad", lastName: "Ahmad" });
printFullName({ firstName: "Ahmad", middleName: "Saeed", lastName: "Bangash" });
