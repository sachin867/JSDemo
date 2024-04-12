//1.object literals:{}
const user={
    name:'michael',
    age:25,
    country:'USA',
    Occuption:'Engineer'
};
console.log(user.name, + " " + user.age);

//2.Constructor Function
function car(brand,model,price){
    this.brand=brand;
    this.model=model;
    this.price=price;
};
const c1=new car("BMW","520D",1000000);
const c2=new car("Audi","620D",2000000);
console.log(c1.brand +"  " + c1.model + " " + c1.price );
console.log(c2.brand +"  " + c2.model + " " + c2.price );

//3.Class style
class customer{
    constructor(name,product){
        this.name=name;
        this.product=product;
        }
        addToCart(){
            console.log(`${this.product} added to cart`);
        }
    }

        //instance of the class :
        const cust1=new customer("Sachin","WINDOWS BOOKS");
        console.log(cust1.name + " " + cust1.product);
        cust1.addToCart();
    
        //4.Object.create () :with some prototype object
    const employeeProtoType = {
            printInfo:function(){
                console.log(`hello,emp name is ${this.name}`);
            },
        };

        console.log("==");
       const e3= Object.create(employeeProtoType);
        const e1=Object.create(employeeProtoType);
        e3.name="TOM";
        e3.printInfo;

        const person = {
            isHuman: false,
            printIntroduction: function () {
              console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
            },
          };
          
          const me = Object.create(person);
          
          me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
          me.isHuman = true; // Inherited properties can be overwritten
          
          me.printIntroduction();

    //5.Using Factory functions : return an object
    function createDepartment(deptName,hod){
        return{
            deptName:deptName,
            hod:hod,
            getDepartmentInfo:function(){
                console.log(`hello, dept name is ${this.deptName} and hod is ${this.hod}`);
            }
        }
    }

  const dept1=  createDepartment("Physics","H C VERMA",);
  dept1.getDepartmentInfo();

  console.log(dept1.deptName + " " + dept1.hod);