let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(200);
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(500);
  }, 3000);
});

console.log(p1, p2);
