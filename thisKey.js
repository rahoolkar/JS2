//a full detail study of the this keyword 

//Q1 this in global scope

console.log(this); //in this case, this will be pointing to the the global object. 
//In case of browser it is the window object and in the case of the NodeJS it is the global object

//Q2 this inside a  function 
function x () {
    console.log(this);
}
x();
//how this will work totally depends on the strict mode or non-strict mode. In the case of strict mode, this will undefined if it is the function but in the case of non-strict mode this will be equal to the global object

//if the value of this is undefined or null then the this keyword will point to the global object

//the value of this depends on how the function is calleed 

x(); //in this case, this will be pointing to undefined
window.x(); //in this case, this will be pointing to the window object

//Q3 this inside a object's method
const obj = {
    a : 10 , 
    x : function(){
        console.log(this);
    }
}

obj.x(); //this will be pointing to the obj object (this points to the object who calls the method)

//Q4 this keyword in arrow function 
function cd () {
    const o2 = {
        a : 10 ,
        x : ()=>{
            console.log(this);
        }
    }
    
    o2.x(); //this will be pointing the scope the calling object and in this case it is the global scope : window object

}

cd()