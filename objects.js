//singleton method
let obj = new Object({name:"udayan",age:67}); //singleton method of returning a object
console.log(obj); 

//object literals
let dictionary ={
    name : "rahul",
    age : 90,
    "city" : "delhi"
}

//accessing the values of the objects 
console.log(dictionary.name);
console.log(dictionary["age"]);
console.log(dictionary["city"]);

//changing the values of the object
dictionary.email = "abc@gmail.com";
dictionary.age = 22;

//defining a symbol in the object
let sym = Symbol("mark");
dictionary[sym] = "this is my symbol";
console.log(dictionary);

//adding a function in the object
dictionary.hello = function(){
    console.log("hello");
}

dictionary.goodmorning = () =>{
    console.log("goodmorning")
}

console.log(dictionary);

//calling the function
console.log(dictionary.hello); // this is give me the refernce to the functionn
dictionary.goodmorning(); //calling the function

//Object Methods
Object.freeze(obj);

let newObj = Object.assign({},dictionary,obj);
console.log(newObj);

let keys = Object.keys(dictionary);
console.log(keys); //array return hota hai

let values = Object.values(dictionary);
console.log(values); //array return hota hai

//using spread operator with objects 
let newObj2 = {...dictionary,...obj};
console.log(newObj2);

//Nesting objects 
let regularUser = {
    dateOfJoining : {
        time:{
            minutes:56,
            hours:17,
            seconds:23
        },
        fulldate : {
            year:2020,
            month:12,
            day:5
        }
    },
    name:"rahulkar",
    age:67
}

//accessing the values in the nested objects
console.log(regularUser.dateOfJoining?.time?.hours);

//asking the object if it has the mentioned property
console.log(obj.hasOwnProperty("id"));