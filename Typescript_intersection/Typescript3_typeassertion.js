"use strict";
function getNetPrice(price, discount, format) {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice = getNetPrice(100, 0.05, false);
// Note that a type assertion does not carry any type casting. 
// It only tells the compiler which type it should apply to a value for the type checking purposes.
console.log(netPrice);
console.log(typeof (netPrice));
// The alternative Type Assertion syntax
let netPrice1 = getNetPrice(100, 0.05, false);
console.log(netPrice);
