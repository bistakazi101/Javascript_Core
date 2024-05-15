// Constructor function 
function Person(firstName, lastName){
    this.firstName="sagar";
    this.lastName="Bista";

}

let person1= new Person("sagar","Bista");
console.log(person1);


// Adding methods to constructor functions 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person = new Person("sagar", "Bista");
console.log(person.getFullName());

