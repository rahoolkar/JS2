//walking the dom
console.log(document.getElementById("parent").children); //returns a html collection
console.log(document.getElementById("parent").childNodes); //returns a nodelist
console.log(document.getElementById("parent").firstChild);
console.log(document.getElementById("parent").lastChild);
console.log(document.getElementById("parent").previousSibling);
console.log(document.getElementById("parent").nextSibling);
console.log(document.getElementById("parent").firstElementChild);
console.log(document.getElementById("parent").lastElementChild);
console.log(document.getElementById("parent").nextElementSibling);
console.log(document.getElementById("parent").previousElementSibling);
//searching the dom

console.log(document);
console.log(document.documentElement);
console.log(document.title);
console.log(document.body);
console.log(document.head);

//getElementById, getElementsByClass, getElementByTag

console.log(document.getElementById("heading")); //return element
console.log(document.getElementsByClassName("box")); //returns html collection
console.log(document.getElementsByTagName("div")); //returns html collection

//match,closest,contains

console.log(document.getElementById("heading").matches(".heading"));
console.log(document.getElementById("heading").closest(".parent"));
console.log(
  document
    .getElementsByClassName("parent")[0]
    .contains(document.getElementById("heading"))
);

//innerHTML, outerHTML, textContent, innerText

console.log(document.getElementById("id1").outerHTML);
console.log(document.getElementById("id1").innerHTML);
console.log(document.getElementById("id1").textContent);
console.log(document.getElementById("id1").innerText);

//attributes methods

document.getElementById("heading").setAttribute("hello", "namaste");
console.log(document.getElementById("heading"));

console.log(document.getElementById("heading").getAttribute("class"));

console.log(document.getElementById("heading").attributes); //returns a list of all attributes

console.log(document.getElementById("heading").hasAttribute("class"));

//Inserion Methods

const h2 = document.createElement("h2");
h2.innerHTML = "This is heading 2";

const parent = document.getElementById("parent");
parent.append(h2);
parent.prepend(h2);
parent.after(h2);
parent.before(h2);

//InserAdjacentHTML, inserAdjacentElement, insertAdjacentText

const adjacentHTML = document.createElement("p");
adjacentHTML.innerHTML = "p tag here";

parent.insertAdjacentHTML("beforebegin", "<h3>hi</h3>");
parent.insertAdjacentElement("afterbegin", adjacentHTML);
parent.insertAdjacentText("afterend", "text here onli");

//changing id, class

parent.id = "parent1";

parent.className = "box border"; //it overrides the class names

console.log(parent);

console.log(parent.classList); //returns a list

parent.classList.add("hello");

parent.classList.remove("border");

parent.classList.toggle("banana");
