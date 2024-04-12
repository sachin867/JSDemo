//case:
//f1--resolved
//f2--rejected

const getData = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Data from getData");
        },2000);
    });
};
const getError = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            reject("Error : data is not available from getError");
        },2000);
    });
};

Promise.allSettled([
    getData(),
    getError()
])
.then(results =>{
    //here forreach will iterate to every promise statements line by lines
    results.forEach(result =>{
        if(result.status ==='fulfilled'){
            console.log("value: ",result.value);
        }
        else {
            console.error("reason for rejection: "+ result.reason);
        }
    })
})
