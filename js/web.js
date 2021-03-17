
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab4 = document.querySelector(".tab4");
const tab5 = document.querySelector(".tab5");
const tab6 = document.querySelector(".tab6");

const banner1 = document.querySelector(".banner1");
const banner2 = document.querySelector(".banner2");
const banner3 = document.querySelector(".banner3");
const banner4 = document.querySelector(".banner4");
const banner5 = document.querySelector(".banner5");
const banner6 = document.querySelector(".banner6");

tab1.addEventListener("click", unhide1);
tab2.addEventListener("click", unhide2);
tab3.addEventListener("click", unhide3);
tab4.addEventListener("click", unhide4);
tab5.addEventListener("click", unhide5);
tab6.addEventListener("click", unhide6);


function unhide1(){
banner1.classList.remove("hidden");
banner2.classList.add("hidden");
banner3.classList.add("hidden");
banner4.classList.add("hidden");
banner5.classList.add("hidden");
banner6.classList.add("hidden");
}

function unhide2(){
    banner1.classList.add("hidden");
    banner2.classList.remove("hidden");
    banner3.classList.add("hidden");
    banner4.classList.add("hidden");
    banner5.classList.add("hidden");
    banner6.classList.add("hidden");
 }

function unhide3(){
    banner1.classList.add("hidden");
    banner2.classList.add("hidden");
    banner3.classList.remove("hidden");
    banner4.classList.add("hidden");
    banner5.classList.add("hidden");
    banner6.classList.add("hidden");
}

function unhide4(){
    banner1.classList.add("hidden");
    banner2.classList.add("hidden");
    banner3.classList.add("hidden");
    banner4.classList.remove("hidden");
    banner5.classList.add("hidden");
    banner6.classList.add("hidden");
}
function unhide5(){
    banner1.classList.add("hidden");
    banner2.classList.add("hidden");
    banner3.classList.add("hidden");
    banner4.classList.add("hidden");
    banner5.classList.remove("hidden");
    banner6.classList.add("hidden");
}
function unhide6(){
    banner1.classList.add("hidden");
    banner2.classList.add("hidden");
    banner3.classList.add("hidden");
    banner4.classList.add("hidden");
    banner5.classList.add("hidden");
    banner6.classList.remove("hidden");
}