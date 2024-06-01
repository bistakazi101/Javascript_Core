// the unshift add an element to first of an array and returns the length of an array 
let numbers = [1,2,3,4,5];
const length = numbers.unshift(100,200);
console.log(length);
console.log(numbers)

// using unshift to add another array 

let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];
let length1 = days.unshift(...weekends);
console.log(length1);
console.log(days);