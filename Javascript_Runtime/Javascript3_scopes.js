



// Javascript global scopes 
var message = 'Hi';

function say() {
// Javascript local scopes 

    var message = 'Hello';
    console.log(message);
}

say();
console.log(message);



// if the variable is not found in local scope it will move to global scope 
// it is called scope chainning 
var y = 20;

function bar() {
    var y = 200;

    function baz() {  
        console.log(y);
    }

    baz();
}

bar();
