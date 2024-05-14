// remainder operator 
// in javascript remainder operator is not same as Modulus operator 
// however it is like modulus operator
// The sign of the remainder is the same as the sign of the dividend.


// example sign is as same as dividend
let remainder = 5 % -2;
console.log(remainder); // 1

remainder = -5 % 2;
console.log(remainder); // -1

// To get a modulo in JavaScript, you use the following expression:
// ((dividend % divisor) + divisor) % divisor
const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividen and divisor have the same sign
console.log('remainder:', 5 % 3); // 2
console.log('modulo:', mod(5, 3)); // 2

// dividen and divisor have the different signs
console.log('remainder:', -5 % 3); // -2
console.log('modulo:', mod(-5, 3)); // 1
