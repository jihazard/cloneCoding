const form = document.querySelector(".js-form");
const input= form.querySelector("input")
const h1 = form.querySelector("h1")

const CURRENT_USER = "currentUser" , SHOWING_CN = "showing";;

function saveName(name){
    localStorage.setItem(CURRENT_USER,name)
}

function formHandler(event){
    event.preventDefault();
    const currentValue = input.value;
    printName(currentValue);
    saveName(currentValue)
}

function showAndHide(isTrue){
  
    if(isTrue){
      input.style.display = 'block'
    }else{
      input.style.display = 'none'
    }
  }

function askForName(){
    form.addEventListener("submit",formHandler)
}

function printName(name){
    h1.innerHTML = `Hello ${name}`
}

function init(){
   const userName = localStorage.getItem(CURRENT_USER);
   let isTrue = userName ==null? true : false;
   showAndHide(isTrue)
    if(userName ==null){
        askForName();
    }else {
        printName(userName)
    }
}

init();