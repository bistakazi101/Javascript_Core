"use strict";

// In this tutorial we wwill learn javascript splice to insert , delete and replace elements 
// 1. delete elements 
// Array.splice(position,num);
// The position specifies the position of
//  the first item to delete and the num argument determines the number of elements to delete
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // The splice returns the deleted items from the splice methods

var deletescores = numbers.splice(0, 3); // here are the remove item from th efirst index to third index 

console.log(deletescores); // adding an element in splice 
// Array.splice(position,0,new_element_1,new_element_2,...);

var colors = ["red", "green", "blue"]; // It does not remove an array thus returns an empty array 

var length1 = colors.splice(2, 0, "Yellow", "purple");
console.log(colors);
console.log(length1); //here is an empty array 
// replcing an array 

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8]; // Ir returns the remove element from an array 

var ret = arr2.splice(1, 1, "Hellow");
console.log(ret);
console.log(arr2);