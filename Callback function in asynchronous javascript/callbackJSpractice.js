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
    console.log('WELCOME')
}

greetings()
message()
//based on above calling of function first it will print function message and then function greetings after 2 seconds
//So output is---> WELCOME then after 2 seconds it will console hello

