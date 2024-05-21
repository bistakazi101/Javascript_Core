// Javascript callbacks function includingf synchronous and asynchromous function 
// call back function adds a additional code it is like 
// high order function in python 


function hellow() {
    console.log("Hellow my name is sagar")
}

function hi() {
    console.log("Hi my name is sagar")
}

function callme(callback) {
    console.log("I am calling you");
    callback();
}
callme(hellow);
callme(hi);
