// Javascript arithmetic operators 
var a= 10
var b=20 

// addition operator 
var  sum = a+b
console.log(sum)

// if one is string and another is a anumber 
// if one is string other is converted to a astring 
var c=100
var d= "10"
var sum1 = c+d
console.log(typeof(sum1)) // 10010 //string 



// subtraction operator 
var f=100
var g=200
sub= a-b
console.log(sub)

// Multiplication operator 
var m=20 ,n=30
mul= m*n
console.log(mul) 
// If either value is not a number, the JavaScript engine implicitly converts 
// it into a number using the Number() function and perform the multiplication. For example:
let result = '5' * 2;

console.log(result);


// Divide operator 
let result1 = 20 / 10;

console.log(result1); // 2



//The valuOf operator returns the primitive value of the specified object.
let energy = {
    valueOf() {
      return 100;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);
  
  currentEnergy = energy + 100;
  console.log(currentEnergy);
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy);
  