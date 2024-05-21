// learning promises example in javascroipt 
// a promises has a state of three types they are 
// 1. pending 
// 2. fullfilled with a value 
// 3. rejected with a reason 

// note a promise is an object to create it we ahave to create a class 



function func(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("sucess");
        },2000);
    })

}
const promise = func();
promise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("finally");
});
// The promise constructor accepts a callback function 
// that typically performs an asynchronous operation. This function is often referred to as an executor.

