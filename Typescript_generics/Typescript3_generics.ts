// Typescriupt generics 
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
// If you pass into the prop function a property name that exists on the obj
let str = prop({ name: 'John' }, 'name');
console.log(str);



// here extends the valure of trhe key 
