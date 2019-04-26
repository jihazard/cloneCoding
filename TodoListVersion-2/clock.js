
const clock= document.querySelector('.js-clock');
const time = clock.querySelector("h1")
const INTERVAL_TIME = 1000;

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    
    time.innerText =  `${hour < 10 ? `0${hour}` : hour } :  ${min < 10 ? `0${min}` : min }  :  ${sec < 10 ? `0${sec}` : sec }`
}


function getNowTime(){
    getTime();
 setInterval(() => {
     getTime();
 }, INTERVAL_TIME); 
}


function init(){
    getNowTime();
}

init();