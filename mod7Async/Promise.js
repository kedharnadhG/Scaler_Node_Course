//how to produce a promise

let myPromise = new Promise(function(resolve, reject){
    const a= 4
    const b= 3 //4
    setTimeout(()=>{
        if(a===b){
            resolve('The both values are equal')
        }
        else{
            reject('the values were not equal')
        }
    }, 2000)

})


//Pending Stage            (bcoz, we printing the promise, before it has actually executed the result)
//It is Still in process of checking whether 2-values are equal or not
//console.log(myPromise)

//Consuming your Promises 
myPromise.then(function(result){
    console.log(result)
})  //fulfilled   (then-method)


myPromise.catch(function(failedResult){
    console.log(failedResult)
})   //Reject -stage (catch-method)  (run code without writing the catch, u will encounter an error)

//at last Your Promise will get settled