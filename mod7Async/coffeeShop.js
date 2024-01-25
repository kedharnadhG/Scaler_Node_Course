//promise for placing an order
function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for Coffee is recieved");
    } else {
      reject("Other orders won`t accepted");
    }
  });
}

//after accepting order, we need to resolve it and make him/her wait for sometime for that we create another promise
function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("order is being processed");
    resolve(`${order} and is Served`);
  });
}

// placeOrder('coffee').then(function(orderplaced){
//     console.log(orderplaced)
//     //now , we need to process it right
//     let orderIsProcessd = processOrder(orderplaced) //here we are getting another promise (resolve) right, that need to be handled with another then
//     //console.log(orderIsProcessd)    //o/p: Promise { 'Order for Coffee is recieved and is Served' }
//     return orderIsProcessd
// }).then(function(processedOrder){  //whatever is returned i.e catched here(processedOrder)    //chaining of Promise
//     console.log(processedOrder)  //O/p: Order for Coffee is recieved and is Served
// }).catch(function(err){
//     console.log(err)
// })                            //Solution with Promises

//Async Await  - keywords
//to handle the errors, here we can actually use Try-Catch block

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("coffee");    // "Soup"
    console.log(orderPlaced);

    let processedOrder = await processOrder(orderPlaced);
    console.log(processedOrder);
  } catch (error) {
    console.log(error);
  }
}
serveOrder();
