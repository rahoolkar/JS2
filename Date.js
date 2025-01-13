//Date is object in JS that helps us to define dates 

let mydate = new Date(); //mydate is a object

console.log(mydate);
console.log(typeof mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

//passing arguments to the date object
let newDate = new Date(2024,0,30); //YYYY-MM-DD// months starts from 0 index
console.log(newDate.toDateString());

let newDate2 = new Date(2023,0,30,17,30) //YYYY-MM-DD-HH-MM //24 hour format
console.log(newDate2.toLocaleString());

let createDate = new Date("2022-01-30");
console.log(createDate.toLocaleDateString())


