const age = 90;
const score = 100.6788; // its a primitive number value
const balance = new Number(3456.234); //its an object containing number value

console.log(balance.toFixed(2));

console.log(score.toPrecision(4));

const hundreds = 1000000;

console.log(hundreds.toLocaleString("en-IN"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Maths object in javascript

console.log(Math.PI); //3.14
console.log(Math.min(12, 24, 36, 48)); //12
console.log(Math.max(1, 2, 4, 5, 56)); //56
console.log(Math.abs(-44)); //44
console.log(Math.round(78.89)); //79
console.log(Math.floor(49.9)); //49
console.log(Math.ceil(45.1)); //46
console.log(Math.pow(2, 3)); //8
console.log(Math.sqrt(49)); //7

//for range 10-20

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+min);
