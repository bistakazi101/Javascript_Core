//javascript multilevel prototype inheritance
function Mobile() {
}
Mobile.prototype.Model = "90 sets of mobile";

function samsung() {
}
samsung.prototype.Model_no = "Galaxy";

function Galaxy() {
}
samsung.prototype = Object.create(Mobile.prototype);
Galaxy.prototype = Object.create(Mobile.prototype);

var samsung_no = new samsung();
var Galaxy_no = new Galaxy();
document.write("<br>Model number is ", Galaxy_no.Model);
document.write("<br>Model number is ", Galaxy_no.Model_no);

