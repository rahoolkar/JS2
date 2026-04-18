//Promise.all ([p1,p2,p3]); => it will return an array of all the resolved promise value after every promise is resolved
//if any one promise throws an error it will throw an error

//Promise.allSettled([p1,p2,p3]) => it will wait for all the promises to get settled be it success or failure and it will return me an array of all the values of promises

//Promise.race([p1,p2,p3]) => it will return me the value of the first settled promise it can be a success or failure

//Promise.any([p1,p2,p3]) => it will return me the value of th first resolved value of the promise, it all the promises fail it will throw me an error and it will be a collection of all the errors from promises

let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("val 1");
  }, 3000);
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("error 2");
  }, 1000);
});

let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("val 3");
  }, 2000);
});

// Promise.all([p1, p2, p3])
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise.allSettled([p1, p2, p3])
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Promise.race([p1, p2, p3])
//   .then(function (value) {
//     console.log("then block");
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log("error block");
//     console.log(error);
//   });

Promise.any([p1, p2, p3])
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error); //all promise rejected so this will will be an aggregated error [err1,err2,err3]
  });
