"use strict";
function displayProduct(config) {
    if (config.discountPercent) {
        const discountedPrice = config.price - (config.price * config.discountPercent) / 100;
        console.log(`${config.name} is now $${discountedPrice}`);
    }
    else {
        console.log(`${config.name} is $${config.price}`);
    }
}
displayProduct({ name: "Laptop", price: 1200 });
displayProduct({ name: "Phone", price: 800, discountPercent: 10 });
