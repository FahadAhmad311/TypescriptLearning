"use strict";
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const user1 = merge({ name: "Fahad Ahmad", age: 22 }, { residence: "Kohat", occupation: "Software Engineer" });
console.log(user1);
//# sourceMappingURL=program9.js.map