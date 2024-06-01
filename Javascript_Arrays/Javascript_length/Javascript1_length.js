// 1.Dense arraya 
let arr1= ["sagar ", "Ram","sam","hari"];
console.log(arr1.length)
// The following push the first elememt of the array
arr1.push("Bista");
console.log(arr1.length)


// 2.sparse array 
// Which does not have contigious indexes 
let numbers =[1,2,,3,4,5];
console.log(numbers.length)

numbers[10]=10;
console.log(numbers.length)

console.log(numbers)

// Modify an array 

// empty and array 
let arr2=["sagar","ram","hari"];
arr2.length=0
console.log(arr2)

// Remove an array 
let arr3 =["sagar","ram","hari"];
arr3.length=2;
console.log(arr3)

// Increase the length of an array
let arr4 =["sagar","ram","hari"];
arr4.length=5;
console.log(arr4)