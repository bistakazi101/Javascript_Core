// ststic properties 

class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;
    static getCount() {
        return Item.count;
    }
}

let pen = new Item("pen", 10);
let pencil = new Item("pencil", 20);
console.log(pen)
console.log(pencil)
console.log(Item.getCount()); // Output: 2
console.log(Item.getCount()); // Output: 2