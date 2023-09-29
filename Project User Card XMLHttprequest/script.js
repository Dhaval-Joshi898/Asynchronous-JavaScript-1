const divEle = document.querySelector('.card-container');

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
    
    
        //The below is the template literal the html code is written inside the template literal  so that we can use variable and change it dynamically for any other user object with idfferent id
        const card = `<div class="user-card">
        <img src=${data.image} alt="Profile Image" />
        <h3>${data.firstName} </h3>
        <h3>${data.lastName}</h3>
        <p class="email">${data.email}</p>
        <button class="btn">View Profile</button>
        </div>`
    
        divEle.innerHTML = card  //added the whole html card code inside the main div
    
    })
}

getDetails(2);  //calling the function with different id 
