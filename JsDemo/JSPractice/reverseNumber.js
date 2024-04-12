//reverse a number :
//12345 -->54321/10

function reverseNumber(num){
    //0-9 same number
    if(num>=0 && num<=9){
        return num;
    }
    let reverseNum=0;
    while(num !=0){
        reverseNum=reverseNum*10+(num%10);
        num=Math.floor(num/10);
    }
    return reverseNum;
}

console.log(reverseNumber(12345678));