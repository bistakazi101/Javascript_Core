// Javascript funbctions 
// functioni screated by function keyword


// function with function parameters 
function  add(a,b){
    return a+b;
}

add(10,20);


// inside a function there is a n argumnent object 
function add(a,b,c){
    // It prints the third value 
    console.log(arguments[2])
}
add(10,20,30);



// Function hosting 
// in javascript function is moved in the top 
// we can use function before declaration 
showMe(); // a hoisting example

function showMe(){
    console.log('an hoisting example');
}
