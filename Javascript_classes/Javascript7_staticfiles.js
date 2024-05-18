// before es6 you add method directly to es6 in javascript 
function person(name){
    this.name= name;
}
person.prototype.getname=function(){
    return this.name;
}
person.createAnonymous= function(gender){
    let name= gender=="male"?"sagar":"sita";
    console.log(name);
}

let name= person.createAnonymous("male")



// in es6 static keyword is introduced to look the static method in the class

class Animal{
    constructor(legs){
        this.legs=legs;
    }
    walk(){
        console.log("walking on "+this.legs+" legs")
    }
    static createAnimal(legs){
        return new Animal(legs);
    }
}
let animal = Animal.createAnimal(4);
animal.walk();  // Output: walking on 4 legs
console.log(animal.legs);  // Output: 4
console.log(Animal.createAnimal(2).legs);  // Output: 2

// Alternatively, you can use the following syntax:
this.constructor.staticMethodName();
