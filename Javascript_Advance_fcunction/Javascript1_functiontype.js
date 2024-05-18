// In JavaScript, all functions are objects. They are the instances of the Function type. 
// Because functions are objects, they have properties and methods like other objects.
// there are two properties
// 1 length 
// 2. prototype


// function properties 
function add(x, y) {
    if (!new.target) {
      throw 'The add function cannot be called as a constructor';
    }
    return x + y;
  }
  
  let obj = new add(10, 20);
  console.log(obj);
// The function has three important methods they are as follows 
  