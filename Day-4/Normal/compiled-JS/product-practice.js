"use strict";
const product1 = {
    name: "Keyboard",
    price: 999
};
const product2 = {
    name: "Mouse",
    price: 499
};
const product3 = {
    name: "headphones",
    price: 1499
};
const products = [product1, product2, product3];
// Extracting the productNames using MAP func
const productNames = products.map((product) => {
    return product.name;
});
console.log(productNames);
// Extracting Conditional products based on price using the map func
const affordableProducts = products.filter((product) => {
    return product.price < 1000;
});
console.log(affordableProducts);
// Chaining the map along with the Filter
const discountedProductNames = affordableProducts.map((product) => {
    return product.name;
});
console.log(discountedProductNames);
