"use strict";
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longestArray = longest([1, 2], [3, 4, 5]);
const longerString = longest("Fahad", "Ahmad");
console.log(longestArray);
console.log(longerString);
