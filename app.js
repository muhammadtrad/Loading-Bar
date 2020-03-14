const loadingBarItemEl = document.querySelector(".loading-bar__item");
const thirtyEl = document.querySelector(".btn_thirty");
const sixtyEl = document.querySelector(".btn_sixty");
const hundredEl = document.querySelector(".btn_hundred");


function startBar(percent){
    let width = 1;
    loadingBarItemEl.style.width = 5  + "%";
   let loadingBar = setInterval(function (){
    if (width >= percent){
        clearInterval(loadingBar);
    } else{
        width++;
        loadingBarItemEl.style.width = width + "%";
    }

}, 50)

}

function changeLoadingBar(){
    thirtyEl.addEventListener("click", () => startBar(30));
    sixtyEl.addEventListener("click", () => startBar(60));
    hundredEl.addEventListener("click", () => startBar(100));

}

changeLoadingBar();