// javascript recursive function 
// recursive function is a function that calls itself until it doesn’t. 


// Recurssion in javascript
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);