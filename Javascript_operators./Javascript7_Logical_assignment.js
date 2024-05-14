// javascript Logical assignment operator 
// short circuiting concept in javasscript 
// x ||= y	is equals to x || (x = y)

// Logical operator 
let name= ""
let name1="madan"


// but if  the firsdt expression is false then only second expression is excurted 
name ||=name1  // here first expression is false so the last expression is evaluated 
console.log(name)


// Logical And operator 
// if the first value is true then only the last expression is executed 
firstName = "Ram"
lastName= "Shyam"
 firstName && (firstName =lastName)
console.log(firstName) // here the first expression is false so the last expression is not executed


// Nullisingg coalesing operator 
// these operator assigns the first value if the value is null or undefined

name12 =null
name20="Hari"
name12 ??=name20
console.log(name12) 
