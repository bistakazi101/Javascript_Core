// Javascript symbols in Javascript1_symbols.js
// The symbol does not have a literal form 
// the symbol function cerate a new value each time you call 
let s = Symbol();
console.log(Symbol() === Symbol());


let firstName= Symbol("sagar");
let lastName= Symbol("bista");
console.log(firstName);
console.log(lastName);
console.log(typeof firstName);



// sharing symbol 
let ssn= Symbol.for("ssn");
let citizenID = Symbol.for('ssn');
console.log(ssn === citizenID); // true
console.log(Symbol.keyFor(citizenID)); // 'ssn'

// Using symbols as unique values
