// TypeScript union type

// In TypeScript, a union type allows a variable to hold more than one type of value. 
// let value: number | string; syntax 
let value: number | string;

value = 42;         // OK
value = "hello";    // OK
// value = true;   // Error: Type 'boolean' is not assignable to type 'number | string'.
function printId(id: number | string) {
    console.log(`Your ID is: ${id}`);
}

printId(101);
printId("202"); 
