//class with class keyword

class Mobile
{  //instance member
    constructor()
    {
       this.name="samsung";
       this.price="rs3000";
       this.color="red";
    }
  display() {
    //prototype member
        return"display instance prototype";
    }
}
var samsung= new display();
document.write(samsung.name);
document.write(samsung.display());
