//javascript methods
//tostring method converts number to string

var tostring1= 100;
var result= tostring1.toString();
document.write("<br> Converts number to string : ",result);

//toexponent number
var expo= 12345.4543434;
var result1= expo.toExponential();
document.write("<br> Converts number to exponent : ",expo);

//to fixed method

var fixed=  123.35344;
var result2=fixed.toFixed(3);
document.write("<br> Converts or round the number of digits : ",result2);

//toprecision method()

var precision=  123.35344;
var result3= precision.toPrecision(3);
document.write("<br> converts precision number of digits : ",result3);

//isinteger method()
var integer= 123;
var result4=integer.isInteger(integer);
document.write("<br> the value is integer is : ",result4);
