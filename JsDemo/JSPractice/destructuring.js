//array/object -->variables

//array:
const numbers=[1,2,3];
const [a,b,c]=numbers;
console.log(a);
console.log(b);
console.log(c);

const lang=["JavaScript","Java","Ruby","Python","GO"];
const [p,q,...testLang]=lang;
console.log(p);
console.log(q);
console.log(testLang);


//Object :
const user ={
    firstName:"Tom",
    LastName:"Smith",
    age:30
};

const {firstName,LastName,city="LA",age}=user;
console.log(firstName);
console.log(LastName);
console.log(age);
console.log(city);

//function parms
//without destructuring
function printUserName(person){
    console.log(person.firstName + ' ' + person.LastName);
}
const person={
    firstName:"John",
    LastName:"Doe"
};
printUserName(person);


//function parms
//with destructuring
function printUserName1({firstName,LastName}){
    console.log(firstName + ' ' + LastName);
}
const person1={
    firstName:"Testing",
    LastName:"automation"
};
printUserName1(person1);