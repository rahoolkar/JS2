//singleton method

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

//