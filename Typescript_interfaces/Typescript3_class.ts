interface Json {
    hello(): string


 }

//  here a little different from the java 
 class Person implements Json {
    constructor(private firstName: string,
        private lastName: string) {
    }
    hello(): string {
        return JSON.stringify(this);
    }
}
let person = new Person('sagar', 'sagar');
console.log(person.hello());