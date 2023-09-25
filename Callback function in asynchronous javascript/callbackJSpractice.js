//basic callback function


function greet(parameter){   
    parameter()
}

function msg(){
    console.log('Hello ')
}

greet(msg)  //msg function pass as parameter 

function greetings(){
    setTimeout(()=>{
        console.log('hello')
    },2000)
}

function message(){
    console.log('wELCOME')
}

