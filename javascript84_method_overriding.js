//method overriding

class father{
    constructor(){}
    display(){
        return "I am here to return father";
    }
}
class son{
    constructor(){}
    display(){
        return"I am here to display son";
    }
}
var sam= new son();
document.write(sam.display());