// Try catch fincally 

// The finally works as the code has to be executed no matter what. It is used to execute the code



try {
    let result = 0;
    console.log(result);
    let add1 = add(10, 20);
} catch (e) {
    console.log(`The error name is ${e.name} and the error message is ${e.message}`);
} finally {
    console.log("Finally block ");
}


// note finally block block return first if it has to return first 