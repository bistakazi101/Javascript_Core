// comparison operator 
// the following shows the comparison operator in javascript 
let a = 10, 
    b = 20; 

console.log(a >= b);  // false
console.log(a == 10); // true

// Compare strings
let name1 = 'alice',
    name2 = 'bob';    

let result = name1 < name2;
console.log(result); // true
console.log(name1 == 'alice'); // true


// Compare a number with a value of another type
console.log(10 < '20'); // true

// Compare an object with a non-object
let apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  let orange = {
    toString: function () {
      return '20';
    },
  };
  console.log(apple > 10); // false
  console.log(orange == 20); // true

  
//   Compare Null and NaN with other values
  console.log(null == undefined); // true



//   Note equal equal to === and not equal equal to !==
// if the javascript data type and value are the same, the result is true
// otherwise the result is false

// strict == equal equal to
console.log("10" == 10); // true
// here data type is not same but value is samae so it is false 
console.log("10" === 10); // false 

// strict not equal to
console.log("10" != 10); // false
// here value  is same but data type is not same so it is false
console.log("10" !== 10); // true
