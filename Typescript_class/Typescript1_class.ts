// in typescript you can use the class keyword to create a class
class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person("10", 'sagar', 'Bista');
let name1 =person.getFullName();
console.log(name1);