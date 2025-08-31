let count=0;
const decreaseBtn =document.getElementById("decreaseBtn").onclick=function(){
    count--;
    document.getElementById("counterlabel").textContent=count;
}

const increaseBtn=document.getElementById("increaseBtn").onclick=function(){
    count++;
    document.getElementById("counterlabel").textContent=count;
}

const resetBtn=document.getElementById("resetBtn").onclick=function(){
    count=0;
    document.getElementById("counterlabel").textContent=count;
}