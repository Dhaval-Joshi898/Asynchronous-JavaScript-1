const divEle = document.querySelector('.card-container');
function getDetails(id){  //here in parameter i will pass id So that in the link it will dynaiclaly tak ethe link of parmater in id
    const request = new XMLHttpRequest();  // created request object of XMLHttpRequest

    request.open('GET', `https://dummyjson.com/users/${id}`);  //initiated request using GET method with URl of the server
    
    request.send(); //request send to the server
    
    request.addEventListener('load', function () {
        console.log(typeof request.responseText) //this will give string by defalut REASONS mentioned above in line no 16
    
        //to convert string to object we can use JSON.parse this will reurn an object,so that we can us eit for futher working by acessing object properties(like name ,id..)
        data = JSON.parse(request.responseText)  //converted to object
        console.log(typeof (data))
        console.log(data)
        console.log(data.firstName)

        cardData(data) //here the argument is data in object

        // Creating a reqest2 for  getting data form server for other card

        const request2 = new XMLHttpRequest();  // created request object of XMLHttpRequest

        request2.open('GET', `https://dummyjson.com/users/${id-1}`);  //initiated request using GET method with URl of the server
        
        request2.send(); //request send to the server

        request2.addEventListener('load', function () { //Another callback function
            console.log(typeof request2.responseText) 
        
            //to convert string to object we can use JSON.parse this will reurn an object,so that we can us eit for futher working by acessing object properties(like name ,id..)
            data = JSON.parse(request2.responseText)  //converted to object
            console.log(typeof (data))
            console.log(data)
            console.log(data.firstName)
    
            cardData(data)
        })

    })
}
getDetails(2)

function cardData(data){  //it takes data as paramter
     //The below is the template literal the html code is written inside the template literal  so that we can use variable and change it dynamically for any other user object with idfferent id
     const card = `<div class="user-card">
     <img src=${data.image} alt="Profile Image" />
     <h3>${data.firstName} </h3>
     <h3>${data.lastName}</h3>
     <p class="email">${data.email}</p>
     <button class="btn">View Profile</button>
     </div>`
 
     // divEle.innerHTML = card  //added the whole html card code inside the main div
     divEle.insertAdjacentHTML("beforeend",card)
     //afterbegin--> to add data at start
     //beforeend-->to add data at end 
}






































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

