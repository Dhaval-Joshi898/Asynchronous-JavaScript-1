const btn=document.getElementById("btn");

const h3=document.getElementById('heading3');


btn.addEventListener('click',function(){
    h3.textContent='Clicked on button';
  
    
    setTimeout(function(){
        console.log('after 5 sec')
    },6000)
    setTimeout(()=>{
        h3.textContent='';
    },4000)
})



// console.log('hello world')
// setTimeout(()=>{
//     console.log(1)
// },1000)
// setTimeout(()=>{
//     console.log(2)
// },2000)
// setTimeout(()=>{
//     console.log(3)
// },3000)
// setTimeout(()=>{
//     console.log(4)
// },4000)