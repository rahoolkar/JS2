//learning about date object

let dih = new Date(); //creating a date object //this will give me milliseconds from 1 jan 1970

let stringDih = new Date("2002-01-30"); //creating a date object from a string

let classDih = new Date(2024,0,30); //creating a date object from class

//using methods with date object

console.log(dih.toString()); //to see date in a readable form

console.log(dih.toLocaleString()); //date with time

console.log(dih.toDateString()); //date only string

console.log(dih.toLocaleTimeString()) //time string

console.log(dih.toLocaleDateString("en-IN")); //date string

// methods to get the time parts

console.log(dih.getHours());

console.log(dih.getMinutes());

console.log(dih.getSeconds());

console.log(dih.getMilliseconds());

//methods to get the date parts 

console.log(dih.getFullYear()); //2026

console.log(dih.getMonth()); //2 [zero based]

console.log(dih.getDay()); //day of the month

console.log(dih.getDay()); // (0-6)

