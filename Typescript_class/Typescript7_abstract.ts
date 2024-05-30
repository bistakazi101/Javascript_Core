// abstract class  Employee1 {
//     // a abstract class cannot be instantiated
//     // it is kind of Java or c++
// }
abstract class Employee1 {
    constructor(private firstName: string, private lastName: string) {
    }
    // abstract method 
    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}


// The constructor declares the firstName and lastName properties.
// The getSalary() method is an abstract method. 
// The derived class will implement the logic based on the type of employee.
// The getFullName() and compensationStatement() methods contain detailed implementation. 
// Note that the compensationStatement() method calls the getSalary() method.

class FullTimeEmployee extends Employee1 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

let name3 = new FullTimeEmployee('John', 'Doe', 12000);
console.log(name3)