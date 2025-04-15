const dec_btn=document.getElementById("dec_btn");
const reset_btn=document.getElementById("reset_btn");
const inc_btn=document.getElementById("inc_btn");
const num=document.getElementById("num");
let count=0;

inc_btn.onclick=function(){
    count++;
    num.textContent=count;
}

dec_btn.onclick=function(){
    count--;
    num.textContent=count;
}

reset_btn.onclick=function(){
    count=0;
    num.textContent=count;
}