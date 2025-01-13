//defining a string
let name = "rahul";
let grade = 'A';

//defining a string using constructor
let name2 = new String("udayan");
//this shows all the properties we can use with strings

//string interpolation using backticks
let result = `${name.toUpperCase()} scored a grade of ${grade}`;
console.log(result);


//methods with strings
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(3));
console.log(name.indexOf('a'));
console.log(name+name2);
console.log(name.concat(name2))

let newString = name2.substring(2,4);
console.log(newString);
//string are immutable and whatever we do in strings return a new string

let sliceString = name.slice(-4);
console.log(sliceString);
//we can put negative values in slice

console.log("     rahul     ".trim());
console.log("udayan is a gay".replace("gay","king"));

//asking questions
let sent = "the bird is in the sky";
console.log(sent.includes("sky"));

console.log(sent.split(" "));
//split function will split the string and return and an array

