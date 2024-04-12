class Car{
    constructor(name,price,model,color){
        this.name=name;
        this.price=price;
        this.model=model;
        this.color=color;
    }
    refule(){
        console.log(this.name + "car is refulled");
    }
}

//new keyword create an object
const c1=new Car("BMW",1000,"520D","BLACK");
console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);
c1.refule();