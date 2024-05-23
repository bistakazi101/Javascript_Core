// Javascript map objects 

// In JavaScript, the Map object is a collection of key-value pairs where both
//  keys and values can be of any data type.
 let colors = new Map();


//  setting the element in javacript 
// Adding th eelement 
colors.set("name","sagar");
colors.set("age",20);
colors.set("class",10);

// accessing the element 

console.log(colors.get("name"));
console.log(colors.get("age"));
console.log(colors.get("class"));



// checking the elements 
console.log(colors.has('name'));




// iterating over the map function 
for(let [Key,value] of colors){
    console.log(`value of key ${Key} and ${value}`);
}



// set in javascript 
// set let you store the unique value of the values 
// only unique values are acceptable 
let myset= new Set();
myset= [1,2,3,4,5,6,7,8,9]

for(let value of myset){
    console.log(value)
}



// for of vs for in 


// for in always iterate over only enumerable objects 