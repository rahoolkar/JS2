//for loops
for(let i=1;i<=10;i++){
    console.log(i);
}


//nested for loops

for(let i=1;i<=12;i++){
    for(let j=1;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log("outer loop = ", i);
}

//loops with arrays 

let array = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<array.length;i++){
    let element = array[i];
    console.log();
}

//break and continue
for(let i = 10;i<=100;i++){
    if(i==50){
        break; //break will break the loop and we will come out of the loop
    }
    console.log(i);
}

for(let i = 10;i<=100;i++){
    if(i==50){
        console.log("imposter detected");
        continue; //continue will skip the current iteration and will continue with the rest of the loop
    }
    console.log(i);
}