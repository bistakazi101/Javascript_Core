// Javascript exception user defiined 
class NumberError extends Error{
    constructor(value){
        super(`${value} is not defined as a anumber `);
        this.name= "Invalid Number error"

    }
}


function add(x, y) {
    if (typeof x !== 'number') {
      throw new NumberError(x);
    }
    if (typeof y !== 'number') {
      throw new NumberError(y);
    }
  
    return x + y;
  }
  try {
    const result = add('a', 10);
    console.log(result);
  } catch (e) {
    console.log(e.name, ':', e.message);
  }