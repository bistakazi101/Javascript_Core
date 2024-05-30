"use strict";
function Hellow(person) {
    return `The person firstname is  ${person.firstname} and lastname is ${person.lastname} `;
}
let name4 = {
    // the firstname and lastname should be same as in interface 
    firstname: "sagar",
    lastname: "Bista"
};
console.log(Hellow(name4));
