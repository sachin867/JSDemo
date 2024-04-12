const fs= require('fs');


const data=fs.readFileSync("sachin.txt","utf-8");
console.log(data);

console.log("Bye sachin");

// console.log("start");
// for(let i=0;i<3000;i++){
//     console.log(i);
// }


// //Async behaviour
// console.log("start");
// setTimeout(()=>{
//     console.log("time out is done");
// },2000);
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");
// console.log("end");