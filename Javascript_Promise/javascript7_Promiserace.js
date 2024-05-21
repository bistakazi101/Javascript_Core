// Promise.race in javascript 
// in javascriupt whichever promise or async operation is resolved or rejected first will be returned

function func1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // it does not matter whoes promise is resolved first
            // which takes less time it resolves it faster 
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


// syntax Promise.race(iterable) 
    Promise.race([func1(), func2(), func3()]).
    then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    } );