function calculateArea(width: number, height?: number): number {
    if (height) {
        return width * height;
    } else {
        return width * width; // Assuming it's a square
    }
}

console.log(calculateArea(5));          // Output: 25 
console.log(calculateArea(5, 10));      // Output: 50 
console.log(calculateArea(3, 4));       // Output: 12
