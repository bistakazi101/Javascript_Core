// Object type  in typescript 
// thhis shows how to declare variables that holdss the objectr 
let person: object;
person = {
    fname3: "sagar",
    lname3: "bista",
    age: 20
};

console.log(person);
// if there is not a property that you want to acces than you are going to get an error  


let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};