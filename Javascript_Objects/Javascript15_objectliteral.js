// Object literal 
// it is best way to create a javascript objects 

// ES6 allows you to eliminate duplication when a property 
// of an object is the same as the local variable name by including the name without a colon and value.
let name = 'Computer',
    status = 'On';

let machine = {
   name,
   status
};

// Computed property name
let name1 = 'machine name';
// here name is in square brackert so it is computed property name
let machine1 = {
    [name+ 'Ted']: 'server',
    'machine hours': 10000,
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

console.log(machine1[name+ 'Ted']); // server
console.log(machine['machine hours']); // 10000


// to call the method you need to 
// call the method like this
// consice method stack 
machine1["starting up"](); // The server is starting up!

