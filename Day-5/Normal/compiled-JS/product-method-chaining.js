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
    name: "Headphones",
    price: 1499
};
const products = [product1, product2, product3];
const affordableProductNames = products.filter((crr) => {
    return crr.price < 1000;
}).map((crr) => {
    return crr.name;
});
console.log(affordableProductNames);
