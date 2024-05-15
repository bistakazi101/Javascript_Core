// 1) Data properties
// To change any attribute of a property, you use the Object.defineProperty() method.

// 1.configurable 
// 2.Also, once you define a property as non-configurable, you cannot change it to configurable.
"use strict";
let person ={};
Object.defineProperty(person,"Man",{
    configurable: true,
    writable: false,

})
console.log(delete person.Man);


// Acessor properties 
let person1= {
    firstName:"sagar",
    lastName:"Bista"
};

let person = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});

console.log(person.fullName);