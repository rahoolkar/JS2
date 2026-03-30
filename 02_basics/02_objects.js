//objects in javascript is a collection of key value pairs

//defining an object using object

let s = Symbol("id");

let o1 = {
  name: "rahul",
  age: 89,
  city: "rohtak",
  [s]: 123,
};

o1[s] = 9000;
//defining an object using object class

let o2 = new Object();
o2.name = "udayan";
o2.age = 90;
o2.city = "panipat";

o2.score = 989; //adding a new key value to the object

delete o1.name; //deleting a key value pair from the object

console.log(o1);
console.log(o2);

//accessing the values of the object

console.log(o2.name); //using dot

console.log(o1["name"]); //using brackets

console.log(o1[s]); //accessing the symbol

//changing the values in the object

o2.city = "kolkata";

console.log("after changing the object", o2);

o1.name = "rahul kar";
//defining a function in the object

o1.greetings = function () {
  console.log(`hello. ${this.name}`);
};

// console.log(o1.greetings);
console.log(o1.greetings());

//merging two different obejcts

let b1 = {
  1: "a",
  2: "b",
};

let b2 = {
  3: "C",
  4: "D",
};

let target = Object.assign(b1, b2); //first parameter is the target object and the second parameter is all the objects we want to merge
console.log(target);

console.log(Object.keys(target));
console.log(Object.values(target));
console.log(target.hasOwnProperty("a")); //checks if the given parameter exists or not as a key


//methods of object 

//1. Object.freeze() -> locks the object and will not allow any changes to the object
//2. Object.assign({},o1,o2,o3) -> merges the object to the passed as a para meter to the target object
//3. Object.keys() -> returns an array with all the keys of the object
//4. Object.values() -> returns an array with all the values of the object
