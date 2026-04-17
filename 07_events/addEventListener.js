const button = document.getElementById("click");

function onClickFunction(event) {
  //whenever any event happens js take that all the information about the event and wraps into the object and gives us
  console.log(event);
  console.log(event.target);
  console.log(event.type);
  console.log("button clicked");
}

button.addEventListener("click", onClickFunction);

setTimeout(function () {
  button.removeEventListener("click", onClickFunction); //in removeEventListener we have to pass the same function reference otherwise it wont work
}, 3000);

//setTimeout function returns me a id and we can use this id in clearTimeout function to refer that setTimeout, but in case of addEventListener we have to pass the same function reference to work
