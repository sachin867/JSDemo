class CAR{
    static wheels=4;
    constructor(name,model,price){
        this.name=name;
        this.model=model;
        this.price=price;
        this.wheels=50;
    }
    static stop(){
        console.log("Car--stop");
    }
    drive(){
        console.log(this.name + " is driving");
    }
}

const c1=new CAR("Honda",2023,50);
console.log(`${c1.name},${c1.model},${c1.price},${CAR.wheels}`);
console.log(CAR.wheels);
CAR.stop();
//c1.stop() //error because its non-static in nature
//CAR.drive();  //error because its non-static in nature

//static var/function : call it by using class name
//non static var/function : call it by using object reference name

