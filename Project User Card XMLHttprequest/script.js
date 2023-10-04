const divEle = document.querySelector('.card-container');
function getDetails(id){  //here in parameter i will pass id So that in the link it will dynaiclaly tak ethe link of parmater in id
    const request = new XMLHttpRequest();  // created request object of XMLHttpRequest
    console.log(request)

    request.open('GET', `https://dummyjson.com/users/${id}`);  //initiated request using GET method with URl of the server
    
    request.send(); //request send to the server
    
    request.addEventListener('load', function () {
    //    console.log(typeof request.responseText) //this will give string by defalut REASONS mentioned above in line no 16
        
        //to convert string to object we can use JSON.parse this will reurn an object,so that we can us eit for futher working by acessing object properties(like name ,id..)
        data = JSON.parse(request.responseText)  //converted to object

        // console.log(typeof (data))
        // console.log(data)
        // console.log(data.firstName)


        cardData(data,"beforeend") //here the argument is data in object  and position .




        // Creating a reqest2 for  getting data form server for other card
        const request2 = new XMLHttpRequest();  // created request object of XMLHttpRequest
        
        request2.open('GET', `https://dummyjson.com/users/${id-1}`);  //initiated request using GET method with URl of the server
        
        request2.send(); //request send to the server



        //The below callback function will run after the above function with id 2 is given and then this below function will run for {id-1}

        request2.addEventListener('load', function () { //Another callback function
          //  console.log(typeof request2.responseText) 
          //the below code will check the status(propery) of object  and f there is no data it will not  give any value the card will not display
          //in below the id=0 have no data
          if (request2.status===404){
            
            return
          }
        
            //to convert string to object we can use JSON.parse this will reurn an object,so that we can us eit for futher working by acessing object properties(like name ,id..)
            data = JSON.parse(request2.responseText)  //converted to object

         //   console.log(typeof (data))
         //   console.log(data)
         //   console.log(data.firstName)
    
            cardData(data,'afterbegin',"other")
        })
        const request3 = new XMLHttpRequest();  // created request object of XMLHttpRequest

        request3.open('GET', `https://dummyjson.com/users/${id+1}`);  //initiated request using GET method with URl of the server
        
        request3.send(); //request send to the server



        //THe below callback function will run after the above function with id 2 is given and then this below function will run for {id-1}
        request3.addEventListener('load', function () { //Another callback function
          //  console.log(typeof request2.responseText) 
        
            //to convert string to object we can use JSON.parse this will reurn an object,so that we can us eit for futher working by acessing object properties(like name ,id..)
            data = JSON.parse(request3.responseText)  //converted to object
            
        //    console.log(typeof (data))
        //    console.log(data)
        //    console.log(data.firstName)
    
            cardData(data,'beforeend',"other")
        })
 
    })
}


//Now i want that the id passed in parameter will come at "beforEnd" and {id-1} come "afterBegin"

//I can passed a paramter in carData as a position so that to call this cardDatafunction inside callback function with a "beforened" or "afterbegin" ARGUMENTS.

function cardData(data,position,className=''){  //it takes data and position(can be beforend or afterbegin)  as paramter
     //The below is the template literal the html code is written inside the template literal  so that we can use variable and change it dynamically for any other user object with idfferent id
     const card = `<div class="user-card ${className}">
     <img src=${data.image} alt="Profile Image" />
     <h3>${data.firstName} </h3>
     <h3>${data.lastName}</h3>
     <p class="email">${data.email}</p>
     <button class="btn">View Profile</button>
     </div>`
 
     // divEle.innerHTML = card  //added the whole html card code inside the main div

     divEle.insertAdjacentHTML(position,card)   

     //afterBegin--> to add data at start
     //beforEend-->to add data at end 
}

//Calling the main function
getDetails(1)
//what if request passed and it does not exit in the server?
//for example for id =0 there will be 404 error 





































// const request = new XMLHttpRequest();  // created request object of XMLHttpRequest

// request.open('GET', 'https://dummyjson.com/users/2');  //initiated request using GET method with URl of the server

// request.send(); //request send to the server


// // request.addEventListener('load',function(){  //whenever the data is loaded in the browser from this"https://dummyjson.com/users/1'"the below action to be performed.

// //     console.log(request) //this will return an object inside which there are properties like "responseText" which we can use

// //     //to get the text from we can use .responseText a property inside the object
// //     console.log(request.responseText)
// //     console.log(typeof request.responseText)  //it gives string type
// //     /*When you execute console.log(typeof request.responseText) after making an XMLHttpRequest and receiving a response, 
// //     it will return the data type of the responseText. In this case, it will return "string" because the responseText property contains the response from the server as a string.*/
// // })

// request.addEventListener('load', function () {
//     console.log(typeof request.responseText) //this will give string by defalut REASONS mentioned above in line no 16

//     //to convert string to object we can use JSON.parse this will reurn an object,so that we can us eit for futher working by acessing object properties(like name ,id..)
//     data = JSON.parse(request.responseText)  //converted to object
//     console.log(typeof (data))
//     console.log(data)
//     console.log(data.firstName)


//     //The below is the template literal the html code is written inside the template literal  so that we can use variable and change it dynamically for any other user object with idfferent id
//     const card = `<div class="user-card">
//     <img src=${data.image} alt="Profile Image" />
//     <h3>${data.firstName} </h3>
//     <h3>${data.lastName}</h3>
//     <p class="email">${data.email}</p>
//     <button class="btn">View Profile</button>
//     </div>`

//     divEle.innerHTML = card  //added the whole html card code inside the main div

// })
//---------------------------------------------------------------------------------------------------------------------------------------------
// function getDetails(id){  //here in parameter i will pass id So that in the link it will dynaiclaly tak ethe link of parmater in id
//     const request = new XMLHttpRequest();  // created request object of XMLHttpRequest

//     request.open('GET', `https://dummyjson.com/users/${id}`);  //initiated request using GET method with URl of the server
    
//     request.send(); //request send to the server
    
//     request.addEventListener('load', function () {
//         console.log(typeof request.responseText) //this will give string by defalut REASONS mentioned above in line no 16
    
//         //to convert string to object we can use JSON.parse this will reurn an object,so that we can us eit for futher working by acessing object properties(like name ,id..)
//         data = JSON.parse(request.responseText)  //converted to object
//         console.log(typeof (data))
//         console.log(data)
//         console.log(data.firstName)
    
    
//         //The below is the template literal the html code is written inside the template literal  so that we can use variable and change it dynamically for any other user object with idfferent id
//         const card = `<div class="user-card">
//         <img src=${data.image} alt="Profile Image" />
//         <h3>${data.firstName} </h3>
//         <h3>${data.lastName}</h3>
//         <p class="email">${data.email}</p>
//         <button class="btn">View Profile</button>
//         </div>`
    
//         // divEle.innerHTML = card  //added the whole html card code inside the main div
//         divEle.insertAdjacentHTML("beforeend",card)
//         //afterbegin--> to add data at start
//         //beforeend-->to add data at end 
//     })
// }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// getDetails(2);  //calling the function with different id 
// //if i call the  function with another id as ARGUMENTS it will take that data and insert in the card  NOTE"there will be  no extra card added in the webpage
// //this is because everytime a function is called with different arguments of id the previous is replaced with new id data becuase of "divEle.innerHTML = card "
// getDetails(3); 
// getDetails(4); 

