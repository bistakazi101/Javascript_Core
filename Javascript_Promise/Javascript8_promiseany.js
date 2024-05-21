// javascript promise any in javascript 
// Promise.any in javascript 

function func1(){
    // in promise any it searches first less time taking promise and resolves it
    // if there is not then it rejects the promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(10);
        }, 1000);
    }       
)};

function func2(){
    // here the first resolve is in 2 sec so it is displayed first 
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


// syntax Promise.any(iterable) 
    Promise.any([func1(), func2(), func3()]).
    then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    } );