"use strict";
const numbers = [10, 20, 30, 40, 50];
// Printing this Arr using forEach loop
numbers.forEach((number) => {
    console.log(number);
});
const newNumbers = [5, 15, 25, 35];
// Printing this Arr using Map func
const doubledNumbers = newNumbers.map((number) => {
    return number * 2;
});
console.log(doubledNumbers);
const ages = [12, 18, 25, 15, 30];
// Printing conditional elements using filter func
const adults = ages.filter((age) => {
    return age >= 18;
});
console.log(adults);
const ofNumbers = [10, 20, 30, 40, 50, 60];
// Printing with forOf func
for (const number of ofNumbers) {
    console.log(number);
}
// Printing indexes and values using forIN loop (Note:for in loop only returns key/indexes not the actual value)
for (const indexes in ofNumbers) {
    console.log(`${indexes} : ${ofNumbers[indexes]} `);
}
/*
| Method    | Main Use Case                        | What It Accesses | Returns                   | When to Use                                  |
|-----------|--------------------------------------|------------------|---------------------------|----------------------------------------------|
| forEach() | Perform an action on each element    | Each value       | undefined                 | Logging, displaying, or processing each item |
| map()     | Transform each element               | Each value       | New array                 | Creating modified values                     |
| filter()  | Select elements by a condition       | Each value       | New array                 | Getting elements that match a condition      |
| for...of  | Loop through values                  | Each value       | No array (loop statement) | Custom logic; supports break and continue    |
| for...in  | Loop through enumerable keys/indexes | Each key/index   | No array (loop statement) | Iterating over object properties             |
*/
/*
Quick Rule:
forEach() -> Do something
map()     -> Transform
filter()  -> Select
for...of  -> Loop through values
for...in  -> Loop through keys
*/
/*
Loop Control:
for...of  -> A controlled loop. You can use break to stop it and continue to skip an iteration.
forEach() -> An array method that runs a callback for each element, but gives you less control over the loop.
*/ 
