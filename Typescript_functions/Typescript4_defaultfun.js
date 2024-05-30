"use strict";
// function name(parameter1=defaultValue1,...) {
//     // do something
//  }
function greet(name, greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
}
greet('sagar');
greet('sagar', 'Hi');
greet('Bista');
