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

delete o1.name //deleting a key value pair from the object

console.log(o1);
console.log(o2);

//accessing the values of the object

console.log(o2.name); //using dot

console.log(o1["name"]); //using brackets

console.log(o1[s]); //accessing the symbol

//changing the values in the object

o2.city = "kolkata";

console.log("after changing the object", o2);

o1.name = "rahul kar"
//defining a function in the object 

o1.greetings = function(){
  console.log(`hello. ${this.name}`);
}

// console.log(o1.greetings);
console.log(o1.greetings());
 


