"use strict";
class Person8 {
    constructor(name) {
        this._name = name;
    }
    // Getter for name
    get name() {
        return this._name;
    }
    // Setter for name
    set name(value) {
        if (value.length > 0) {
            this._name = value;
        }
        else {
            throw new Error('Name cannot be empty');
        }
    }
}
const person4 = new Person8('sagar');
console.log(person4.name);
person4.name = 'Bista';
console.log(person4.name);
try {
    person4.name = 'sagar bista';
}
catch (error) {
    console.log(error);
}
