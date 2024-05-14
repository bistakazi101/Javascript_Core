// string in javascript 
let str = 'Hi';
let greeting = "Hello";


// Es6 introduced template literals in javascript 
// with template literals you dont have to use back \ 
name= "sagar"
let message = `hi my name is ${name}`
console.log(message)

// escape sequence 

let message1 = "hi my name is \"sagar\""
console.log(message1)
let message2= `"my name is \t${name} "`
// finding the lengeth of the string 
console.log(message2.length)

// acessing the member of the string 
console.log(message[0]) //acessing the first member 

// acessing the third last member of the function 
console.log(message2[message.length-3])



// concating the string 
str ="sagar "
str2= str + "Bista"
console.log(str2)


// converting non string to string 
str = false 
str10 = str.toString()
console.log(typeof(str10))
// here boolean value is non convertible 
 let back = Boolean(str) 


//  Comparing string 
// the comparison ofd letter is based onthe number of the letter 
let result ='a'<'b' ///as b comes after the a
console.log(result)