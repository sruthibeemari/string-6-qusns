//1.take two strings with spaces at starting of one string and 
//at the ending of another string remove the spaces and 
//concat the both string and 
//convert the combined string into uppercase string
var a="   hello";
var b="world   ";
let c=a.trimStart().concat(b.trimEnd()).toUpperCase();
console.log(c);

//2nd Extract Middle Portion of the string and
 //get the last index of char of extracted string and
// Convert the portion to Lowercase
var a1="My name iS Sruthi";
var a2=a1.slice(3,10);
console.log(a2);
console.log(a2.charAt(6).toLowerCase());
console.log();
//Shorthand method
//console.log(a1.slice(3,10).charAt(6).toLowerCase());

//3rd 3.take a single char and concat string to that char and 
//convert the resulted string to uppercase and 
//then extract the last second char 

var b="H";
var s="apple";
var d=b.concat(s);
console.log(d.charAt(4).toUpperCase());
//console.log(b.concat(s).toUpperCase().charAt(4));

//4.we have 2 string and extract first 3 chars of first string and
 //extra last 3 chars of another string and concat those 2 results together
// and first char and last char of the resulted concatinated string should as uppercase

var str1="samsung";
var str2="laptop";
let exstr1=(str1.slice(0,3));
let exstr2=(str2.slice(3,6));
let caps=(exstr1.concat(exstr2));
console.log(caps);
var beg=caps.charAt(0).toUpperCase();
var last=caps.charAt(caps.length-1).toUpperCase();
var middle=caps.slice(1,-1);
var ff=beg+middle+last;
console.log(ff);

 

//5.You are given a string with extra spaces at the beginning and end.
 //You need to trim the string, make the first and last characters uppercase, 
 //extract a specific part of the string, 
 //concatenate it with another string

var a="   hello  ";
var b="how are you";
var trim=a.trim();
var first=trim.charAt(0).toUpperCase()
var second=trim.charAt(trim.length-1).toUpperCase()
var middle=trim.slice(1,-1);
var final=first+middle+second;
console.log(final);
//extracting specific char of string(b)
var extrct=b.slice(3,7);
console.log(a.concat(extrct).trim());
// 6."hello there , how are you " find the index of are word in the sentence
var string="hello there, how are you";
console.log(string.indexOf("are"));