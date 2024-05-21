// Javascript promise all in javascript 
// Use the Promise.all() method to aggregate results from multiple asynchronous operations.

function func1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    }       
)};

function func2(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(20);
        }, 2000);
    })};

function func3(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(30);
        }, 3000);
    })} ;

    // note Promise.all() is a static method in javascriptr 
   pall= Promise.all([func1(), func2(), func3()])
    pall.then((data) => {
         let [result1, result2, result3] = data;
         console.log(result1);
         console.log(result2);
         console.log(result3);
    }).catch((error) => {
         console.log(error);
    });