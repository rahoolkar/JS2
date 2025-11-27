const mydate = new Date();

console.log(typeof mydate); // -> object
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

const myCreatedDate = new Date(2025,0,30);
const myCreatedDateWithTime = new Date(2025,0,30,1,12);

console.log(myCreatedDate);
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toLocaleDateString());

const newDate = new Date();

console.log(newDate.getDay());
