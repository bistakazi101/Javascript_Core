// javascript pass by value 
// before learning pass by value you must learn primitive and refrence values 


// 1. passs by value 
function square(x){
    x=x*x;
    return x;
}
let y= 10;
let z = square(y);
console.log("square of x is ",z);
console.log("square of y is same as ",y)


// 2. pass by refrence value 
let person={
    "name":"sagar",
    "age":30
}

function age(obj){
    obj.age+=40;
}

age(person);
console.log(person);