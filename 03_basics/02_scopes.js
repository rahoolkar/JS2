//variables defined in the global scope

var a = 10;
let b = 20;
const c = 30;

{
  // variables defined in the block scope

  var a = 100;
  let b = 200;
  const c = 300;

  console.log("Inner", a);
  console.log("Inner", b);
  console.log("Inner", c);
}

console.log("Outer", a);
console.log("Outer", b);
console.log("Outer", c);

//value of varible defined by var changes because it is defined in the global scope. This is main problem with using the var.
//outer varibles should be accessed in the inner scope but inner variables should not be accessed in the outer scope.

//closure in javascript

function outer() {
  const a = 90;
  function inner() {
    // const a = 100;
    console.log(a);
  }
  console.log(a);
  inner();
}

console.log(a); 

outer();

//perfect closure example