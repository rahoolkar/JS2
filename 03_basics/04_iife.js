//Immediately Invoked Function Expression

//()();

(function () {
  console.log("hello world from iife");
})(); // <- ending me ; is very important for iife to understand where the line is ending

((a, b) => {
  console.log(a + b);
})(2, 3);

//Named IIFE

(function chai() {
  console.log("i love chai");
})();
