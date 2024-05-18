// Javasscript getters and setters 
class person {
    constructor(name) {
        this.name = name;
    }

}

let person1 = new person("Sagar Bista")
// sometimes you dont want to directly access the property of the object 
console.log(person1.name)



// Here es6 provides special methods get and set Keywords
// javascript provides get and set method to access the property of the object
class person3 {
    constructor(name) {
        {
            this._name = name;
        }

    }
    // The get keyword binds an object property to a method 
    // that will be invoked when that property is looked up.
    get name() {
        {
            return this._name;
        }
    }
}
// here person is used to getname
let person2 = new person3("Ram Bista");
console.log(person2.name);
