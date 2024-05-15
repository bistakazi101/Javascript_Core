// Javascript prototype 
// First, define a constructor function called Person as follows:
 function person(name){
    this.name= name;

 }
 console.log(person);
console.log(person.prototype);


// Defining methods in prototype objects
person.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
}
