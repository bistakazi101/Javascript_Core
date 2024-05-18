// Javascript inheritance using extend and super 
function Animal(legs) {
    this.legs = legs;
}

Animal.prototype.walk = function() {
    console.log('walking on ' + this.legs + ' legs');
}

function Bird(legs) {
    Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
console.log(Bird.prototype.constructor = Animal);


Bird.prototype.fly = function() {
    console.log('flying');
}

var pigeon = new Bird(2);
pigeon.walk(); // walking on 2 legs
pigeon.fly();  // flying



// by using extends and super keyword
class Animal1 {
    constructor(legs){
        this.legs=legs;
    }
    walk(){
        console.log("walking on "+this.legs+"legs")
    }
    fly(){
        console.log(" parent class flying")
    
    }
};

class Bird1 extends Animal1{
    constructor(legs){
        super(legs);
    }
    
    fly(wings){

        // shadowing methods
        super.fly()
        console.log(`flying with ${wings} wings`)
    }
};
    var pigion1=new Bird1(2);
    pigion1.walk()
    pigion1.legs
    pigion1.fly(2) 