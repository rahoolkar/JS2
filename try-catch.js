try {
  console.log("hello");

  let age = 90 ;

  if(age==90){
    throw new Error("age 90 munde di");
  }

  //if an error occurs it jumps to catch block
  console.log("end");

//   setTimeout(() => {
//     console.log(abc);
//   }, 3000);

  //throwing custom error

  throw new SyntaxError("teri maa ki chu");
} catch (error) {
  console.log("jaat aaye bhaago");
//   console.log(error); // this is error object and it contains many properties about error
  console.log(error.name);
  console.log(error.message);
}

//try catch block is not resposible for asynchronous code it can only work for synchronous code
