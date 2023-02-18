//inheritance of classes of javascript

class father {

    showfmoney() {
        return "<br> I have Rs10000 ";
    }
}
class son extends father {
 super();
    showsmoney() {
        return "<br> I have Rs5000";
    }
}
var ram = new son();
document.write("<br> child callling father money", ram.showsmoney());