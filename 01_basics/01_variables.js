const accountId = 909090; //once declared cannot be changed
let accountName = "Rahul Kar"; //ideal method for declaring variables in javascript
var accountPassword = "rahul@1001"; //not the recommmeded method to declare variables in javascript
accountEmail = "rahul@google.com"; //when we declare variables like this - js creates accountEmail as a global object and this is accesible everywhere
let accountState; //undefined

console.table([
  accountId,
  accountName,
  accountPassword,
  accountEmail,
  accountState,
]);
