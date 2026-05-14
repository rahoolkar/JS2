const promise1 = new Promise(function (resolve, reject) {
  console.log("inside the promise1");
  setTimeout(() => {
    resolve(200);
  }, 10000);
});

const promise2 = new Promise(function (resolve, reject) {
  console.log("inside promise 2");
  setTimeout(function () {
    resolve(300);
  }, 5000);
});

// function getData() {
//   promise.then(function (value) {
//     console.log(value);
//   });
// }

// getData();

async function handleData() {
  console.log("start");
  const value1 = await promise1;
  console.log("promise1 resolved");
  console.log(value1);

  const value2 = await promise2;
  console.log("promise2 resolved");
  console.log(value2);

  console.log("end");
}

handleData();

console.log("global line ending");
console.log("sayonara");