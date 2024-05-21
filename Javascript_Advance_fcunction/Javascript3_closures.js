// ac clousere is a afunction nthat refrence the variable in outer scope 
// from its inner scope 


// here value of inner is still preserved even after the outer function has finished executing.
function outer() {
    function inner(a){
        console.log(a);
      
    }
    return inner; // Return the inner function
}

let inner =  outer(); // Call outer to get the inner function
inner(2); // Call inner with argument 2
inner(3); // You can call it multiple times
