//arrays in javscript

//defining arrays using array literals

let a1 = [1, 2, 3, 4, 5];

//defining arrays using array constructor

let a2 = new Array(10, 20, 30, 40, 50);

//there is no big difference if we do this but defining arrays using array literals is the recommended way

//arrays are resizable

//arrays can contain value of many different data type

//arrays are objects in js and when we copy arrrays then we are sharing the same reference point in the storage

//accesing value of the array

console.log(a1[0]);

console.log(a1.length);

//methods in arrays

a1.push(100);
a1.push(200);
console.log(a1);

a1.pop();
console.log(a1);

a1.unshift(10000);
a1.unshift(1000);
console.log(a1);

a1.shift();
console.log(a1);

console.log(a1.includes(10000)); //true and false

console.log(a1.indexOf(4));

console.log(a1.join("-")); //returns a string

//slice and splice

let og = [1, 2, 3, 4, 5, 6, 7];

//using slice

let o1 = og.slice(1, 4);

console.log("after using slice", o1);
console.log("original array", og);

let o2 = og.splice(1, 4);

console.log("after using splice", o2);
console.log("original array", og);

//when we use splice method it actually modifies the array and the start and end are both inclusive and it returns the deleted elements in an array
//when we use slice methods it doesnot changes the array and start is inclusive and end is exclusive and it returns the elements in an array

let fruits = ["apple", "banana", "grapes"];
let veggies = ["potato", "tomatos", "spinach"];

console.log(fruits.concat(veggies)); //concat method returns a new array and it takes two different arrays and combine it together

let difficult_array = [12, [3, 4], 7, [8, 9, 10, [11, 12, 13, [45]]]];

console.log(difficult_array.flat(Infinity));

console.log(a1.reverse());

console.log(a1.sort(compare));

function compare(a, b) {
  return a - b;
}

//array object methods

console.log(Array.from("rahul")); //this methods takes input and try to convert it into array if not possible then it returns an empty array

console.log(Array.isArray("rahul")); //returns true or false

let s1 = 10;
let s2 = 20;
let s3 = 30;
console.log(Array.of(s1, s2, s3));

a1.forEach((e) => {
  console.log(e);
});

for (let e of a1) {
  console.log(e); //upar upar se
}

for(let e in a1){
    console.log(a1[e]); //in-deep dive
}