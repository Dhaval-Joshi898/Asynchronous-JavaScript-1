const divEle=document.querySelector('.card-container');

const request=new XMLHttpRequest();  // created request object of XMLHttpRequest

request.open('GET','https://dummyjson.com/users/1');

request.send();

const btn=document.querySelector('btn')

request.addEventListener('load',function(){
    console.log(request) //this will return an object
    //to get the text from we can use .responseText a property inside the object
    console.log(request.responseText)
})