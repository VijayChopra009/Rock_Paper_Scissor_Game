let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const getComputerScore = () => {
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}
let drawGame = () => {
   msg.innerText ="Game Was Draw.Play Again"
   msg.style.backgroundColor ="#081b31" ;
}

const showWinner = (userWin,userchoice,computerChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText =`You Win! Your ${userchoice} beats ${computerChoice}`
        msg.style.backgroundColor ="green" 
    }else{
        compScore++;
        compScorepara.innerText =compScore;
        msg.innerText = `You Lost. ${computerChoice} beats ${userchoice}`
        msg.style.backgroundColor ="red" 
    }
}


const playGame = (userchoice) => {
    //generate computer choice
    const computerChoice = getComputerScore();
    if (userchoice === computerChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userchoice == "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userchoice == "paper") {
            userWin = computerChoice == "scissor" ? false : true;
        } else {
            userWin = computerChoice == "rock" ? false : true;
        }
        showWinner(userWin,userchoice,computerChoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})