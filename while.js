//while loop 

let counter = 1 ; 
while(counter<=15){
    console.log(`counter value is ${counter}`);
    counter = counter + 2;
}

//do-while loop
//pehle kaam hoga then condition check hogi

let iterator = 1;
do{
    console.group(`iterator value is ${iterator}`);
    iterator = iterator + 3;
}while(iterator<20);