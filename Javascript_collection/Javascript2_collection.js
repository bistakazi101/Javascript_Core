// Weakmap in javascript 
// similar to map but the keys of weakmap should be an object 
// Elements of a WeakMap cannot be iterated.
// Cannot clear all elements at once.
// Cannot check the size of a WeakMap.
let weakMap = new WeakMap();

let key1 = {};
let key2 = {};

weakMap.set(key1, 'value associated with key1');
weakMap.set(key2, 'value associated with key2');

console.log(weakMap.get(key1)); // Outputs: 'value associated with key1'
console.log(weakMap.has(key2)); // Outputs: true

weakMap.delete(key1);
console.log(weakMap.has(key1)); // Outputs: false
