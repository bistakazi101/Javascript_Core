// callback hell is also known as pyramid of doom 

function func1(url ,callback){
    console.log("function1")
    setTimeout(()=>{
        console.log(`url is ${url}`)
        callback();
    },2000)
}
// Nesting many asynchronous functions inside
//  callbacks is known as the pyramid of doom or the callback hell:
url1 = "https://jsonplaceholder.typicode.com/posts/1";
url2 = "https://jsonplaceholder.typicode.com/posts/2";
url3 = "https://jsonplaceholder.typicode.com/posts/3";

// func1(url1,function(){
//     console.log("Url1 is calling ", url1);
//     func1(url2,function(){
//         console.log("Url2 is calling",url2);
//         func1(url3,function(){
//             console.log("Url3 is calling ",url3);
//         })
//     })
// })



func1(url1,()=>{
 console.log("Url1 is calling ",url1);
 func1(url2,()=>{
    console.log("Url2 is calling ",url2)
 })
})