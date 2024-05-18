// calll method of function object 
// function add(x,y){
//     return x+y;
// }
// console.log(add instanceof Function)

// call function is used to burrow function 
let person ={
    name:"sagar",
    getname:function(class1 ,roll){
        this.class1=class1;
        this.roll=roll;
        
        return this.name;
    }
};
let person2={
    name:"sita"
}
console.log(person.getname.call(person2));
// call methods can be usedd for function borrowing and constructorrr chaining 
// using apply sam as above but is passed by array 
console.log(person.getname.call(person2,10,20));
console.log(person.getname("Ten",300).split(" "));  

// The bind methods returns a functio whichh can be used latter

let person3={
    name:"ram"
}
let getname=person.getname.bind(person3);
console.log(getname());


// the apply method is similar to the call method, but it takes an array-like object instead of a list of arguments.
// The apply method is used to borrow the function of another object.

let person4 = {
    name: "John",
    getName: function(class1,roll) {
        this.class1 = class1;
        console.log(this.class1);

        this.roll = roll;
        console.log(this.roll);
      return this.name;
    }
  };
  
  let person5 = {
    name: "Jane",
    getName: function(class1,roll) {
        this.class1 = class1;
        console.log(this.class1);

  }
};
  
person5.getName.apply(person4, ["name", 10]); 