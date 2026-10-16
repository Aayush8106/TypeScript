"use strict";
const num = [10, 20, 30, 40, 50];
const newNum = num.filter((crElem) => {
    return crElem > 25;
});
console.log(newNum);
const doubledNum = num.map((crr) => {
    return crr * 2;
});
console.log(doubledNum);
const filteredAndDoubled = num.filter((curr) => {
    return curr > 25;
}).map((curr) => {
    return curr * 2;
});
console.log(filteredAndDoubled);
