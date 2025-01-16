//when a window object is created, a this keyword is also created that points to the global object that is the window object
//this points to the current working object


let student = { 
    name:"rahulkar",
    age:23,
    printdetail:function(){
        console.log(this.name); //because there is no username in the function scope and in the parent so it will throw an error
        console.log(this.age); //if we want to use the username and age defined in the object we can use this
        //with this we are telling the js to use the variables defined in the cureent object
    },
    printThis : function(){
        console.log(this); //here this will only point to the student
    }
}

student.printdetail();
student.printThis();


//this with functions in js
function this1(){
    console.log(this) //here this will point to the global object because the function is in the global scope
}

this1();

let this2 = function(){
    console.log(this); //here this will point to the function because the function is defined in the global scope
}

this2();

//this with arrow functions
let this3 = () => {
    console.log(this);//here this will point to towards empty object because this works differently with arrow function
    //this points to the upper level of the global object. ie: empty object 
}

this3();

//example of this with arrow functions

let name = "utpalkar";
let user = {
    name:"amrita kar",
    age : 88, 
    printThis : ()=>{
        console.log(this);//here this is refering to the object of the parent.
    },
    dob:{
        day:3,
        month:12,
        year:1975,
        getdob:function () {
            console.log(this);
        }
    }
}

user.printThis();
user.dob.getdob();