//1.find unique values from array
const array=[1,2,3,4,5,6,6,5,4,3,3,2,7,7]
const uniqueArray=[...new Set(array)];
console.log(uniqueArray);

//2.int to string
const num=32;
const numstr=num+'';
console.log(numstr + 40);
//or
const numstr1=String(num);
console.log(numstr1 + 50);

//3.float to int
const floatNum=3.76;
const intNum=parseInt(floatNum);
console.log(intNum);

//4.check if a variable is a number
const value=65;
if(typeof value==='number' && !isNaN(value)){
    console.log(value + ' is number');
}
else {
    console.log(value + ' is not a number');
}

//5. swap variable values
let a=5;
let b=15;
[a,b]=[b,a];
console.log(a,b);

//6.check if object has a property
const person={
    name:'John',
    age:28,
}
if(person.hasOwnProperty('name')){
    console.log('person has name property')
}

//7.remove falsy value from the array :(false,0,"",null,undefined,NAN)
const values=[0,1,false,2,'',3,null,undefined,NaN,4,5];
const newVal=values.filter(Boolean);
console.log(newVal);

//8.String -->Uppercase and lower case
const str='Naveen Automation Lab';
const u1=str.toUpperCase();
const l1=str.toLowerCase();
console.log(u1);
console.log(l1);

//9.check if array contains a vale
const lang=['java','javaScript','python','ruby'];
if(lang.includes('javaScript')){
    console.log('found')
}

//check array an empty
const empty=[];
if(empty.length===0){
    console.log("Array is empty");
}

//11.generate random number :
const min=10;
const max=20;

const randomNumber=Math.floor(Math.random()*(max-min+1))+min;
console.log(`Random Number : ${randomNumber}`);

//12.String to number
const strNumber='32';
const x1=parseFloat(strNumber);
console.log(x1);

//13.Joined array elements into a string value
const word=['hello','naveen','sachin'];
const sentence=word.join('  ');
console.log(sentence);

//14. GET OBJECT PROPERTY
const user={
    name:'Tom',
    age:25,
    dob:'01-01-1995'
};
console.log(user['name']);
console.log(user['dob']);
//here spread ... operator used for reading elements of an array
const userDuplicate={...user};
console.log(userDuplicate);

//15.clone an array (or) object :
const marks=[10,20,50,60,70,80,80];
const markDuplicate=[...marks];
console.log(markDuplicate);

//16 convert object to array
const employee={
    name:'Tom',
    age:25,
    dob:'01-01-1995'
};

//a. keys array :
const keysArray=Object.keys(employee);
console.log(keysArray);

//b.values array :
const valuesArray=Object.values(employee);
console.log(valuesArray);

//c. key-value array:
//a. values array
const KeyValArray=Object.entries(employee);
console.log(KeyValArray);

//17.get current date and time :
const currentDate=new Date();
console.log(currentDate.toLocaleString());

//18.check variable is defined :
let i;
if(typeof i ==='undefined'){
    console.log('variable is not defined');
}

//19.truncate an array/manipulate length of an array
const testing=[0,1,2,3,4,5,6];
testing.length=3;
console.log(testing);

//20.Last item of an array:
const pop=[0,1,2,3,4,5,6];
const n1=pop.slice(-1);
console.log(n1);
