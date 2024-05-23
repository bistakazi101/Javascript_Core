import {sayHi} from './greeting.js';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   sayHi();
// });


// in es62020 a dynamic import is introduced 
// syntax import(moduleSpecifier);
// The import() returns a Promise that will be fulfilled once the module is loaded completely.
const btn= document.querySelector('.btn');

btn.addEventListener('click', () => {
  import('./greeting.js')
    .then((greeting) => {
      greeting.sayHi();
    })
    .catch((error) => {
      console.error(error);
    });
});