"use strict";
//  here a little different from the java 
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    hello() {
        return JSON.stringify(this);
    }
}
let person = new Person('sagar', 'sagar');
console.log(person.hello());
