//Immediately Invoked Function Expression

//()()

(function () {
  console.log("iife one working");
})();

((name) => {
  console.log("hello ", name);
})("udayankar");

(function bed() {
  console.log("named iife working");
})();
