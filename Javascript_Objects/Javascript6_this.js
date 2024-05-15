// JavaScript, you can use the this keyword in the global and function contexts. Moreover,
//  the behavior of the  this keyword changes between strict and non-strict modes.


// What is this keyword
let counter = {
    count: 0,
    next: function () {
      return ++this.count;
    },
  };
  
 console.log( counter.next());
 console.log( counter.next());

// 2. Global context

console.log(this === global); // true



// Function context

// In JavaScript, you can call a function in the following ways:

    // Function invocation
    // Method invocation
    // Constructor invocation
    // Indirect invocation




    // simple function invocation 
    function show() {
        console.log(this === window); // true
     }
     
     show();


     let car = {
        brand: 'Honda',
        getBrand: function () {
            return this.brand;
        }
    }
    
    console.log(car.getBrand()); // Honda


    function Car(brand) {
        this.brand = brand;
    }
    

    // 3) Constructor invocation
    Car.prototype.getBrand = function () {
        return this.brand;
    }
    
    let car1 = new Car('Honda');
    console.log(car1.getBrand());

    // 4) Indirect Invocation 
    function getBrand(prefix) {
        console.log(prefix + this.brand);
    }
    
    let honda = {
        brand: 'Honda'
    };
    let audi = {
        brand: 'Audi'
    };
    
    getBrand.call(honda, "It's a ");
    getBrand.call(audi, "It's an ");