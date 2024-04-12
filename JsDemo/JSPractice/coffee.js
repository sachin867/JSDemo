
function startCoffeeMachine(callback){
    console.log('Starting the coffee machine');
    setTimeout(function () {
        console.log('Coffee machine is ready .');
        callback('Coffee machine is ready .');
    },2000);
}

function grindCoffeeBeans(callback){
    console.log('Grinding coffee beans...');
    setTimeout(function () {
        console.log('Coffee beans are ground.');
        callback('ground coffee');
    },1000);
}

function boilWater(callback){
    console.log('Boiling water ...');
    setTimeout(function () {
        console.log('Water is boiled.');
        callback('boiled water');
    },1500);
}

function pourBoilingWaterIntoCup(boilWater,callback){
    console.log('Pouring boiling Boiling water into a cup...');
    setTimeout(function () {
        console.log('Boiling water is in the cup.');
        callback(boilWater + ' in cup');
    },500);
}

function addCoffeeToCup(groundCoffe,callback){
    console.log('adding ground coffee to the cup...');
    setTimeout(function () {
        console.log('coffee is added to the cup.');
        callback('coffee is added to ' + groundCoffe);
    },500);
}


function stirCoffee(coffeeInCup,callback){
    console.log('Stirring the coffee..');
    setTimeout(function () {
        console.log('coffee is stirred.');
        callback('enjoyable' + coffeeInCup);
    },300);
}

function enjoyCoffee(funalCoffee){
    console.log('Enjoying my ' + funalCoffee);
}



//callback  hell
// startCoffeeMachine(function(coffeeMachineStatus){
//     grindCoffeeBeans(function(groundCoffe){
//         boilWater(function(boiledWater){
//             pourBoilingWaterIntoCup(boiledWater,function(waterInCup){
//                 addCoffeeToCup(groundCoffe,function(coffeeInCup){
//                     stirCoffee(coffeeInCup,function(funalCoffee){
//                         enjoyCoffee(funalCoffee);
//                     })

//                 })
//             })
//         })
//     })
// })

//callback  hell WITH ARROW
startCoffeeMachine((coffeeMachineStatus) =>{
    grindCoffeeBeans((groundCoffe) =>{
        boilWater((boiledWater) =>{
            pourBoilingWaterIntoCup(boiledWater,(waterInCup) =>{
                addCoffeeToCup(groundCoffe,(coffeeInCup) =>{
                    stirCoffee(coffeeInCup,(funalCoffee) =>{
                        enjoyCoffee(funalCoffee);
                    })

                })
            })
        })
    })
})
