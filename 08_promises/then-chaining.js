function createOrder(cart) {
  let p1 = new Promise(function (resolve, reject) {
    if (!cart) {
      let error = new Error("cart is not avaliable");
      reject(error);
    }

    setTimeout(() => {
      const orderId = "1234";
      resolve(orderId);
    }, 3000);
  });

  return p1;
}

function proceedToPayment(orderId) {
  let p2 = new Promise(function (resolve, reject) {
    if (!orderId) {
      let err = new Error("Order Id is not avaliable");
      reject(err);
    }

    setTimeout(() => {
      const paymentInfo = "4545";
      resolve(paymentInfo);
    }, 4000);
  });

  return p2;
}

function showOrderSummary(paymentInfo) {
  let p3 = new Promise(function (resolve, reject) {
    if (!paymentInfo) {
      let err = new Error("payment Info");
      reject(err);
    }

    setTimeout(() => {
      const walletBalance = "234444";
      resolve(walletBalance);
    }, 3000);
  });

  return p3;
}

function showWallet(walletBalance) {
  const p4 = new Promise(function (resolve, reject) {
    if (!walletBalance) {
      const err = new Error("wallet Balance");
      reject(err);
    }

    setTimeout(() => {
      const msg = "Successful Order";
      resolve(msg);
    }, 4000);
  });
  return p4;
}

const cart = ["pant", "kurta", "jeans"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    proceedToPayment(orderId).then(function (paymentInfo) {
      console.log(paymentInfo);
      showOrderSummary(paymentInfo).then(function (walletBalance) {
        console.log(walletBalance);
        showWallet(walletBalance).then(function (ans) {
          console.log(ans);
        });
      });
    });
  })
  .catch(function (error) {
    console.log(error);
  });
