//basic callback function


function greet(parameter){   
    parameter()
}

function msg(){
    console.log('Hello ')
}

greet(msg)  //msg function pass as parameter 

// function greetings(){
//     setTimeout(()=>{
//         console.log('hello')
//     },2000)
// }

// function message(){
//     console.log('WELCOME')
// }

// greetings()
// message()
//based on above calling of function first it will print function message and then function greetings after 2 seconds
//So output is---> WELCOME then after 2 seconds it will console hello


//but now if you want that welcome should print in console after the greetings function is executed i.e after hello is console

function greetings(callback){
        setTimeout(()=>{
            console.log('hello')
            callback()
           // console.log(callback) op is below
            /*ƒ message(){
                console.log('WELCOME')
        }*/
        },2000)
    }
    
function message(){
        console.log('WELCOME')
}
    
greetings(message)

//this greetings function is taking another function as a parameter

