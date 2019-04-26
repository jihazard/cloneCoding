const todoForm = document.querySelector(".js-todo")
const todoInput = todoForm.querySelector("input"),
toDoList = document.querySelector(".lists");


const TODO_LISTS = "todoLists_localstorage"

let toDos = []

function todoSubmitHandler(event){
    event.preventDefault();
    const todos = todoInput.value
    todoPrint(todos);

}
function saveTodos(data){
    console.log(data.text , data.id)
    localStorage.setItem(TODO_LISTS,JSON.stringify(data));
}

function deleteEventHandler(event){
    
    const delNode = event.target.parentNode;
    console.log("삭제할 노드 아이디 : " + delNode.id)
    toDoList.removeChild(delNode);

    const clean = toDos.filter(function(data){
        return data.id!==parseInt(delNode.id) 
    })

    toDos = clean;
    saveToDos();
    
}



function todoPrint(text){
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    const button = document.createElement("button")
    const span = document.createElement("span")
    const newId=toDos.length + 1;
    li.id=newId
    li.innerText=text
    button.innerText="DEL"
    button.addEventListener("click",deleteEventHandler)
    li.appendChild(button)
    ul.appendChild(li)

    const data = {
        text:text,
        id:newId
    }
    toDos.push(data)
    saveTodos(data)

}



function getLists(){
    const todolists = localStorage.getItem(TODO_LISTS);
    let isTrue = todolists===null ? true : false;
    if(isTrue){
        }else {
            const data = JSON.parse(todolists);
            console.log(data)
    
        }
}

function init(){
    getLists();
    todoForm.addEventListener("submit",todoSubmitHandler)
}


init();