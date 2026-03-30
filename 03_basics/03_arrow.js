const user = {
  username: "udayankar",
  age: 23,
  price: 999,
  welcomeText: function () {
    console.log(`${this.username}, welcome to our website`);
    console.log(this);
  },
};

//in function (this) keyword points to the object

user.welcomeText();

console.log(this);

//in the node enviroment this points to an empty object and in the browser environment the this points to the global object.

function chai(){
    console.log(this); // here (this) points to the global object. //this object points to the bhar vala object in the case of normal function initialization
}

chai();

//now when it comes to the arrow function, this keyword points to an empty object

const arrow = () => {
    console.log("this in arrow function" ,this);
}

arrow();

//Arrow functions

const sum = (a,b) => {
    return a + b;  //explicit return 
}

const mult = (a,b) => (a*b) ;  //implicit return

console.log(sum(3,4));
console.log(mult(5,2));