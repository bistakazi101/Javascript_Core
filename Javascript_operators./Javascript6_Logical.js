// logical operators in javascript 
// It reverse the values 
console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false



// logical and operator 
// if one value is true then another one is also true 
let a=10,b=20
let result = a && b;
console.log(result); // 20


// if one value is false then another value is also false 
let value1 = 10, value2 = 20, value3 = 30;
let result1 = value1 || value2 || value3;
console.log(result1); // 10
