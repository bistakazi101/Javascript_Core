// Javascript private fieelds 
// es2022 is defined to 2022 fields 
// to define a private fields you use 3 operator 
class Circle{
    #radius;
    constructor(value){
        this.#radius= value;
    }
    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
      }
}

let circle = new  Circle(10);
console.log(circle.area)


// Note : oprivate fields are not acessed by subclass 
// Use the in operator to check if an object has a private field.
