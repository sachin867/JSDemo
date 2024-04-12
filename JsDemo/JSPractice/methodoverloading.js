function print(){
    console.log("hi");
}
function print(name){
    console.log("hi" +  name);
}
function print(name,age){
    console.log(" hi " + name  + " age   " + age);
}

//calling
print();

function displayBrowserInfo(browserName,browserVersion,remoteExecution){
    if(typeof browserVersion==='number' && typeof remoteExecution==='boolean'){
        console.log(`Browser : ${browserName},'version :' ${browserVersion}, 'remoteExe :' ${remoteExecution}'`);
    }else if(typeof browserVersion==='number'){
        console.log(`Browser : ${browserName},'version :' ${browserVersion},`);
    }else{
        console.log(`Browser : ${browserName}`);
    }
}

displayBrowserInfo('chrome',115,true);
displayBrowserInfo('chrome',115);
displayBrowserInfo('firefox');