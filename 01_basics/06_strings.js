const name = "rahul"; //this creates a primitive string //lightweight //stores directly into the memory

const fullName = new String("rahulkar"); //calling the String object //heavy //rarely used

const url = "https://www.google.com/rahul-kar/";

console.log(
  `hi i am ${name.toLowerCase()}, and my full name is ${fullName.toUpperCase()}`
); //using backticks

console.log(name.toUpperCase());

console.log(name.__proto__);

console.log(fullName.__proto__);

console.log(fullName.length);

console.log(fullName[0]);

console.log(name.charAt(1));

console.log(fullName.indexOf("h"));

console.log(url.includes("udayan"));

console.log(url.replace("google","yahoo"))

//Strings are immutable in nature in javascript, means whenever we perform any methods on string it makes copy of the string first and then performs the action on the copy.