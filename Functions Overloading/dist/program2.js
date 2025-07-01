"use strict";
function sum(num1, num2, num3) {
    if (typeof num3 == "number") {
        return num1 + num2 + num3;
    }
    else {
        return num1 + num2;
    }
}
const s1 = sum(3, 7);
const s2 = sum(7, 4, 8);
console.log(s1);
console.log(s2);
//# sourceMappingURL=program2.js.map