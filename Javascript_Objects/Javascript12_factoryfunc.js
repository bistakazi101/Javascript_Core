// factory function 
// function wehich returns object is known as factory function 


function createfunction(firstName,lastName){
    return {
        firstName: "Sagar",
        lastName: "Bista",
        getfullName(){
            return this.firstName + " " + this.lastName;
        }
    }
}
let person = createfunction("Sagar","Bista");
console.log(person.getfullName());
let person1= createfunction("Sujan","Bista");
console.log(person1.getfullName());

