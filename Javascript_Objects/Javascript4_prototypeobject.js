// prototype Object 



function Mobile(){
    console.log("Mobile function")
}

let count1= new Mobile();
console.log(Mobile===Mobile.prototype.constructor);
console.log(Mobile.prototype===count1.__proto__);

