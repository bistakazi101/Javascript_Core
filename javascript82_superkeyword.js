//super keyword
class father{
    constructor(money)
    {
        this.fmoney= money;
    }
    display()
    {
        return "I am here to display father money: ",this.fmoney;
    }
}
class son extends father{
    constructor(){}
    display()
    {
        return"I am here to display the son money"; 
    }
}
var ram= new son;
document.write(ram.diaplay);