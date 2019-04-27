const searchdiv = document.querySelector(".search")
const input = searchdiv.querySelector("input");
const searchBtn = searchdiv.querySelector("button")

const body = document.querySelector(".body")
const total = body.querySelector(".total")
const list = body.querySelector(".list")

const SEARCH_FASTFOOD_API_URL ="https://floating-harbor-78336.herokuapp.com/fastfood"

function searchFastFoodRestrant(keyword){
    const url = SEARCH_FASTFOOD_API_URL +`?searchKeyword=${keyword}`
    console.log(url)
    fetch(url).then(function(response ){
        return response.json() 
    }).then(function(json){

        console.log(json.total ,json.list)
        total.innerText=`${json.total} 개 검색되었습니다.`
        const fastFoodList = json.list;
        fastFoodList.forEach(function(ele){
            console.log(`${ele.name}  : ${ele.addr}`)
            paintRastrantList(ele)
        })

    })
}

function paintRastrantList(ele){
    const span = document.createElement("div")
    span.classList="box"
    span.innerText =`상호 : ${ele.name} \n 주소 : ${ele.addr} `
    list.appendChild(span)

}

function searchBtnHandler(event){
    const keyword = input.value;
    searchFastFoodRestrant(keyword)
}

function enterEventHandler(event){
    console.log("엔터이벤트 : " + event.keyCode)
    if(event.keyCode==13){
         searchBtnHandler()
    }
}

function getList(){
    searchBtn.addEventListener("click", searchBtnHandler)
    input.addEventListener("keypress",enterEventHandler)
}


function init(){
    getList();
}

init();