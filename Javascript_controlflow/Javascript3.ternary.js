// Ternary operator 

// You can  only use here else if 
let age = 18;
let message;

if (age >= 16) {
  message = 'You can drive.';
} else {
  message = 'You cannot drive.';
}

console.log(message);


// lets use ternary operator
age== 18? (message="You can Drive"):(message="You cannot drive")


// miltiple javascript ternary operator 
let speed = 90;
let message1 = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

console.log(message1);