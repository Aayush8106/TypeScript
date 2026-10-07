"use strict";
// Working with a return function
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10));
// Working with a optional parameters return function
function greet(name, age) {
    console.log(`My Name is ${name} and Age is ${age}`);
}
greet("Aayush", 20);
// ? = number | Undefined in the above parameter given to the func so it becomes optional
// Working with a return function with default value
function chek(name, age = 18) {
    console.log(`My Name is ${name} and Age is ${age}`);
}
chek("Aayush", 21);
// Note that default parameter and optional parameter behaves same but cannot be used togeather.
// Moving towards Union Types
let age = 20;
console.log(`Type of Age ${age} is: ` + typeof age);
// changing its type to string
age = "20";
console.log(`Type of Age ${age} is: ` + typeof age);
// Type Narrowing and union types as a func parameter
function printId(id) {
    if (typeof id === "number") {
        console.log("This is a number:", id);
    }
    if (typeof id === "string") {
        console.log("This is a string:", id);
    }
}
printId(101);
printId("101");
// implimenting this type object as a custom data type
let users = [
    {
        name: "Aayush",
        age: 20
    },
    {
        name: "Rahul",
        age: 22
    },
];
console.log(users);
// pushing a new value to the arr
const newUser = {
    name: "Unknown",
    age: NaN
};
users.push(newUser);
console.log("New User added , Arr->", users);
