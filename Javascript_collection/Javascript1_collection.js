// object to emulate a key value pair of the object 
// An object always has a default key like the prototype.
// A key of an object must be a string or a symbol, you cannot use an object as a key.
// An object does not have a property that represents the size of the map.
// map object holds key value pairs 



// let map = new Map([iteratable object]);
let john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};



let map = new Map();
map.set("name","sagar");


// you can also pass an iteratable object to the map constructor to create a map object.
let userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);
console.log(map.get("name"))
console.log(userRoles.get(john)); // admin


// itterate over map keys 
for(let value of userRoles.keys()){
    console.log(value);
}


for(let value of userRoles.values()){
    console.log(value);
}