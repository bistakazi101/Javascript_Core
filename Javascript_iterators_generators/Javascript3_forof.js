// Javascript for of loop in javascript 
// javascript iterates over an iteratable object 
// Buit in array string map and set 
// 1. iterating over an arrays 


let array = [10, 20, 30, 40, 50]
for (let value of array) {
    console.log(value)
}
// to returns the pair of index value of the you can use entries method 
// The array.entries() method returns an Array Iterator object with key/value pairs.
let colors = ['red', 'green', 'blue'];
let iterator = colors.entries();
for (let value of iterator) {
    console.log(value)
}

//   2. in place of object destructing then 
const rating = [{
        name: "sagar",
        class: "Ten",
        score:10
    },
    {
        name: "suman",
        class: "Five",
        score:5
    }
];

// using object destructiring property in javascript 
for(const {score} of rating){
    sum+=score;
}
console.log(`value of the following are as follows ${sum}`)

// 3. iterating over the string strings 
let str = "abc"
for(let c of str){
    console.log(c)
}

