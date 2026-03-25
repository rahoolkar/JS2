let mydih = new Date();

console.log(mydih);
console.log(typeof mydih); //returns type as object

console.log(mydih.toString());
console.log(mydih.toLocaleDateString());
console.log(mydih.toLocaleString());
console.log(mydih.getMilliseconds());
console.log(mydih.getMinutes());

//defining my own date

let mycreatedDate = new Date(2002, 0, 30, 13, 12);
console.log(mycreatedDate.toLocaleString());

//to get milliseconds

let milli = Date.now();
console.log(milli);

//methods with date object
let newDate = new Date();

console.log(newDate.getMonth()+1);
console.log(newDate.getDay()+1); //0 based indexing
