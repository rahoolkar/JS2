//function in javascript

//defining a function
function sayMyName() {
  console.log("my name is rahul kar");
}

//refering the fucntion
console.log(sayMyName);

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
  if (!name) {
    //if name doesnot exists
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

function handleObject(anyobject) {
  console.log(
    `hi, my name is ${anyobject.username} and my age is ${anyobject.age}`
  );
}

const o1 = {
  username: "rahul kar",
  age: 90,
};

handleObject(o1);

handleObject({
  username: "udayan kar",
  age: 78,
});

//working with arrays

const arr = [10,20,30,40,50];

function handleArrays(nums) {
  console.log(nums[2]);
}

handleArrays(arr);

handleArrays([1, 2, 3, 4]);
