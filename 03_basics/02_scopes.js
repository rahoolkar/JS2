//scopes in javascript 

let a = 90 ; //block scoped variable
const b = 100 ;  //block scoped variable
var c = 9000 ; //global scoped variable 

if(true){
  let a = 1; //here let and const will remain in their blocks and wont interfere with the values outside the block (global scope)
  const b = 2;
  var c = 3; // since var is created into the global scope and it will change the value of the c everytime 

  console.log("Inner", a);
  console.log("Inner", b);
  console.log("Inner", c);
}

console.log("Outer", a);
console.log("Outer", b);
console.log("Outer", c);

//global object of node env is different then the global env of the browser env

//closure in javascript - inner scope can have access to all the varibales of the outer scope, bur outer scope donot have the access to any of the inner scope

//example

function outer(){
  let name = "rahul kar"

  function inner(){
    let age = 90 ;
    console.log(age); //here js will try to lookfor the age varibale in the function memory and it find the age and shows us the value of the age variable
    console.log(name); //here js will try to look for the name but it is not present in the function memory so it will try to look for it in the outer function scope scope and so on.. 
  }
  inner();
}

outer();