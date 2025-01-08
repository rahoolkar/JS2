let inString = "33abc";
let inNumber = Number(inString);
 //when we are converting a string that is impossible to convert into number, then we get NaN.
 //NaN is a number type but it is a error that comes when conversion fails to number type
console.log(typeof inString);
console.log(typeof inNumber);

//"33" -> 33
//"33abc" -> NaN
//true -> 1 //false -> 0
//null -> 0 
//undefined -> NaN

let InNumber = " "; //empty string ke ilawa kuch bhi aaye toh its a false else true
let InBoolean = Boolean(InNumber);
console.log(InBoolean);
console.log(typeof InBoolean);


let someNumber = 90 ;
let someString = String(someNumber);
console.log(someString);
console.log(typeof someString);