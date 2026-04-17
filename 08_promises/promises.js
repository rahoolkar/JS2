let promise = new Promise(function(resolve,reject){
    console.log("inside promise");
    resolve("i am resolved");
})

//promise callback function gets executed ussi line me

console.log("start");

setTimeout(function(){
    console.log("hello from setTimeout");
},3000);

console.log("end");

console.log(promise); //new Promise constructor returns an js object and this promise object has 2 values - state and value