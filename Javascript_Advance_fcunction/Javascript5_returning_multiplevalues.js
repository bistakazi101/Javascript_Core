// returning multiple values in javascript
function getname(){
    let firstName="sagar";
    let lastName="Bista";
    // return as  an array 
    return [firstName,lastName];
}
let [ firstName,lastName]= getname();
console.log(firstName);
console.log(lastName);


// Returning multiple values from an function using an object
function getNames() {
    // get names from the database or API
    let firstName = 'Ram',
        lastName = 'BIsta';
  
    // return values
    return {
      fName: firstName,
      lName: lastName
    };
  }
  let names = getNames();
    console.log(names.fName);
    console.log(names.lName);