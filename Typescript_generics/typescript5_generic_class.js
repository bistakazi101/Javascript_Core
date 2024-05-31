"use strict";
// Typescript generic class;ass 
// A stack is a data structure that works on the last-in-first-out (or LIFO) principle. 
// the stack has two main operations push and pop 
class Stack {
    constructor(size) {
        this.size = size;
        this.elements = [];
        // Initialize elements array with the specified size
        for (let i = 0; i < size; i++) {
            this.elements.push(undefined);
        }
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
let numbers3 = new Stack(20);
console.log(numbers3.push(2));
