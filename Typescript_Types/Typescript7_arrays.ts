// the typescript uses that its basic operation 
// they are the ordered lists of arrays 



let arra1: string[]=[];//initializing empty array as string could took evalue undefined
// arra1[0]= "sagar ";
// arra1[1]="Bista";
arra1=["sagar","Bista"];
arra1.push("Ten");

// array methods and properties 
console.log(arra1.length);

let series: number[]=[1,2,3,4,5,6,7,8,9];
let doubleseries= series.map(e=>e*2);
console.log(doubleseries);