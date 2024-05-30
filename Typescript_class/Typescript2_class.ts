// 1. private 
// 2. protected
// 3. public 


// The private method can be invoked only by the member ofthe class 
// the public modifier is taken as defaultt 
// The protected method can be invoked by the member of the class and the subclass
// note accesibility is only available to the class members and not to the object of the class

class Person6 {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person6 = new Person6('153-07-100', 'sagar', 'Bista');
console.log(person6); // compile error