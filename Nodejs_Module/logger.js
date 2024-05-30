const error = 'ERROR';
const warning = 'WARNING';
const info = 'INFO';

function log(message, level = info) {
    console.log(`${level}: ${message}`);
}


// we are using commonjs module system but now node 14 es6 module system is also available
module.exports.log=log;
module.exports.error=error;
module.exports.warning= warning;
module.exports.info= info;



// module wrapper function 
// (function(exports, reequire, module , __filename,__dirname){
//     const error = 'ERROR';
// const warning = 'WARNING';
// const info = 'INFO';

// function log(message, level = info) {
//     console.log(`${level}: ${message}`);
// }


// // we are using commonjs module system but now node 14 es6 module system is also available
// module.exports.log=log;
// module.exports.error=error;
// module.exports.warning= warning;
// module.exports.info= info;


// });


// by dong this 
// By doing this, Node.js achieves the following important goals:

// Keep the top-level variables (var, let, and const) scoped to the module instead of the global object.
// Make some module-specific variables like global variables for example module and exports.
// syntax console.log(module.exports === exports); // true