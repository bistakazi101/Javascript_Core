class Animal {
    constructor(public name: string) {}

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name); // Call the parent class constructor
    }

    makeSound(): void {
        console.log(`${this.name} barks.`);
    }

    displayBreed(): void {
        console.log(`${this.name} is a ${this.breed}.`);
    }
}

const myDog = new Dog('Jackie', 'My dog');
myDog.makeSound();  // Output: Buddy barks.
myDog.displayBreed(); // Output: Buddy is a Golden Retriever.
