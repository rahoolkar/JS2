//singleton object

//when we create an object with constructor we have a singleton object

//defining symbol in the object

let mySymbol = Symbol("mysym");

//object literals

let jsUser = {
  name: "rahulkar",
  [mySymbol]: 10001,
  age: 90,
  state: "haryana",
  city: "rohtak",
  email: "rahul@google.com",
};

//defining a function in the object
jsUser.greeting = function () {
  console.log(`hello namaste ${this["name"]}`);
};

//accessing the objects

console.log(jsUser.email);
console.log(jsUser["name"]);
console.log(jsUser[mySymbol]);
console.log(jsUser.greeting);
console.log(jsUser.greeting());
