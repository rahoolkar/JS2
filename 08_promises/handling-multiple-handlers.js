let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(200);
  }, 3000);
});

p.then(function (value) {
  console.log("first then callback ->", value);
});

p.then(function (value) {
  console.log("second then callback ->", value);
});

p.then(function (value) {
  console.log("third then callback ->", value);
});

//attaching multiple handlers togther and it runs one after another after the promise is resolved

