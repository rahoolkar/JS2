//map function is a higher order function that means it takes a function as an argument or returns a function

const arr = [1, 2, 3, 4, 5];

//make this array a double array

function twice(elem) {
  return elem * 2;
}

//make the thrice

function thrice(elem) {
  return elem * 3;
}

// const output = arr.map(thrice); //returns a new array

// console.log(output);

//filter function - filters the elements of an array on a given condition and returns a new array

// const output = arr.filter(function (elem) {
//   if (elem % 2 == 0) {
//     return elem;
//   }
// });

// console.log(output);

//reduce function - we use reduce function when we want traverse the whole array and want to get one value out of it

//find the sum of array

// const output = arr.reduce(function (acc,curr){
//     acc = acc + curr;
//     return acc;
// },0);

//find the max element from this array

// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }

//   return max;
// }, 0);

// //callback function of reduce function takes 2 value - accumulator(the single value which we will return) and current(shows the current value of on which it is traversing)

// console.log(output);

//tricky examples

const users = [
  { firstName: "rahul", lastName: "kar", age: 26 },
  { firstName: "udayan", lastName: "kar", age: 17 },
  { firstName: "utpal", lastName: "kar", age: 90 },
  { firstName: "amrita", lastName: "kar", age: 90 },
];

//output = {26 : 1, 17 : 1, 90 : 2};

const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age]+1;
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(output);
