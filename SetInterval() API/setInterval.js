const num=document.getElementById('num')

let count=0;

num.textContent=`${count}`;

//assigned setinterval to a variable so that we can stop using that variable in clearInterval
const timer=setInterval(function(){
    count++;
    num.textContent=`${count}`;// to again print like 1,2,3,4,5..

    if(count>=6){  // to pause at 10
        clearInterval(timer)
     }
},1000)
