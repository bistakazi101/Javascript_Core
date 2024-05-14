// In ES6, you use the spread operator (...) to unpack elements of an array.

let colors= ['red','green','blue']
let new_colors=['yellow','purple',...colors]
console.log(new_colors) // [ 'yellow', 'purple', 'red', 'green', 'blue' ]

let cmyk = ['cyan', 'magenta', 'yellow', 'black'];
let rgb = [ 'red', 'green', 'blue' ];
var merge = [...cmyk, ...rgb];
console.log(merge) // [ 'cyan', 'magenta', 'yellow', 'black', 'red', 'green', 'blue' ]


// javascript spread operator can be used to clone an object 
const circle ={
    radius: 1,
    color: 'red'
}
// Note the copy is always a shallow copy which it keeops refrence to the original object
// when it is changed then it also changes the original object
const circle2= {...circle}
console.log(circle2)

// Merging objects
const circle1 = {
    radius: 10
};

const style = {
    backgroundColor: 'red'
};

const solidCircle = {
    ...circle1,
    ...style
};

console.log(solidCircle);

let circle11= Object.assign({},solidCircle)
console.log(circle11)