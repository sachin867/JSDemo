class Car {
    minSpeed=1000;
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    startEngine(){
        console.log('Starting engine... for Car');
    }
}
class Audi extends Car{
    // startEngine(){
    //     console.log('Starting engine... for Car');
    // }
    autoParking(){
        console.log("Audi --auto parking");
    }
}

const s1=new Audi();
s1.startEngine();
console.log(s1.minSpeed);