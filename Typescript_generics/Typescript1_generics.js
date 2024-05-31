"use strict";
// TypeScript generics allow you to write reusable and generalized forms of functions, classes,
//  and interfaces.
function getRandomNumberElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
// To get a random element of an array, you need to:
// Find the random index first.
// Get the random element based on  the random index.
let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));
let colors = ['red', 'green', 'blue'];
console.log(getRandomNumberElement(colors));
