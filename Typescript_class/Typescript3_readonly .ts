// The typescript radonly property 
// if you want to readonly the property the value of class and object then you can use the readonly keyword in typescript.

class Person7{
    // here you cannot rewrite the value of the name3
    // it is only readonly in her e
    readonly name3: string= "sagar";
}

let person7 = new Person7();
console.log(person7.name3); //sagar