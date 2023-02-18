// checking if the obj has property

//first method
//1)Type of operator
function Mobile(Model_no)
{
    this.model= Model_no;
    this.color= "red";
    this.properties="yes";
}
var samsung= new Mobile();
var Mi = new Mobile();

if(typeof samsung.model!=="undefined")
{
    document.write("Available");
}
else{
    document.write("not exist");
}

//second method
if("color" in Mi)
{
    document.write("<br>available");
}
else{
    document.write("<br>dosnt exist");
}

//third Method
if(nokia.hasOwnProperty("properties"))
{
    document.write("available");
}
else{
    document.write("Doesnt exist");
}