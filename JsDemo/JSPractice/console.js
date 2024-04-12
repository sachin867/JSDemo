console.group("Login Feature");
console.log("Reset pwd");
console.log("Error login msg");
console.log("Enter UN/PWD");
console.groupEnd();

console.time("print 1 to N values");
for(let i=1;i<=1000;i++){
    console.log(i);
}
console.timeEnd("print 1 to N values");

 console.log("Reset pwd");
 console.log("Reset pwd");
 console.log("Reset pwd");
 console.log("Reset pwd");
 console.clear();


 console.assert(10===20, "this is failed");

function testMyJob(){
    console.trace();
}
testMyJob();

console.log("%c I Love JavaScript Coding !!!","color:red; background-color:green;border:solid");