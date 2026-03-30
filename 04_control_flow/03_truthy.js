//truthy and false values in strings in javascript

const email = "rahul@ai.com"; //this is a truthy value because it contains soe string
const name = ""; //this is  a false value because here we are jaan bhoj kar khali chod rahe ha and this will give us a false value

let array = []; //this is a truthy value

if (array) {
  console.log("statement is true");
} else {
  console.log("statement is false");
}

//here are some falsey values in javascript
//0, "", null, undefined, false, NaN

//except these all the values are truthy values

//"0","false"," ",[],{},function(){}

//how to check if the array is empty or not

const myArray = [];

//how to check of an object is empty or

const myObj = {};

if (Object.keys(myObj).length) {
  //Object.keys will return [] and when we do .length on it it will return me 0 which is a falsey value
  console.log("true statement executed");
} else {
  console.log("false statement executed");
}

// ?? operator in jacascript -> type safety ke liye -> null or undefined ko ignore kar dega and will take the safety values in the variables

let val = 5 ?? 10;
let vale = null ?? 10;
let value = undefined ?? 10;

console.log("val ->", val);
console.log("vale -> ", vale);
console.log("value ->", value);

//teranry operator

const price = 90;

const answer = price > 100 ? "expensive" : "sasta";

console.log(answer);

let age = 12 ; 

age >= 18 ? console.log("eligible for voting") : console.log("not eligible for the voting");