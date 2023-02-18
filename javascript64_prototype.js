//javascript prototype
var Const=function()
{
  this.model="galaxy";
  this.color="red";
  this.value="5100";
}
var samsung= new Const();
document.write(samsung.model);
//prototype instance member
Const.prototype.Price="rs5000";
document.write((samsung.price));