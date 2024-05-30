"use strict";
// The never type in TypeScript is a special type that represents values that never occur.
// t is used to indicate that a function never successfully returns.
// The never type is a type that contains no values. 
// It is used in situations where a function cannot possibly return a value.
function throwerror(message) {
    throw new Error(message);
}
throwerror("This is an error message");
