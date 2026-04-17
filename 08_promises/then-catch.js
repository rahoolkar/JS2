let p = new Promise((resolve, reject) => {
  console.log("promise callback function");
  setTimeout(function () {
    resolve(200);
    // console.log(p); // {state : "fulfilled", result : 200}
  }, 3000);
});

console.log("start");

console.log(p); // {state : "pending", result : "undefined"}

p.then(function (value) {
  console.log(value);
});

//then function takes a callback which only executes when the promise gets resolved

p.catch(function (error) {
  console.log("some error occured");
});

//catch function takes a callback which only executes when the promise is rejected

//we can also write something like this

p.then(
  (resolveValue) => {
    console.log(resolveValue);
  },
  (errorValue) => {
    console.log(errorValue);
  }
);
