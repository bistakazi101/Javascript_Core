// Javascript arrow function 
// it is used to make the program shorter and easy


let add =(a,b)=>{return a+b};
console.log(add(2,3));
// JavaScript arrow functions with a single parameter
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths);

// Since both block and object literal use curly brackets,
//  the JavasScript engine cannot distinguish between a block and an object.
// To fix this, you need to wrap the object literal in parentheses as follows:
let setColor = color => ({value: color });

// It is a good practice
//  to use arrow functions for callbacks and closures because the syntax of arrow functions is cleaner.