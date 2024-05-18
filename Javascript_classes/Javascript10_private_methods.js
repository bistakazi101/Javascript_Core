// private methods in javascript
// To call the #privateMethod inside the MyClass, you use the this keyword as follows:
// this.#privateMethod();
class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName = lastName;
    }
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
  let person = new Person('John', 'Doe');
  console.log(person.getFullName());