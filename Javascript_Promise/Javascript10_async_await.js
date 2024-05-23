// Javascript async and await in Javascript is used to handle asynchronous operations.
// async await is built in top of promises


async function func1(){
    console.log("number 1")
    // unless the number 2 does not get executed the number 3 will not get executed
    await console.log("number2")
    console.log("number 3")
}
console.log("number 4")
func1()
// while the 2 is executing the 5 will get executed
console.log("number 5")