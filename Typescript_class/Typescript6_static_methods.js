"use strict";
class Employee {
    constructor(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
}
Employee.headcount = 0;
let john = new Employee('sagar', 'Bista', 'Front-end Developer');
let jane = new Employee('Bista', 'Sagar', 'Back-end Developer');
console.log(Employee.headcount); // 2
