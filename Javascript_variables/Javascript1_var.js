// Trhe var keyword is used to scope the global or the local scope only 
// but in es6 block scope was introduced in javascript


let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x);
}
console.log(x);


// redeclaring in let keyword willl cause an error 