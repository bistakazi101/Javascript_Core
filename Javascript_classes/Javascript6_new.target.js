// new.class property 
// The new.target is available in all functions.
// ES6 provides a metaproperty named new.target that allows you to detect whether a 
// function or constructor was called using the new operator.
function Person(name) {
    if (!new.target) {
        throw "must use new operator with Person";
    }
    this.name = name;
}


// Now only by insacting an object you can call for an object 
