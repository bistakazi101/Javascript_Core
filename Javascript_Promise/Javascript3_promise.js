// // javascript promises
// function getusers(){
//     // here the functionj is set to asynchronously return the value after 2 seconds
//     setTimeout(()=>{
//     return [
//         {name:"sagar",email:"sagar123@gmail.com"},
//         {name:"bista",email:"bista123@gmail.com"}
//     ]
// ,2000})
// }


// // The findUser function calls getusers and tries to immediately find a user from its result,
// //  but since getusers does not return a result synchronously, this will not work as intended.
// function findUser(name){
//     const users=getusers();
//     const user = users.find((user)=>user.name===name)
//     return user;
// }
// // here the findUser is immeriately calling 
// console.log(findUser("sagar"));
// // in the find user function complete the code of the user with the username "John"



// tro solve this problem promise is used in javascript
// 1.Using callbacks to deal with an asynchronous operation


function getUsers(callback){
    setTimeout(()=>{
        callback([
            {name:"sagar",email:"sagar12@gmail.com"},
            {name:"bista",email:"bista12@gmail.com"}
        ])
    },2000);
}

function findUser(username,callback){
    getUsers((users)=>{
        const user = users.find((user)=>user.name===username);
        callback(user);
    })
}
findUser("sagar",console.log);
findUser("bista",console.log);