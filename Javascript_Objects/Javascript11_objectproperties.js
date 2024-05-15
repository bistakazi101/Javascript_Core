const person = {
    firstName: 'John',
    lastName: 'Doe'
};

const employee = Object.create(person, {
    job: {
        value: 'JS Developer',
        enumerable: true
    }
});

console.log(employee.hasOwnProperty('job')); // Output: true
console.log(employee.hasOwnProperty("firstName")); // Output: false
