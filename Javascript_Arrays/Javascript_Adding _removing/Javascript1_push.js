// The javascript Array.proototype pushes the element and return the length of the array 
// The push() method returns the new value of the length property of the array object on which you call the method.

let numbers =[1,2,3,4,5];
const length = numbers.push(100,200);//trying to append multiple value s 
// Here the push methods return th evalue sof the array 

console.log(length);

// using push to append value of another  array 
let colors =[ "red","green","blue"];
let newColors =["black","white"];
let length1=colors.push(...newColors)
console.log(length1)
console.log(colors)
