//higher order function in js - function that take a callback function as a argument are called higher order function

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter function - returns an array of elements that satisfies the condition

let filteredNums = nums.filter((num) => {
  return num % 2 == 0;
});

console.log(filteredNums);

//map function - returns a new array with changed elements

let newArray = nums.map((num, index, array) => {
  console.log(num, "->", index, "->", array);
  return num + 10;
});

console.log(newArray);

//reduce function - returns a value - takes an accumulator which stores the value and also the current value of the array

const myTotal = nums.reduce(function (acc, currVal, index, array) {
  console.log(
    `accumulator value is ${acc} and current value is ${currVal} and index is ${index}`
  );
  return acc + currVal;
}, 0);

console.log(myTotal);