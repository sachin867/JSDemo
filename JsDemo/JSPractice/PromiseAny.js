const getMessage =() =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("get message from API 1")
        },500);
    });
};

const getUsers =() =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            reject("Error : User Data Could not be fetched")
        },200);
    });
};

const getProducts =() =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            reject("Error : Product Info could not be fetched")
        },200);
    });
};

Promise.any([getMessage(),getUsers(),getProducts()])
.then(result => {
    console.log("First sucessful result : ", result); //will log the first resolved promise result
    
}).catch(errors => {
    console.error("All promises rejected : ", errors); //will log all rejection reason if all promises reject
    
});

