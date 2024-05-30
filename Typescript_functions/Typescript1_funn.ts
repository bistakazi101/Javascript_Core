// syntax
// function name(parameter: type, parameter:type,...): returnType {
//     // do something
//  }

function add(a:number,b:number):number{
    return a+b;

}
let sum=add(10,20);
console.log(sum);

// Note When you do not annotate the return type,
//  TypeScript will try to infer an appropriate type. For example:
