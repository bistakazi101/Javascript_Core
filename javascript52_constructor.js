//constructor in javascript

function Const(parameter)
{
    this.model= parameter;
    this.fun= function()
    {
        return(this.model, " price of mobile is 3000");
    };

}
var samsung= new Const();
document.write(samsung.model);
var Mi= new Const();
document.write(Mi.model);