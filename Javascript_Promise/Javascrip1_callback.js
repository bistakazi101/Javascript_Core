// Javascript callbaack methods 

function func1(a, b, callback){
    console.log("func1");
    callback(a, b);
}
// This is the simple examnple of callback function.
function func2(a, b){
    console.log("func2");
    console.log(a + b);
}

func1(1, 2, func2);