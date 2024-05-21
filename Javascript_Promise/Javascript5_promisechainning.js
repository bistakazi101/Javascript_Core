function func() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 1000);
    });
  }
//   When you return a value inside a .then() method, you are passing
//  the returned value to the next .then()
  const promise = func();
  promise
    .then((data) => {
      console.log(data);
      return data * 2;
    })
    .then((data) => {
      console.log(data);
      return data * 2;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  