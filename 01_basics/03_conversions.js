//conversions to number

let score = "33";
let convertedScore = Number(score);
console.log(convertedScore); //33
console.log(typeof convertedScore); //number

let string = "33abc";
let convertedString = Number(string);
console.log(convertedString); //NaN - JS was not able to convert it into number datatype so it throw a "not a number" but its type is number
console.log(typeof convertedString); //number

let nullValue = null;
let convertedNullValue = Number(nullValue);
console.log(convertedNullValue); //empty or intentional empty place is considered to be 0
console.log(typeof convertedNullValue); //number

let age = undefined;
let convertedAge = Number(age);
console.log(convertedAge); //NaN - since undefined can have any value in the future so it is NaN
console.log(typeof convertedAge); //number

let emptyString = "";
let convertedEmptyString = Number(emptyString);
console.log(convertedEmptyString); // 0 - intentional empty space is always a zero
console.log(typeof convertedEmptyString); //number


//conversions to string
let num = 0;
let convertedNum = String(num);
console.log(convertedNum);// "90"
console.log(typeof convertedNum) //string

//conversions to boolean
let str = 1 ;
let convertedStr = Boolean(str);
console.log(convertedStr);
console.log(typeof convertedStr); 


// undefinded, intentional empty space are always false