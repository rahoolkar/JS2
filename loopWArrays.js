//for-of loop with arrays 

let cities = ["rohtak","hisar","panipat","bhiwani"];
for(let city of cities ){
    console.log(city);
}

//for-of loop with maps 

let map = new Map();
map.set("In","India");
map.set("Af","Africa");
map.set("Fr","France");

//console.log(map);

for(let values of map){
    let [key,value] = values;
    //destructed the values because it had values inside the array
    console.log(key);
    console.log(value);
}

//for-in loop with object

const object = {
    name:"rahulkar",
    age:23,
    marks:88
}

for(let prop in object){
    console.log(object[prop]);
}

//we cannot iterate the objects usinf for-of loops but we can do by using for-in loops

//for-in loops with arrays //deep-dive loop
for(let city in cities){
    console.log(city); //this will print the index value of the array
    console.log(cities[city]); //this will print the values of the array 
}