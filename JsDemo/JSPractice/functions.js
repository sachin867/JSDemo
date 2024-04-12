//1.function declration

function add(a,b){
    return a+b;
}
function print(){
    console.log("h js");
}


const sum=add(5,6);
console.log(sum);
print();

//2.Function Expressions/annonynoums function
const multiply=function(x,y){
    return x*y;
}
const mul=multiply(5,6);
console.log(mul);

//3.Arrow functions
const divide=(t1,t2) =>t1/t2;
const div=divide(20,2);
console.log(div);

//4.Function constructor
const substract=new Function('a', 'b', 'return a-b;');
const subs=substract(10,5);
console.log(subs);

//5. IIFE (Immediately invoked function expresstion without calling these functions and these are self calling functions)
(function(){
    console.log("server is up n running on port 3000");
})();

//6.Generator function:
function* generateNumberSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator=generateNumberSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7.Annonymous function
//no specific name

const numbers=[1,2,3,4,5];
const squarenumbers=numbers.map(function(e){
    return e*e;
})
console.log(squarenumbers);

const numbers1=[1,2,3,4,5];
const squarenumbers1=numbers.map((e) =>{
    return e*e;
})
console.log(squarenumbers);

//8. Recursive function :
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    else {
        return n*factorial(n-1);
    }
}
console.log(factorial(5));

//9.Higher-Order function
function addition(a,b){
    return a+b;
}
//OPERATE IS HIGHER-ORDER FUNCTION HERE, BECAUSE WITH THE HELP OF THS FUNCT WE CAN CALL MULTIPLE FUNC
function operate(funcname,a,b){
    return funcname(a,b);
}
const s=operate(addition,7,8);
console.log(s);