// inheritance prototype object


// method one 
// parent class 
function Mobile()
    {
        this.a =10
    console.log("Mobile function")
    }



    // prototype object 
    Mobile.prototype.b = 20;
// sub class 
function Samsung()
    {
        Mobile.call(this);
        this.b = 20;

    }


    // prototype inheritance achieved 
    Samsung.prototype= Object.create(Mobile.prototype);

    let v1= new Samsung();
    console.log(v1.a);
    
