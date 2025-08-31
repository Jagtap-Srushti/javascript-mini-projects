const min=1;
const max=100;

let answer= Math.floor(Math.random()*(max-min+1))+min;

let attempts=0;
let gameOver=false;
function resetGame() {
      answer = Math.floor(Math.random() * (max - min + 1)) + min;
      attempts = 0;
      gameOver = false;
      document.getElementById("message").textContent = "";
      document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
      document.getElementById("guessInput").value = "";
      document.getElementById("playAgain").style.display = "none";
    }
function checkGuess(){
        if(gameOver){
            return;
        } 
        const guess=Number(document.getElementById("guessInput").value);
        const message=document.getElementById("message");
        const attemptsDisplay=document.getElementById("attempts");

        if(isNaN(guess) || guess<min || guess>max){
            message.textContent=`⚠️ Enter a number between ${min} and ${max}`;
            message.style.color="red";
        }
        else{
            attempts++;
            if(guess<answer){
                message.textContent=`⬇️ Too low! Try again.`
                message.style.color="blue";
            }
            else if(guess>answer){
                message.textContent=`⬆️ Too high! Try again.`
                message.style.color="orange";
            }
            else{
            message.textContent= `🎉 Correct! The number was ${answer}.`;
            message.style.color="green";
            gameOver=true;
            document.getElementById("playAgain").style.display = "inline-block";
            }
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
            document.getElementById("guessInput").value = "";
            
        }
}

resetGame();   //start game again when page load
