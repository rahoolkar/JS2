//there is 2 type of memory in javascript - heap memory and stack memory

//stack memory is used by primitive data types - number, string, boolean..
//heap memory is used by non-primitive datatypes - objects, functions, arrays.

let a = 90;
let b = a;
console.log(b, "before changing the value of b");

b = 100;
console.log(b, "after changing thevalue of b");

//pass by value - when we did b = a; the value of a was copied to the varibale b not the reference was passed
//later, when we did b = 100; the value of b was changed by 100 and nothig was affected in the value of a

//but in case of heap memory which is pass by reference

let a1 = [12,24,36,48];
let a2 = a1;
console.log(a1, "value of a1");
console.log(a2, "before changing te value of a2");

a2.push(1000);
console.log(a1, "value of a1");
console.log(a2, "after changing te value of a2");

//note - changing the whole array will work differently and will not affect the value of the variable
//for example: 

let a3 = [2,4,6,8,10];
let a4 = a3;

console.log(a4, "value of a4 before changing"); // now we will get both the value of the a3,a4 same

a4= [1,2,3,4,5]; //here, we are assigning the value of the a4 to a new array meaning there will be a seperate memory created for the new array

console.log(a4, "after changing the value of a4"); // we will get the value of the new array instead of the old array