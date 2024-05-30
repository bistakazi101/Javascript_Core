"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }
    makeSound() {
        console.log(`${this.name} barks.`);
    }
    displayBreed() {
        console.log(`${this.name} is a ${this.breed}.`);
    }
}
const myDog = new Dog('Jackie', 'My dog');
myDog.makeSound(); // Output: Buddy barks.
myDog.displayBreed(); // Output: Buddy is a Golden Retriever.
