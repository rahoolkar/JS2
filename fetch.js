//fetch is a api that is provided by browser to js by window(global object)

//fetch api is used to make api calls from js and it is a async function *returns a promise

async function getData() {
  const response = await fetch("https://api.github.com/users/rahoolkar"); //it will return a promise and this promise has a response object as result and we have to use .json() to convert it into json

  const json = await response.json(); //.json() is a async function that is use to convert the response body to json

  console.log(json);
}

console.log("start");
getData();
console.log("end");