function checkAge(age){
    if(age > 18 && age < 100){
        console.log("VOTE BRO");
    }
    else if(age > 150) {
        console.log("most senior vote");

    }
    else{
        if(age == -150){
            console.log("NOT born");
        }else{
            console.log("NOT ELGIBLE");
        }
       
    }
}
checkAge(-150);