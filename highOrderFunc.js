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

//for-each loop doesnot return anything it makes changes to the original array

let num = [1,2,3,4,5,6,7,8,9,10];
num.forEach((element)=>{
            element = element*2;
})

console.log(num); //array remains as it is after this

//more high order function with array

//filter 
let newNum = num.filter((element)=>{
    return (element>=5 && element%2==0);
})
console.log(newNum);

//map 
let number1 = [1,2,4,5,6,7,8];
let new2 = number1.map((element)=>{
    return element+2;
})
console.log(new2);

//chaining methods
let new3 = number1.map((element)=>{
    return element+3;
}).map((element)=>{
    return element+5;
})

console.log(new3);

//reduce method
let reducedValue = [1,2,3].reduce((result,element)=>{ //here result will start from value 0
    return result+element;
})
console.log(reducedValue);

let reducedValue2 = [1,2,3].reduce(function(result,element){
    console.log(`result value = ${result} and element value is ${element}`)
    return result+element;
},5)
console.log(reducedValue2);
//here the value of result will start from 5 and it will go on like this

//use case for reduce method 
let shopping = [{name:"js",price:2999},{name:"java",price:3450},{name:"react",price:6000}];
let priceCal = shopping.reduce((result,element)=>{
    console.log(element.price);
    return result+element.price;
},199);
console.log(priceCal);