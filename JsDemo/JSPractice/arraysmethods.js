let employee=[
    {name:"john",age:30,gender:"male"},
    {name:"john1",age:35,gender:"female"},
    {name:"john2",age:40,gender:"male"},
    {name:"john3",age:25,gender:"female"},
    {name:"john4",age:55,gender:"male"},
];

let femaleEmpover30=employee.filter((emp)=>{
    return emp.gender==="female" && emp.age >30;
});

console.log(femaleEmpover30);


//reduce
let numb=[1,2,3,4,5];
let sum=numb.reduce((acc,num) => acc+num,0);
console.log(sum);

//max number in the array:
let top1 = [10,5,25,8,30,15];
let maxnum=top1.reduce((max,num)=>{
    if(num >max ){
        return num;
    }else {
        return max;
    }
}, top[0]);

console.log(maxnum);