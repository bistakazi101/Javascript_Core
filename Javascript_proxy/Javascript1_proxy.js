// jAVASCRIPT PROXY EXAMPLES 
// A target is an object to wrap 
// A handler is an object that defines traps for the proxy

const user={
    name:"sagar",
    age: 25
}

const handler={
    get(target,prop){
        console.log(`property ${prop } is acesed`)
        return target[prop]
    }
}
const proxyuser= new Proxy(user,handler);
console.log(proxyuser.name)
// when we run this code  the handler object get method is called 
// it can acess all the property through th eproxy object 
