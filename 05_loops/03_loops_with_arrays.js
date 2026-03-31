//loops with arrays

let arr = [12, 34, 67, 89, 90, 23];

//for-of looop

for (let val of arr) {
  console.log(val);
}

//for-each loop

arr.forEach(function (iterator) {
  console.log("for each loop", iterator + 1);
});

arr.forEach((it) => {
  console.log("square of", it, "is ", it * it);
});

function printName(e) {
  console.log(e);
}

arr.forEach((value, index, array) => {
  console.log("value", "index", "array");
});

arr.forEach(printName);
//for-in loop

for (let key in arr) {
  console.log(key);
  console.log(`indexes are ${key} and its value is ${arr[key]}`);
}

//loops with objects

let obj = {
  name: "rahul kar",
  age: 78,
  city: "kolkata",
  isLoggedIn: true,
};

//for-of looop with object

// for (let val of obj) {
//   console.log(val);  //here it wont work with object
// }

//for-in loop with object

for (let val in obj) {
  console.log(val);
  console.log(`key is ${val} and its value is ${obj[val]}`);
}

//Map Data Structure in js

let map = new Map(); // map contains unique values and it is similar like an object in the javascvript but only difference is that it saves the order of the key and value pairs in which you store.

map.set("In", "India");
map.set("Fr", "France");
map.set("In", "India");
map.set("Rus", "Russia");

// console.log(map);

//for of loop in map

// for(let val of map){
//     let [key , vale ] = val; // val = ["In","India"] => destructure => let [key,vale] = val ;
//     console.log(val); // val => ["In","India"];
//     console.log(`key is ${key} and value of it is ${vale}`);
// }
