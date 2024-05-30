// TypeScript any vs. object
// 1.If you declare a variable with the object type, you can also assign it any value.

// However, you cannot call a method on it even if the method actually exists. For example:

let result4: any;
result4 = 10.123;
console.log(result4.toFixed());
result4.willExist(); //

// However, if you change the type of
//  the result variable to object, the TypeScript compiler will issue an error:
// let result5: object;
// result5 = 10.123;
// result5.toFixed();
// error TS2339: Property 'toFixed' does not exist on type 'object'.