//singleton object

let user = new Object({
  name: "rahulkar",
  age: 78,
  balance: 780000,
  email: "rahul@google.com",
});

// defining object literals

let user2 = {
  name: {
    fullname: {
      firstname: "udayan",
      middlename: "kumar",
      lastname: "kar",
    },
  },
  gender: "gay",
  balance: 10,
};

//accessing the objects

console.log(user2?.name?.fullname?.firstname); //safe play

//Object object methods

Object.freeze(user);

let targetobj = Object.assign({}, user, user2); //returns the target object
console.log(targetobj) ;

//or

let allUser = { ...user, ...user2 };
console.log(allUser);

console.log(Object.keys(user)); // returns an array with all the keys
console.log(Object.values(user2)); //returns an array with all the values
console.log(Object.entries(user)); //returns an array like this -> [ [k,v] , [k,v] , [k,v]] 
