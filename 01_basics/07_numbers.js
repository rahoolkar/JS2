const age = 90 ;
const score = 100.6788; // its a primitive number value
const balance = new Number(3456.234); //its an object containing number value

console.log(balance.toFixed(2));

console.log(score.toPrecision(4));

const hundreds = 1000000;

console.log(hundreds.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Maths object in javascript

console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(34.67));
console.log(Math.ceil(1.1));
console.log(Math.floor(1.9));
console.log(Math.min(45,67));
console.log(Math.max(56,34,56,90));
console.log((Math.random()*10) + 1); //0-1


//for range 10-20

let min = 10; 
let max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min);