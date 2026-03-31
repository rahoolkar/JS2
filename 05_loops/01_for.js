//for loop in javascript

for(let i=0; i<=10; i++){
    console.log(i);
}

let arr = [10,20,30,40,50,60];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//continue and break

for(let i=100; i<=110; i++){
    if(i==105){
        break; //tellling the code to come out of the loop
    }
    console.log(i);
}

for(let i=100; i<=110; i++){
    if(i==105){
        continue; //telling the code to skip this itertion and continue from the next
    }
    console.log(i);
}
