const pagingx = document.querySelector(".paging");
const NUM_PAGE = 5;
let PAGE_START = 1;
let PAGE_END = 5;
let TOTAL_PAGE ;
function paintPazing(page){
     const ele = document.createElement("a");
     ele.href=`javascript:search(${page},10)`
     ele.innerText=page;
     ele.classList="paging"
     pagingx.appendChild(ele)
}

function search(page,perPage){
    alert(page)
    PAGE_START = Math.floor((page-1)/NUM_PAGE) * NUM_PAGE +1;
    PAGE_END = PAGE_START + NUM_PAGE -1;
    TOTAL_PAGE  =Math.floor((totalNumber-1)/perPage) + 1 ;
      
    if(PAGE_END  > TOTAL_PAGE) PAGE_END = TOTAL_PAGE;
    const keyword = input.value;
    if(keyword ==null) keyword = "";

    searchFastFoodRestrant(page,perPage, keyword)

}
function getPaging(){

    for(var i =1 ; i <=5; i++){
        paintPazing(i)
    }
}

function init3(){
    getPaging();
}

init3();