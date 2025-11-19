const score = "233abc";

console.log(typeof score);

const stringToNumber = Number(score); //type conversion

console.log(typeof stringToNumber);
console.log(stringToNumber);

// point to remember -> NAN is not a number which comes when javascript fails to convert the string number into number, but iska type number hota hai

const x = null;

const covertedX = Number(x); // null -> 0 //undefined -> NAN //true -> 1 //false -> 0 // "" -> 0(false) // "hello" -> 1(true)

console.log(typeof covertedX);
console.log(covertedX);

const someNumber = 90;
const stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);