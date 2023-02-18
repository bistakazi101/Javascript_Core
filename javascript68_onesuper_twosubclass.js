function Bookstore() {
    this.book = "Bookname";
    this.self = "Top Right";
    this.color = "Silver";
}
function Books() {
    this.Books = "nepali";
    this.self_no = "Bottom left";
    this.color_name = "red";
}
function copy() {
    this.copy = "line";
    this.self_n = "right";
    this.color_n = "white";
}
Bookstore.prototype.price = "Rs3000";
Books.prototype = Object.create(Bookstore.prototype);
copy.prototype = Object.create(Bookstore.prototype);
var Nepali = new Bookstore();
var English = new Bookstore();
document.write("<br>The price of matrial is: ", Nepali.price);
document.write("<br>The price of matrial is: ", English.price);

