"use strict";
// abstract class  Employee1 {
//     // a abstract class cannot be instantiated
//     // it is kind of Java or c++
// }
class Employee1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
// The constructor declares the firstName and lastName properties.
// The getSalary() method is an abstract method. 
// The derived class will implement the logic based on the type of employee.
// The getFullName() and compensationStatement() methods contain detailed implementation. 
// Note that the compensationStatement() method calls the getSalary() method.
class FullTimeEmployee extends Employee1 {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
let name3 = new FullTimeEmployee('John', 'Doe', 12000);
console.log(name3);
