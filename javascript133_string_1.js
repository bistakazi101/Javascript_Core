// string length

var str1="String lenght";
 var str1lenght=str1lenght.length(str1);
document.write("<br> the length of string is : ", str1lenght);

//charAt lenght method() returns index of character

var str2=" character";
var character=str2.charAt(5);
document.write("<br>The character index of letter is in index : ",character);


//charCodeAt returns unicode of string of a certain index

var str4 = "string unicode";
var unicode= str4.charCodeAt(6);
document.write("<br> The unicode of Unicode letter G is : ",unicode);

//to uppercase of string

var str5="upEErCase";
var upper= str5.toUpperCase();
document.write("<br> The following data represents all data in the uppercase : ",upper);

//to lowercase
var str6="LOWWErCasE";
var lower= str6.toLowerCase();
document.write("<br> The following data represents all data in lowercase : ",lower);d

//trim spaces
var str7="    trim spaces      ";
var spaces= str7.trim();
document.write("<br> The following represent the triming of spaces: ",spaces);