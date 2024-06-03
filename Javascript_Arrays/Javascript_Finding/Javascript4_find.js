// find(callback(element[, index[, array]])[, thisArg])
// The following example uses the find() method to search for
//  the first even number in an array of numbers:
// it returns the first occurance of the element
let numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.find(function(numbers){
    return numbers % 2 === 0;
})
console.log(even); // 2