// the function try to call add dfunction that does not exists 

try {
    let result = add(10, 20);
    console.log(result);

    console.log('Bye');
} catch (error) {
    console.log(`The error that occured is ${error}`);

}

// the error object has two properties 
// 1. name explains the eroor name 
// 2. message explain the error messsage 
try {
    let result = add(10, 20);
    console.log(result);
} catch (e) {
    console.log(`The error name is ${e.name} and the error message is ${e.message}`);
}