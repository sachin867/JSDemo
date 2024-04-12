
function startCoffeeMachine(){
    return new Promise((resolve) =>{
    console.log('Starting the coffee machine');
    setTimeout(function () {
        console.log('Coffee machine is ready .');
        resolve('Coffee machine is ready .');
    },2000);
});
}

function grindCoffeeBeans(){
    return new Promise((resolve) =>{
    console.log('Grinding coffee beans...');
    setTimeout(function () {
        console.log('Coffee beans are ground.');
        resolve('ground coffee');
    },1000);
});
}

function boilWater(){
    return new Promise((resolve) =>{
    console.log('Boiling water ...');
    setTimeout(function () {
        console.log('Water is boiled.');
        resolve('boiled water');
    },1500);
});
}

function pourBoilingWaterIntoCup(boilWater,callback){
    return new Promise((resolve) =>{
    console.log('Pouring boiling Boiling water into a cup...');
    setTimeout(function () {
        console.log('Boiling water is in the cup.');
        resolve(boilWater + ' in cup');
    },500);
});
}

function addCoffeeToCup(groundCoffe,callback){
    return new Promise((resolve) =>{
    console.log('adding ground coffee to the cup...');
    setTimeout(function () {
        console.log('coffee is added to the cup.');
        resolve('coffee is added to ' + groundCoffe);
    },500);
});
}


function stirCoffee(coffeeInCup,callback){
    return new Promise((resolve) =>{
    console.log('Stirring the coffee..');
    setTimeout(function () {
        console.log('coffee is stirred.');
        resolve('enjoyable' + coffeeInCup);
    },300);
});
}

function enjoyCoffee(funalCoffee){
    console.log('Enjoying my ' + funalCoffee);
}

//promise chaining
startCoffeeMachine((coffeeMachineStatus)=>{
    console.log(coffeeMachineStatus);
    return grindCoffeeBeans();
})
.then((groundCoffe) =>{
    console.log(groundCoffe);
    return boilWater();
})
.then((boiledWater) =>{
    console.log(boiledWater);
    return pourBoilingWaterIntoCup(boiledWater);
})
.then((waterInCup) =>{
    console.log(waterInCup);
    return addCoffeeToCup(waterInCup);
})
.then((coffeeInCup)=>{
    console.log(coffeeInCup);
    return stirCoffee(coffeeInCup);
})
.then((finalCoffee)=>{
    enjoyCoffee(finalCoffee);
})
.catch((error) =>{
    console.log("Error occured ", error);
});
