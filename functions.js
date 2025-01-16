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

//functions and hoisting 


//calling the function
console.log(addition(23,45));
//console.log(multiplication(3,3)); //here we will get the error because jab tak line 60 read nahi hoti by javascript tb tak js ko nahi pata that its a function usse pehle its undefined


//function statement and declaration
function addition(num1,num2){
    return num1+num2;
}


//function expression
function multiplication(num1,num2){
    return num1*num2;
}


//understanding scopes
function outer(){
    let username = "rahulkar"
    function inner(){
        let age = 23;
        console.log(username);
        console.log(age);
        //here the console.log will print the username and age because of lexixal scope
    }

    console.log(username);
    //console.log(age)
    //here username will be printed and age will not be printed bacause of the lexical scoping

    inner();
}
outer();


//arrow functions
let additionTwo = (a,b)=> (a+b);

let answer = additionTwo(3,4);
console.log(answer)

//returning object from arrow functions
let objReturn = ()=> ({username:"udayankar",age:17});
let getObject = objReturn();
console.log(getObject);