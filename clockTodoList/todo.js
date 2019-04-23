const toDoForm = document.querySelector(".js-toDoForm"),
        toDoInput = toDoForm.querySelector("input"),
        toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,toDos)
}

function paintToDo(text){
     const li = document.createElement("li");
     const deletBtn = document.createElement("button")
     deletBtn.innerText= "del"
     const span = document.createElement("span");
     const newId=toDos.length + 1;
     span.innerText = text;

     li.id=newId
     li.appendChild(deletBtn);
     li.appendChild(span);
     
     toDoList.appendChild(li);

     const toDoObj = {
         text:text,
         id: newId
     }

     toDos.push(toDoObj);
     saveToDos()

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue= toDoInput.value;
    alert(currentValue)
    paintToDo(currentValue)
}

function loadToDo(){
    const loadTodos = localStorage.getItem(TODOS_LS);
    if(loadTodos!==null){
        const todo = JSON.stringify(loadTodos);
        console.log(todo)
        todo.forEach(element => {
            console.log(element)
        });
       
    }

}        

function init(){
    loadToDo();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();
