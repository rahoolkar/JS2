//high order functions that take a function as an arguement or return a function

let cities = ["delhi","gurgaon","chandigarh","noida","rohtak"];

//for-each loop 

cities.forEach(function(element){
    console.log(element);
})

//we can also write like this
cities.forEach((item)=>{
    console.log(item);
})

//or we can also do this

function printMe(item){
    console.log(item);
}

cities.forEach(printMe); //here we pass only the reference of the function 

//for-each and its different paramters
cities.forEach((item,index,array)=>{
    console.log(item,index,array);
})

//for-each loop with arrays in objects
let data = [{name:"rahulkar",age:34},{name:"udayankar",age:89},{name:"amritakar",age:56}];
data.forEach((data)=>{
    console.log(data);
    console.log(`name in every object is ${data.name} and age is ${data.age}`);
})