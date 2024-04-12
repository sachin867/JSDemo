console.log("JAVASCRIPT".length);
console.log("JAVASCRIPT".charCodeAt(4));

console.log("JAVASCRIPT".substring(-2,2));

let lang="JAVA_JAVASCRIPT_PYTHON";
let arr=lang.split("_");
console.log(arr[0]);
console.log(arr[7]);

//Here only one replace
console.log("Dev Test Framework".replace("Dev","JS"));
//Here all will be replace
console.log("Dev Test Framework Dev".replaceAll("Dev","JS"));

console.log("Dev".padEnd(10,"*"));