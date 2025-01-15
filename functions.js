//defining a function //function declaration and function statement
function goodmorning(){
    console.log("good morning");
}

//calling the function 
goodmorning(); 

function sum(para1,para2){ //parameters 
    return para1+para2; //code after return statement will be ignored
}

let add = sum(2,4); //arguments //jab hum arguements me kuch bhi nahi pass karte hai toh undefined aata hai
console.log(add); 

//functions with rest operator
function addition (...arr){ //here arr is an array
    let sum = 0 ;
    arr.forEach((element)=>{
        sum = sum  + element;
    })
    return sum; 
}

let ans = addition(1,2,4,4,5,6,7,7,8);
console.log(ans);


//functions with objects 
let user = {
    name:"rahul",
    age:67
}
function handlingObject(anyob){
    return `${anyob.name} is the username and age is ${anyob.age}`;
}

console.log(handlingObject(user));

//functions with arrays
function handlingArrays(array){
    return array[1];
}

console.log(handlingArrays([1,2,3,4,5]));