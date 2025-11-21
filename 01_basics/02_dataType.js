"use strict" //treat all Js code as newer version

let age = 90 ;
let x = null;

//datatypes in javascript

//Primitive Data Type

//number
//null -> it is a datatype and a standalone value 
//boolean
//bigInt
//string
//symbol
//undefined -> it is a placeholder for the future value

//Non Primitive Data Type

//object

console.log(typeof "rahulkar");
console.log(typeof age);
console.log(typeof x); //object
console.log(typeof undefined); //undefined

//Symbol 

const id = Symbol("124");
const anotherId = Symbol("124"); //they will return a unique id
console.log(id);
console.log(anotherId);