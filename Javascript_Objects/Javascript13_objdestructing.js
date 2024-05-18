// Javascript object destructing 
// in es6 the obj can be desctured in foollowing ways 

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let { firstName: fname="sagar", lastName: lname="Bista" } = person;
console.log(fname); // John\

// Destructuring function arguments
// It’s possible to destructure the object argument passed into the function like this:
let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person1);