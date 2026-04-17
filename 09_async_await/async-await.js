async function fetching() {
  let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(200);
    }, 2000);
  });

  let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(300);
    }, 5000);
  });

  let p11 = await p1;
  let p22 = await p2;

  return [p11, p22];
}

fetching()
  .then(function (value) {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
