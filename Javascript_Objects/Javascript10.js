let person = {
    firstName: 'John',
    lastName: 'Doe'
};


let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');

console.log(descriptor);

// for in loop 
for(var key in person){
    console.timeLog(key+ ":",person[key])
}