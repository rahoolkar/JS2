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

function printMyName(name = "rahul"){
    console.log(name);
}

printMyName(udayankar);
printMyName(); //undefined if we donot pass any arguement