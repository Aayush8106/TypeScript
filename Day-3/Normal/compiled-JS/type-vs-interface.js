"use strict";
const product1 = {
    id: 1,
    name: "Phone",
    price: 9999,
    inStock: true,
};
const product2 = {
    id: 2,
    name: "Phone-B",
    price: 6999,
    inStock: true,
    discount: 10
};
product1.name = "Phone-A";
console.log(product1);
console.log(product2);
