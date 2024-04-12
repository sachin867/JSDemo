//arrow function is annonymous function no name provided here

const square=num =>num*num;
const result=square(5);
console.log(result);

/*without variable name we are creating
arrow functions only '()'-used here means 'No parameter Arrow Functions'
*/
const mesg=()=>'hello new js';
console.log(mesg());


const add=(a,b) =>a+b;
console.log(add(5,10));


const getFullName=person => `${person.firstName} ${person.lastName}`
//object created
const person={
    firstName:'sachin',
    lastName:'QA'
};

const fullName=getFullName(person);
console.log(fullName);

const greet=(username='guest',age=0) =>`Hello, ${username}! you are ${age} years old`;
//without parnthesis calling function
const g1=greet();
console.log(g1);

//with parnthesis calling function
const g2=greet('tom',45);
console.log(g2);

//rest parameters ...varargs

const sum=(...numbers)=>numbers.reduce((acc,num) => acc+num, 0);
const total=sum(1,2,3,4,5);
console.log(total);

const browserInfo=(browser='chrome',...details)=>{
    console.log(`Browser:${browser}`);
    console.log('other details : ',details);
}

browserInfo();
browserInfo('firefox','115.1','mozila','headles');


//max number using Math
const findMaxNumber=(a,b,c) =>{
    return Math.max(a,b,c);
}

const maxValue=findMaxNumber(10,50,20);
console.log(maxValue);

