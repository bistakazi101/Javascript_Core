interface Person{
    firstname:string;
    lastname:string;
    // note the interface is alwasy in camel case 
    // After defining the Person interface, you can use it as a type.
}



function Hellow(person:Person){
    return `The person firstname is  ${person.firstname} and lastname is ${person.lastname} `;
}

let name4={
    // the firstname and lastname should be same as in interface 
    firstname:"sagar",
    lastname:"Bista"
};

console.log(Hellow(name4))