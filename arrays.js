//defining an array //arrays are always object in js
let array = [0,1,1,2,3];

//copying an array will share the same reference 

//defining an array by using constructor
let arr = new Array(12,3,45,56,76);

//acessing the arrays
console.log(array[0]);

//changing the values of array
array[0] = 100;

//accessing the not defined number
console.log(array[90]); //this is will show undefined

//array methods
console.log(array.length);
console.log(array.toString());
console.log(array.push(21));
console.log(array.pop());
console.log(array.shift());
console.log(array.unshift(67));
console.log(array.reverse());
console.log(array.sort());

console.log(array.includes(6)); 
console.log(array.indexOf(1)); //if the value doesnot exist the it will return -1 else the index of the element

console.log(array.join("*")); //converts the array into string

//slice 
console.log("A",array);
let newA = array.slice(1,4); //returns a new array
console.log(newA);
console.log("B",array)
//slice doesnot change the array

//splice
let newA2 = array.splice(1,3);
console.log(newA2);
console.log("A",array);
//splice changes the original array
