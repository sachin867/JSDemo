function  getEvenNumber(value,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(value % 2 ==0){
                resolve(value);
            }
            else {
                reject(new Error("value is not even number"));
            }
        },delay);
    });
}

//promise chain
getEvenNumber(4,1000)
        .then(result =>{
            console.log("step 1 : getting the result with even number : ", result);
            return getEvenNumber(9,2000);
        })
        .then(result =>{
            console.log("step 2 : getting the result with even number : ", result);
        })
        .catch(error =>{
            console.error("promise chain error : ", error.message);
        });