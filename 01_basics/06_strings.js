//string are collections of characters in js

//strings can be wriiten in single quotes and double quotos in js

//strings are immutable in natire because of performance optimizatiion

//declaring strings in javascript

//normal method

let name = "rahul";

//accessing the value of string

console.log(name[0]);

//using String object

let surname = new String("kar");

console.log(typeof name); //returns type string
console.log(typeof surname); //returns type of object

//template literals

let msg = `hello, namaste, ${name} ${surname}. good morning`;

console.log(msg);

let str = "hello world";
str = str.toUpperCase();
console.log(str);

//first str was pointing to "hello world" in the memory and after we performed a method on it and a "hello world" stays te same and "HELLO WORLD" was created in the momory and now str is pointing to it.

console.log(str.__proto__); //this is the object that contains all the methods that we can apply on string

//methods with strings

let fullName = "rahulkar";

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.charAt(0));
console.log(fullName.indexOf("r"));

console.log(fullName.substring(0,4));
console.log(fullName.slice(-7,-4)); //only difference between slice and substring is that slice method accepts negative values as start and end

console.log(fullName.trim()); //removes the spaces from start and end of the string

let url = "https://www.apna%20hostel.com";
console.log(url.replace("%20", "--"));

console.log(fullName.includes("kar"));
