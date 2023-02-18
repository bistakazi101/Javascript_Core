//prototype inheritance
function Mobile() {
    this.model = "galaxy",
        this.color = "blue",
        this.price = " 3001"
}
function Samsung() {
    this.model_no = "mi",
        this.color_info = "BLUE",
        Mobile.call(this);
}
Mobile.prototype.value = "First";
var samsung_no = new Samsung();
document.write("Calling parent obj by child ", samsung_no.price);
Samsung.prototype = Object.create(Mobile.prototype);
var mobile_no = new Mobile();
document.write(mobile_no.value);