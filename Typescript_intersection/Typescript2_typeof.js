"use strict";
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
// Typecasting using the as keyword
let a = "123";
// Here somethimes typescript may not know which type of value is comming 
let b = a;
// seconbd trype 
let c = a;
console.log(a);
