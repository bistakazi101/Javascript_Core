//ways of creating objects

//1)object literal
var obj1={};
obj1["fees"]= 200;
document.write(obj1.fees);

//2)declare and initialize obj literal
var obj2={
    model:"5100",
    color:"red",
    specs:"5g"
}
document.write(obj2.model);

//object using factory function
function Mobile()
{
    return{
        model:"galaxy",
        color: "blue"
    }   
}
samsung= mobile();
document.write(samsung.model);

//4)object using constructor
function Const()
{
    this.model= "mobile1";
    this.color="yellow";
    this.price="5100";
}
var Mobile= new Const();
document.write(Mobile.color);