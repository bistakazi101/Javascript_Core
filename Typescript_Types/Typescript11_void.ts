// Void types in typescript 
// The void type denotes the absence of having any type at all.
//  It is a little like the opposite of the any type.

function log(message3:any): void {
    console.log(message3);
}

log("Hello World");
// Notice that if you use the void type for a variable, you can only assign undefined to that variable. I