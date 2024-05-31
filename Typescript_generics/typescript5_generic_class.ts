// Typescript generic class;ass 
// A stack is a data structure that works on the last-in-first-out (or LIFO) principle. 
// the stack has two main operations push and pop 
class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
        // Initialize elements array with the specified size
        for (let i = 0; i < size; i++) {
            this.elements.push(undefined!);
        }
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }

    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop()!;
    }
}
let numbers3 = new Stack<number>(20);
console.log(numbers3.push(2))