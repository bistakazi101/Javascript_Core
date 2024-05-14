// Javascript data types 

// there is mainly 7  tyoes of data types in javascript

// 1 undefined data types 
let a;
console.log(a);
console.log(typeof (a));

// 2. Null data types
// The type null returns object it is an bug   in javascript
let b = null;
console.log(typeof (b));

// 3 Number type 
// if the number seems to be whole number then it converts to integer 
let num = 10;
let num1 = 10.5;
let price = 100.000
console.log(typeof (num));
console.log(typeof (num1));
console.log(typeof (price))

// The range of Number are as Follows 
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// The NaN is not a number 
// the NaN always return NaN if it is add or subtract 
console.log(NaN + 10);

// The NaN value is undefined so it cannot compared to itself even itself 
console.log(NaN == NaN);

// 3. String data types
// They are immutable 
let name = "sagar"
console.log(name);
let message = 'I\'m also a valid string'; // use \ to escape the single quote (')
console.log(message);

// 4. Boolean data types
// The boolean data types can be converted in following types 
console.log(Boolean('Hi')); // true
console.log(Boolean('')); // false

// 5 the symbol type 
// The symbol type is used to create unique identifiers for objects.
// it does not have specific literal, The Symbol
// function creates a new unique value every time you call it.
// It was defined in es6
let a1 = Symbol()
console.log(a1)
console.log(Symbol() == Symbol()); // false

// 6 The BigInt type 
// The bigint type represents the whole numbers that are larger than 253 –
//  1. To form a bigint literal number, you append the letter n at the end of the number:
let big = 9007199254740991n;
console.log(typeof (big));