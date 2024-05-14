// javascript objects 
// The following example creates an empty object using the object literal notation:
// key:value 

var empty={
    "my name ": "sagar Bista",
    firstName:"sagar",
    lastName:"Bista"
};

// acessing properting 
// 1 the dot operator 
// Object.property 
console.log(empty.firstName)
console.log(empty.lastName)


// Array-like notation ( [])
console.log(empty['firstName'])
console.log(empty["lastName"])
console.log(empty['my name '])


// modifying property name 

console.log(empty.firstName="Ram")

// adding name 
console.log(empty.class="ten")

// deleting name 
console.log( delete empty.age)



// check propert existes or not 

// propertyname in object 
console.log("firstName" in empty)