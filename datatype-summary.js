//Datatypes in JavaScript - Javascript data types are mainly divided how they are stored in the memory and how we access the value from the memory.

// Primitive Datatype - Call by value - Number, String, Symbol, Null, Boolean, BigInt, Undefined. - means when we copy the value of the variable we get the copy of the value of the variable not the reference

let a = 90; // returns number as type
let b = null; //returns object as type
let c = "rahul"; //returns string as type
let d = Symbol("1234"); //returns symbol as type
let e = true; //returns boolean as type
let f = BigInt("1233444556688282929"); //let f = 1234567890n; //returns bigint as type
let g = undefined; //let g ; // returns undefined as type

// console.log(typeof d);

// Non Primitive Datatype - Call by reference - Arrays, Objects, Functions. - means when we copy the variable then we get the reference of memory where the varibale is stored

let array = ["delhi", "bombay", "jaipur"];

function print() {
  console.log("hello world");
}

let obj = {
  name: "rahulkar",
  age: 24,
  city: "rohtak",
};

console.log(obj);
console.log(typeof obj);

//Javascript is a loosely typed language because we never define what type of data will be assigned to the variable when we initialize it.

//JavaScript is a dynamically typed language.
