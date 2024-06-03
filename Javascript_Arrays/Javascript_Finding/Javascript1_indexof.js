// Array.indexOf(searchElement, fromIndex)
// The searchElement argument is the element that you want to find in the array.
// The fromIndex is an array index at which the function starts the search.
// Notice that the indexOf() method uses the strict equality comparison algorithm
//  that is similar to the triple-equals operator (===)
//  when comparing the searchElement with the elements in the array.

var scores = [10, 20, 30, 10, 40, 20];
// /The fromIndex argument can be a positive or negative integer. If the fromIndex argument is negative, the indexOf() method starts searching at array’s length plus fromIndex.l/ 0
let index = scores.indexOf(40);
// it returns the fuiirst occcurance of the element
console.log(index); // 0
// it uses strict comparison algorithm to compare the elements
console.log(scores.indexOf(10,2)); // 
console.log(scores.indexOf(50)); // -1
// The fromIndex argument can be a positive or negative integer. 
// If the fromIndex argument is negative, the indexOf() 
// method starts searching at array’s length plus fromIndex.

