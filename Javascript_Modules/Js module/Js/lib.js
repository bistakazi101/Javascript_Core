function display(message) {
    const el = document.createElement('div');
    el.innerText = message;
    document.body.appendChild(el);
  }
  // Use type="module" in the script tag to instruct the web browser to load a JavaScript file
  //  as a module.


 export function display1(message) {
    const el = document.createElement('div');
    el.innerText = message;
    document.body.appendChild(el);
  }


   function display2(message) {
    const el = document.createElement('div');
    el.innerText = message;
    document.body.appendChild(el);
  }



  let roll1= 100;
  let roll= 10;
  // named exports 
  var count=10;
  var name="sagar";
  export{display,count,name}

export default {
    roll1,
    roll,
    display2
}


let hellow= "hellow world";
export {hellow as hello}