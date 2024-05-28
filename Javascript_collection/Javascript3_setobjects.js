// Javascript set  objects 
// iterable objects 

// let obj1= new Set(iterable objects);
let obj1= new Set(['a', 'a', 'b', 'c', 'c']);
console.log(obj1.size); 
console.log(obj1.has("a"));

// adding a element 
obj1.add("d");
console.log(obj1);
obj1.delete('a');

for(let role of obj1){
    console.log(role);
}
// A WeakSet is similar to a Set except that it contains only objects.
let computer = {type: 'laptop'};
let server = {type: 'server'};
let equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
    console.log('We have a server');
}