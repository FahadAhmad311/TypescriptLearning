"use strict";
function makeDate(mOrTimestamp, d, y) {
    if (d != undefined && y != undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(23456);
const d2 = makeDate(3, 7, 9);
console.log(d1);
console.log(d2);
//# sourceMappingURL=program1.js.map