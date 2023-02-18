//for in loop
function Const(Model_no)
{
    this.Model=Model_no;
    this.Color="red";
    this.Ram="4gb";
    this.Price=function()
    {
        return "Price of the Mobile phone is rs 10000";
        
    }
}
var samsung= new Const("Galaxy");
var Nokia = new Const("Nokia");
for(var specs in samsung)
{
    document.write(samsung[specs]);
}