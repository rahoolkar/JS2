//while loop in javascript

let i = 0;
while (i <= 10) {
  console.log(`Value of i is ${i}`);
  i = i + 2;
}

console.log(`Value of i after the loop has ended is ${i}`);

let arr = [10, 20, 30, 40, 50, 60, 70];

let x = 0;
while (x < arr.length) {
  console.log(arr[x]);
  x++;
}

console.log(`Value of x after the loop has ended is ${x}`);

//do-while loop in javascript

let m = 100;

do {
  console.log(m); //first it run the code inside the do then it will check for the condition in the while part 
  m++; 
} while (m < 10);

console.log(`Value of m after the loop has ended is ${m}`);