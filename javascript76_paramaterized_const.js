//paramaterizzed constructor

class Const {
    constructor(Model_no) {
     //instance member
     this.Model=Model_no;
    }
    //prototype member
    display()
    {
        return"I am here to display";
    }
}
var Mobile= new Const("samsung");
document.write("<br>Value of default constructor",Mobile.Model);