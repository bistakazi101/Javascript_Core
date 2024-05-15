// Javascript Anonymous function 
// syntax: (function(){});

let show = function(){
    console.log("Anonymous function");
}
show();

// passing an arguments in anonymous function 
// Using anonymous functions as arguments
// In practice, you often pass anonymous functions as arguments to other functions. For example:
setTimeout(function(){
    console.log("Anonymous function printed");
},1000);



// immediately invoked function 
// if you want to create a function that invoked immediately 
// after the declaration immediately after the declaration 
// you can declare anonymous function like this 
(function(){
    console.log("Immediately invoked function")}
)();

// sometimes you may want to pass a function into anbother function 
var person={
    "name":"sagar",
    "age":30
};
(function(){
console.log("Name: "+person.name);
console.log("Age: "+person.age);
})(person);



// Arrow function 
// in es6  arrow function was introduced 
let show1=()=>console.log("Arrow function");
show1();