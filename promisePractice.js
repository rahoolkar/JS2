let cart = ["apple","book","jeans"];

let promise1 = calculateCart(cart);

promise1.then((orderId)=>{
    console.log(orderId);
    return orderId;
})
.then((orderId)=>{
    return proceedPayment(orderId);
})
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})

//creating a promise 

function calculateCart(cart){
    let promise = new Promise((resolve,reject)=>{
        //validate cart
        //create orderId

        if(validateCart(cart)){
            let orderId = "1234";
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }else{
            let error = new Error("promise was rejected");
            setTimeout(() => {
                reject(error);
            }, 7000);
        }
    })
    return promise;
}

function validateCart(cart){
    return true;
}

function proceedPayment(orderId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("payment successful");
        }, 6000);
    })
}

