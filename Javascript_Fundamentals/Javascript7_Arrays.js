// Javascript arrays 
// by using constructor 
var  scores1 =  new Array();
// lets give size of and array 
var scores2 =new Array(10);
// lets give some values to array
let  scores3 = new Array(10,20,30,40,50);


// The more effective to cerate a array is the 
arrayname = ["value1","value2","value3"]

// acessing the value of an array 
console.log(arrayname[0])

// change the value of an array 
console.log(arrayname[0]="updated value ")



// length of an array 
console.log(arrayname.length)

// some operation of an array 
console.log(arrayname.push("newvalue"))

// adding the element beegining of an array 
console.log(arrayname.unshift("newvalue100"))

// removing the first element 
console.log(arrayname.shift())

// revoing the last element 
console.log(arrayanme.pop())


// check the value is an array 
console.log(Array.isArray(arrayname))