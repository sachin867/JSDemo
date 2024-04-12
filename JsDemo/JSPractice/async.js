const fs= require('fs');


const data=fs.readFile("sachin.txt","utf-8",(error,data)=>{
    console.log(data);
});


console.log("Bye sachin");