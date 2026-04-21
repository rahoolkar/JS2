//async is a keyword that is used before a function to make a function async function

//async function always return a promise

//await is keyword that is used before a promise that make the js wait for the promise to resolve and store the value of it in the variable 

//the value with which the promise is settled is stored in the variable 

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("yayy");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("yayy");
  }, 10000);
});

async function getData() {
  console.log("start");
  const v1 = await p1;
  console.log("value->", v1);
  const v2 = await p2;
  console.log("value->", v2);
  console.log("end");
}

getData();
console.log("hello world");
console.log("namaste javascript");

//when the js encounters the await it checks if the promise os resolved or not if not then the function gets out of the call stack and then code below the funtion call runs
//after the promise is resolved the function is again put into call stack and executed line by line.
//if it again sees a await then it will check if the promise iof resloved or not and if not resolved it will again pop the function from the call stack and if the promise is resolved then it will continue executing the code