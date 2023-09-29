const divEle=document.querySelector('.card-container');

const request=new XMLHttpRequest();  // created request object of XMLHttpRequest

request.open('GET','https://dummyjson.com/users/1');  //initiated request using GET method with URl of the server

request.send(); //request send to the server




request.addEventListener('load',function(){  //whenever the data is loaded in the browser from this"https://dummyjson.com/users/1'"the below action to be performed.
    console.log(request) //this will return an object
    //to get the text from we can use .responseText a property inside the object
    console.log(request.responseText)
})
