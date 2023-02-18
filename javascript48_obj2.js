//javascript obj2
//acessing or adding object properties


var obj = {

    name1:"ram",
    name2:"shyam",
    name3:"hari",
    fun1:function(){
        document.write("hellow word");
    }
};
document.write(obj.name1);
document.write(obj.name2);
document.write(obj.fun1());
// deleting the property
delete obj.name3;
document.write(obj.name3);