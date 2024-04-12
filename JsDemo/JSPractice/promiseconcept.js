const randomNumberPromise=new Promise((resolve,reject)=>{
    //async operations:
setTimeout(()=>{
    const randomValue=Math.random();
    if(randomValue >0.5){
        resolve(randomValue)
    }else {
        reject(new Error("value is too small !!"));
    }
},2000); //delay of 2secs


});

randomNumberPromise
        .then(result =>{//handlers for made promises
            console.log("promise is fulfilled with value :  " + result);
        })
        .catch(error =>{//handlers for made promises
            console.error("promise is rejected with error : ", error);
        });