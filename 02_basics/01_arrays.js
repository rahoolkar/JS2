//arrays in javascript

//array is an object data type

//it allows us to store multiple values of different datatypes under a single variable name

//aarays in javascript is resizable and if we copy an array to another array then we get the reference of it.

let myArray = [10, "rahul", true, "udayan", 23];

console.log(myArray[1]);

//Arrays methods

console.log(myArray);

myArray.push(90);
myArray.push(70);

console.log(myArray);

myArray.pop();
myArray.unshift(100);

console.log(myArray);

myArray.shift();

console.log(myArray);

console.log(myArray.includes(88));
console.log(myArray.indexOf(88));

console.log(myArray.join("-")); //return type string

//slice and splice

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const slicedArray = array.slice(1, 3);
console.log("original array -> ", array);
console.log("sliced array -> ", slicedArray);

const splicedArray = array.splice(1, 3);
console.log("original array -> ", array);
console.log("spliced array -> ", splicedArray);

//the start (inclusive) and end(exclusive) in the slice method 
//the start (inclusive) and end(inclusive) in the splice method

//slice creates an another array and give the portion of the array and it doesnot make changes to the original array
//splice method makes changes to the original array taking out the elements we mentioned in the method 