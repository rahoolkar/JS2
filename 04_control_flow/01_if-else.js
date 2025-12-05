//conditions in javascript

const balance = 5500;

if (true) {
  console.log("true statement executed");
} else {
  console.log("false statement executed");
}

if (balance < 5000) {
  console.log("less than 5000");
} else if (balance < 6000) {
  console.log("less than 6000");
} else if (balance < 7000) {
  console.log("less than 7000");
} else if (balance > 1000) {
  console.log("greater than 1000");
} else {
  console.log("else statement executed");
}

const userLoggedIn = true;
const userPaymentDone = true;
const userIndian = true;

if (userLoggedIn && userPaymentDone && userIndian) {
  console.log("course activated");
} else {
  console.log("course not activated");
}

const userLoggedInFromGoogle = true;
const userLoggedInFromGithub = false;

if (userLoggedInFromGoogle || userLoggedInFromGithub) {
  console.log("welcome inside the website");
} else {
  console.log("please login again");
}
