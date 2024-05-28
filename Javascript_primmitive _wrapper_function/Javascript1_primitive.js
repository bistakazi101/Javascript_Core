// Javascript primitive wrapper functions
// There are three types of primmitive wrapper function
// boolean number anbd string 
let language = 'sagar Bista';
let s = language.substring(4);
console.log(s);  // r Bista

// // This code is equal to 
// let language = 'sagar bista';
// // behind the scenes of the language.substring(4);
// let tmp = new String(language);
// str = temp.substring(4);
// temp = null;

// behind the scenees javascript performs 
// create an object of corresponding type 
// calll a aspecific method on that object
// delete an object immediately 

