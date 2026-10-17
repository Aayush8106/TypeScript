"use strict";
const product1 = {
    id: 1,
    name: "Keyboard",
    price: 999
};
const product2 = {
    id: 2,
    name: "Mouse",
    price: 499
};
const product3 = {
    id: 3,
    name: "Headphone",
    price: 1499
};
const products = [product1, product2, product3];
const productNames = products.map((curr) => {
    return curr.name;
});
console.log(productNames);
const affordableProducts = products.filter((curr) => {
    return curr.price < 1000;
});
console.log(affordableProducts);
const foundProduct = products.find((curr) => {
    return curr.name === "Mouse";
});
console.log(foundProduct);
const expensiveProduct = products.find((curr) => {
    return curr.price > 1000;
});
console.log(expensiveProduct);
const cheapProductNames = products.filter((curr) => {
    return curr.price < 1000;
}).map((curr) => {
    return curr.name;
});
console.log(`Cheap Products: ${cheapProductNames}`);
