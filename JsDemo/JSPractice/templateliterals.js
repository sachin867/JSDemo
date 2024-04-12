const name="sachin";
const age=35;
//backtick
const mesg=`hello, my name is ${name} and age is ${age}`;
console.log(mesg);

const multiline=`hi my self sachin
                i am a traveller and Tech Consultant
                on salesforce and hobbies and passion reading a books
                travelling and explore new places`

                console.log(multiline);

    const a=10;
    const b=20;
    const result=`the addition of ${a} and ${b} is ${a+b}`;
    console.log(result);

    function getXpath(name){
        return `input[@id=${name}]`;
    }
    console.log(getXpath('Sachin'));