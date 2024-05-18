// Javasscript expression to definme class expression 
// similar to function class also have a ex[pressions 
// a class is assigned to a variable 
let person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let name1 = new person("sagar Bista")
console.log(name1.getName())
// A class expression have name or not 
// Like a class declaration, the type of a class expression is also a function:
// Similar to function expressions, class expressions are not hoisted

// Singleton
// it ensures that limits the indetation of the class to a single instance 
let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`starting The app ${this.name}`)
    }
}("Awesome App");
console.log(app.start());