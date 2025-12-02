//function in javascript

//defining a function
function sayMyName() {
  console.log("rahul kar");
}

//calling a function
sayMyName();

//defining a function with parameters

function sum(parameter1, parameter2) {
  console.log(parameter1 + parameter2);
}

let res = sum(2, 3);
console.log(res); // -> undefined, since sum function doesnot return anything

//defining a function that returns something
function multiply(parameter1, parameter2) {
  let result = parameter1 * parameter2;
  return result;
}

let result = multiply(2, 10);
console.log(result);

//giving default parameter in function

function printMyName(name = "rahul") {
  if (name === undefined) {
    console.log("please enter some name");
    return;
  }
  console.log(name);
}

printMyName("udayankar");
printMyName(); //undefined if we donot pass any arguement

//rest operator

function calculateItems(...items) {
  //rest operator - take all the different elements toegther and bind it in an array
  console.log(items); // items now an array
}

calculateItems(10, 20, 30, 40);

calculateItems(100, 200, 300, 400, 500);

//working with objects

function handleObject(obj) {
  console.log(`${obj.name} is my name and my age is ${obj.age}`);
}

handleObject({
  name: "udayan kar",
  age: 19,
});

//working with arrays

function handleArrays(nums) {
  console.log(nums[2]);
}

handleArrays([1,2,3,4]);
