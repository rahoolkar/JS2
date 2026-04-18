let p = new Promise(function (resolve, reject) {
  console.log("p")
  setTimeout(() => {
    resolve(200);
  }, 2000);
});

p.then(function (value) {
  console.log("first then callback");
  console.log(value);
  let p2 = new Promise(function (resolve, reject) {
    console.log("p2")
    setTimeout(() => {
      resolve(400);
    }, 2000);
  });

  return p2;
})
  .then((value) => {
    console.log("second then callback");
    console.log(value);

    return 600; //js will take this value and wrap it inside a promise and resolve it with that value
  })
  .then((value) => {
    console.log("third then callback");
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("end");