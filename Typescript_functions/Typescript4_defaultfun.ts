// function name(parameter1=defaultValue1,...) {
//     // do something
//  }
function greet(name: string, greeting: string = 'Hello'): void {
    console.log(`${greeting}, ${name}!`);
}

greet('sagar');
greet('sagar', 'Hi');
greet('Bista');         
