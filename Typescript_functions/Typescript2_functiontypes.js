"use strict";
// Introduction to TypeScript function types
// A function type has two parts: parameters and return type. When declaring a function type, 
// you need to specify both parts with the following syntax:
// (parameter: type, parameter:type,...) => type
let add1;
add1 = (a, b) => {
    console.log(a + b);
};
add1(10, 20);
let add3 = function (x, y) {
    return x + y;
};
console.log(add3(10, 20));
