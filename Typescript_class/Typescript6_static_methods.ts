class Employee {
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }
}
let john = new Employee('sagar', 'Bista', 'Front-end Developer');
let jane = new Employee('Bista', 'Sagar', 'Back-end Developer');

console.log(Employee.headcount); // 2
