//Functions that returns a resolved promise
const resolvePromise=() =>{
return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("Resolved !");
    },1000);
});
};

//Functions that retrurns a rejected promise
const rejectPromise =() =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            reject("Rejected !");
        },500);
    });
    };

//use promise.race() to see which promise settles first
Promise.race([
    rejectPromise(),
    resolvePromise()
])
.then(result =>{
    console.log("Result : ",result);
})
.catch(error => {
    console.log("Error ", error);
})
