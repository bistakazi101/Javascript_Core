// javascript first class citizen 
// This means that you can store functions in variables



// storing function in a variable 
function add(a,b){
    return a+b 
}
let sum = add;
console.log(sum(10,20));

// passing a a function in another function 
function passFun(a,b,fun){
    return fun(a,b);
}
console.log(passFun(100,20,sum));

// returning function from a function
function returnFun(){
    return function(c,d){
        return c*d;
    }
}
let fun = returnFun();
console.log(fun(10,20));