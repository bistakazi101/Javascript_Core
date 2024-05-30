// Typescript Rest parameter 
function sum5(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum5(1, 2, 3));
console.log(sum5(10, 20, 30, 40));
console.log(sum5());                 
