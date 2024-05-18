// in es6 there was no concept of classes 
// before that we used create classes by constructor or prototype pattern 


function person(name,age)
    {
        this.name=name;
        this.age=age;
    }


person.prototype.greet= function(){
    return this.name;
}

var person1=new person("sagar Bista",10)
console.log(person1.greet())

// The following statements use the instanceof operator to check if sagar bista  is
//  an instance of the Person and Object type:
console.log(person1 instanceof person)
console.log(person1 instanceof Object)


// ES6 introduced the class Keyword to create a javascript
class Person2{
    constructor(name){
        // The following statements use the instanceof operator to check if sagar bista
        //  is an instance of the Person and Object type:
        this.name=name;
    }
    getname(){
        return this.name;
    }
}
let person3= new Person2("sagar Bista")
console.log(person3.getname())


// Note :class are special functions

console.log(typeof Person2) // function


