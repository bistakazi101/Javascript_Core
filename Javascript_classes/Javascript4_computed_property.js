// Javascript computed property in javascript 
// Es6 allow you to  use an expression as a property name in an object property 
let propname="c"
const rank={
    a:1,
    b:2,
    ["The value of c is "+propname]:3
}
// you can write expression in computed value 
console.log(rank["The value of c is "+propname]);