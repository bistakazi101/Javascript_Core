"use strict";
// here the typesvcript gusses the type of the variable by the value assigned to it.
// it is also known as type inference.
// in type annotatio ytou gusses the value in typescript 
function increment(counter) {
    return counter++;
}
let counter1;
// it uses uses the best common type algorithm to analyze 
// each candidate type and select the type that is compatible with all other candidates.
let items = [1, 2, 3, null];
// // here the typescript will say group of arrays 
// When TypeScript cannot find the best common type, it returns the union array type. For example:
// let arr = [new Date(), new RegExp('\d+')];
