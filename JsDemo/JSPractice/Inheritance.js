class Automobile{
    constructor(chasisNumber){
        this.chasisNumber=chasisNumber;
    }
    useAeroDynamic(){
        console.log("Automobile --aeroDynamic " + this.chasisNumber);
    }
}

class Vechicle extends Automobile{
    constructor(make,model,year){
        super(10000);
        this.make=make;
        this.model=model;
        this.year=year;
    }
    getInfo(){
        return `${this.make},${this.model},${this.year}`;
    }
    startEngine(){
        console.log('Starting engine...' + this.make);
    }
    stopEngine(){
        console.log('Stopping engine...');
    }
}

//child(sub class)
class Car extends Vechicle {
constructor(make,model,year,fuelType){
    super(make,model,year);
    this.fuelType=fuelType;
    }
    driveCar(){
        console.log('drving this car ' + this.model + " " + this.fuelType + " "+ this.year);
    }
}

class Truck extends Vechicle {
    constructor(make,model,year,loadingcapacity){
        super(make,model,year);
        this.loadingcapacity=loadingcapacity;
        }
        driveTruck(){
            console.log('drving this truck ' + this.model + "capacity " + this.loadingcapacity);
        }

    }

    //creating the objects (instances) :new keyword

    const car=new Car("Honda","Civic",2023,"petrol");
    const truck=new Truck("TATA","SUMO",2023,1000);
    car.startEngine();
    console.log(car.getInfo());
    car.useAeroDynamic();
    truck.startEngine();
    console.log(truck.getInfo());
    
