const searchdiv = document.querySelector(".search")
const input = searchdiv.querySelector("input");
const searchBtn = searchdiv.querySelector("button")

const body = document.querySelector(".body")
const total = body.querySelector(".total")
const list = body.querySelector(".list")
let totalNumber =0

const SEARCH_FASTFOOD_API_URL ="https://floating-harbor-78336.herokuapp.com/fastfood"

function searchFastFoodRestrant(page,perPage, keyword){
    if(typeof page !== 'number'  || page < 1) page =1 ;
    if(typeof perPage !== 'number'  || perPage < 1) perPage =10 ;

    const url = SEARCH_FASTFOOD_API_URL +`?searchKeyword=${keyword}&page=${page}&perPage=${perPage}`
    fetch(url).then(function(response ){
        return response.json() 
    }).then(function(json){

        total.innerText=`${json.total} 개 검색되었습니다.`
        totalNumber = json.total;
        const fastFoodList = json.list;
        fastFoodList.forEach(function(ele){
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
    searchFastFoodRestrant("","", keyword)
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
    const getListCount = list.childElementCount
    
    if(getListCount==0){
        searchFastFoodRestrant("","","")
    }
}

init();