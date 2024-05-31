


function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers1= [1,2,3,4,5];
let string1=["sagar ","Bista","Ram","bista"]
let random= getRandomElement<number>(numbers1)
let random1= getRandomElement<string>(string1)
console.log(random)
console.log(random1)
// function echo<T>(arg: T): T {
//     return arg;
// }
