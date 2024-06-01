"use strict";

// 3 Pragmatic Uses of JavaScript Array slice() Method
// The slice() method accepts two optional parameters as follows:
// slice(start, stop);
// The slice() method extracts up to stop-1
// The slice() returns a new array that contains the elements of the original array. 
// It’s important to keep in mind that the slice() method performs the shallow copy of elements to the new array only. 
// In addition, it doesn’t change the source array.
// 1.copy a portion of an array 
var numbers = [1, 2, 3, 4, 5, 6]; // here the slice methods return the clone of an array 

var newarray = numbers.slice(0, 3); // her you can see the numbers of items stop-1

console.log(newarray); // clone an array 

var clonearray = numbers.slice();
console.log(clonearray);