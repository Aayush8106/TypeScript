"use strict";
// Normal variables
let myName = "Aayush";
let age = 20;
let isLearning = true;
// Arrays
let fruits = ["Apple", "Mango", "Orange"];
fruits.push("guvava");
let numbers = [10, 20, 30];
numbers.push(22);
// using the custom object template for multiple users
let user1 = {
    name: "Aayush",
    age: 20
};
let user2 = {
    name: "Rahul",
    age: 22
};
// Functions
function greet(name) {
    // console.log("Hello, "+name);
    return "Hello, " + name;
}
let message = greet("Aayush");
console.log(message);
