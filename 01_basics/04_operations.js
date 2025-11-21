const str1 = "hello";
const str2 = " world";
const str3 = str1 + str2;

console.log(str3);

console.log("1" + 2); // -> 12
console.log(2 + "1"); // -> 21
console.log("1" + 2 + 2); // -> 122
console.log(1 + 2 + "3"); // -> 33

//pehle string ha toh sab string ki tarah treat hoga and if there is number at first then the whole thing will be treatted as number.

console.log(+true); // -> 1
console.log(+"") // -> 0

let counter = 100; 
console.log(++counter) // -> 101
console.log(counter++); // -> 100
console.log(counter);