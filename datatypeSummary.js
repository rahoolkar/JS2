//there are 2 types of datatype 

//1. primitive datatype (pass by value) : nn ss bb u
let a = null ;
let b = 123;
let c = "rahul";
let d = Symbol("123");
let e = true;
let f = BigInt("12345667");
let g = undefined;


console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof typeofve);
console.log( f);
console.log( g);

//2. non-primitive datatype(pass by reference) :: obj, arr, function

let student = {
    name:"rahul",
    marks:{
        maths:45,
        english:67,
        sst:54
    }
}

let arr = [12,"kar",{name:"rahul",age:23}];

let functionF = function(){
    console.log("hello world");
}

functionF();


