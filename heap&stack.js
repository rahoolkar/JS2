//Primitive dataType uses stack memory for storing the value. 
//Non Primitive DataType uses heap memory for storing the value.

let number1 = 90 ;
let number2 = number1 ; 
console.log(number2);
number2 = 1000; 
console.log(number1);
console.log(number2); 

//In the stack memory we only get the copy of the value and not the original reference. 

let o1 = {
    name : "Rahul",
    age : 23
}

let o2 = o1;

console.log(o2) ; //Now, o1 and o2 are refering to the same object in the memory 

o2.email = "rahul@google.com";

console.log(o2);
console.log(o1);

//Since, they were refering to the same object in the memory so the changes dont in the another object will e reflected to the another object

