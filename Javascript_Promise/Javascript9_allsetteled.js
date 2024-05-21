// promise allsetteled in js 
// it returns resolve value full filled and rejected value with reason 


function func1(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // it rejects with reason iin javscript
            reject(10);
        }, 1000);
    }       
)};

function func2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(20);
        }, 2000);
    })}

function func3(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(30);
        }, 3000);
    })} ;


// syntax Promise.allsetteled(iterable) 
// The Promise.allSettled() method returns a promise that resolves to an array of 
// objects that each describes the result of the input promise.
    Promise.allSettled([func1(), func2(), func3()]).
    then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    } );


    // finally methoid can be used to free up the resources 