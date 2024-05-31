function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice = getNetPrice(100, 0.05, false) as number ;


// Note that a type assertion does not carry any type casting. 
// It only tells the compiler which type it should apply to a value for the type checking purposes.
console.log(netPrice);
console.log(typeof(netPrice))

// The alternative Type Assertion syntax
let netPrice1 = <number>getNetPrice(100, 0.05, false);
console.log(netPrice)