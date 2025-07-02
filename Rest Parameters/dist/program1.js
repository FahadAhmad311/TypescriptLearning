"use strict";
function add(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
const total = add(10, 20, 30, 40);
console.log(total);
