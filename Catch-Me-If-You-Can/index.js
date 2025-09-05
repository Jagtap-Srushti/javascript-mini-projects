const box=document.getElementById("box");
const scoreDisplay=document.getElementById("score");
const timerDisplay=document.getElementById("timer");
const message=document.getElementById("message");
const startbtn=document.getElementById("startbtn");

let score=0;
let timeleft=30;
let gameActive=false;
let timeInterval;

function moveBox(){
    const maxX=window.innerWidth-box.clientWidth;
    const maxY=window.innerHeight-box.clientHeight;

    const randomX=Math.floor(Math.random()*maxX);
    const randomY=Math.floor(Math.random()*maxY);


    box.style.left=`${randomX}px`;
    box.style.top=`${randomY}px`;
}

function startGame(){
    score=0;
    timeleft=30;
    gameActive=true;

    scoreDisplay.textContent=`Score:${score}`;
    timerDisplay.textContent=`Time:${timeleft}s`;
    message.textContent=`Game Started!Try to catch the box before it escape 😜`;
    message.style.fontSize="1em"
    startbtn.style.display="none";
    box.style.display="flex";

    moveBox();

    timeInterval=setInterval(()=>{
        timeleft--;
        timerDisplay.textContent=`Time:${timeleft}s`;

        if(timeleft<=0){
            endGame();
        }
    },1000);
}


function endGame(){
    gameActive=false;
    clearInterval(timeInterval);
    box.style.display="none";
    startbtn.style.display="inline-block";
    startbtn.textContent="Play Again";
    message.textContent=`Game Over! 🎉 Your Score: ${score}`;
    message.style.fontSize="2em";
}


box.addEventListener("mouseover",()=>{
    if(gameActive){
        moveBox();
    }
},300);

box.addEventListener("click",()=>{
    if(gameActive){
        score++;
        scoreDisplay.textContent=`Score:${score}`;
        document.getElementById("dingSound").play();
        moveBox();
    }
});

startbtn.addEventListener("click",startGame);