// const keyword are read only memory 
const PI = 3.14;
console.log(PI); // Outputs: 3.14

// Attempting to reassign a const variable will result in an error
PI = 3.14159; // TypeError: Assignment to constant variable.



// javascript constanct and object 
// even javascript objecdts are constant that does not mean you cannot change their values
// but you cannot reassign the object
const car={color:"red", model:"2019"};
// even car object is constant you can reassign trhe value of the object
car.color="blue";
console.log(car.color); 


// if you want any value to be immutable the properties then you have to use freeze keyword 
const person = Object.freeze({age: 20});
person.age = 30; 


// in array we may add elements  values of different values 
// but we cann  reassign elements 
// you can use for of loop to iterate over the items 

