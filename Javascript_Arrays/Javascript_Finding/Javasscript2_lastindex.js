// Array.lastIndexOf(searchElement[, fromIndex = Array.length - 1])
// The lastIndexOf() method returns the index of the last occurrence of the searchElement in the array.
//  It returns -1 if it cannot find the element.

let scores = [10, 20, 30, 10, 40, 20];
let index = scores.lastIndexOf(30, 5);
// if it couldot fnd then it returns -1
console.log(index); // 4