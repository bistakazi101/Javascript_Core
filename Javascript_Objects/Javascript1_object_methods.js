// Javascript objecvts methods 



let person= {
    "name":"sagar",
    "age":30,
    "address":"pune",
   

    "fun1":function display(){
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        console.log("Address: "+this.address);
        console.log("Email: "+this.email);
    }
};

person.fun1();

let family ={
    firstName:"sagar",
    lastName:"Bista",
    display(){
        console.log("Display the value of the firstname and lastname",this.firstName,this.lastName);
    }
}
