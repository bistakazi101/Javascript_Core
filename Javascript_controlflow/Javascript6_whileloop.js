// while loop in javascript 

let a = 0
while (a <= 5) {
    console.log(a)
    a++
}


// do while loop in javascript 

do {
    console.log(a)
    b++
} while (b <= 5)



// for lop 
for (let i = 1; i < 5; i++) {
    console.log(i);
}
//   Using the JavaScript for loop without the initializer example
let j = 1;
for (; j < 10; j += 2) {
    console.log(j);
}

//  Using the JavaScript for loop without the condition example
for (let j = 1; ; j += 2) {
    console.log(j);
    if (j > 10) {
      break;
    }
  }