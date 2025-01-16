//immedietly invoked function expression

//iife syntax

//named iife
(function printHello(){
    console.log("hello-world");
})();


//no named iife
(function(){
    console.log("goodmorning")
})();

//arrow function iife
(()=>{
    console.log("i love coding")
})();

//passing arguements to iife
(function sum(a,b){
    console.log(a+b);
})(2,3); //<- passing arguments to the function

//when using iife using semicolom at the end the function is very important else we get error