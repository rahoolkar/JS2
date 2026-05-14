const promise = new Promise(function (resolve, reject) {
  console.log("inside the promise");
  setTimeout(() => {
    resolve(200);
  }, 10000);
});

// function getData() {
//   promise.then(function (value) {
//     console.log(value);
//   });
// }

// getData();

async function handleData() {
  let value = await promise;
  console.log(value);
}

handleData();
