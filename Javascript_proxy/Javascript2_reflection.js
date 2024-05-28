// the ability of a program to manipulate variables properties method at runtime 
// javascript introduuces new keyword properties That alows to calll methods construct objects get and set properties

// The reflect api  is important because it allows you to develope program  and framework that handles dyta dynamiucally 

// note reflect is not a constructor object or metod 
// all methods are static 



// 1. creating objects 
// syntax Reflect.construct(target, args [, newTarget])=new target(...args)

let args =["sagar",25];
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
     get fullname(){
        return `${this.name} and ${this.age}`;
    }
}

let person=Reflect.construct(Person,args);
console.log(person.fullname);


// 2.Reflect.defineProperty(target, propertyName, propertyDescriptor)
