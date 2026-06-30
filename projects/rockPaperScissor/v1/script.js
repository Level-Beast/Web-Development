const thisgame=document.querySelector(".thisgame");
const result=document.querySelector(".result");
const score=document.querySelector(".score");
const computer=["Rock","Paper","Scissor"];
let computerScore=0;
let userScore=0;
let draw=0;
function gameStart(event){
    const target=event.target;
    if(target.classList.contains("btn")){
        let userChoice=target.dataset.choice;
        let resultMessage=compareChoice(userChoice);
        Ui(resultMessage);
        console.log(`Current Scores -> User: ${userScore} | Computer: ${computerScore} | Draws: ${draw}`);

    }
};
function compareChoice(userChoice){
    let computerChoice = computer[Math.floor(Math.random() * computer.length)];
    console.log(`computer choice ${computerChoice}`);
    console.log(`user choice ${userChoice}`);
    if(computerChoice==="Rock" && userChoice==="Scissor"){
        computerScore++;
        return "C";
    }
    if(computerChoice==="Paper" && userChoice==="Rock"){
       computerScore++;
       return "C"; 
    }
    if(computerChoice==="Scissor" && userChoice==="Paper"){
        computerScore++;
        return "C";
    }
    if(computerChoice==="Rock" && userChoice==="Paper"){
        userScore++;
        return "U";
    }
    if(computerChoice==="Paper" && userChoice==="Scissor"){
       userScore++;
       return "U"; 
    }
    if(computerChoice==="Scissor" && userChoice==="Rock"){
        userScore++;
        return "U";
    }
    if(computerChoice==="Rock" && userChoice==="Rock"){
       draw++;
        return "D";
    }
    if(computerChoice==="Paper" && userChoice==="Paper"){
       draw++;
       return "D"; 
    }
    if(computerChoice==="Scissor" && userChoice==="Scissor"){
        draw++;  
        return "D";
    }
}

 function Ui(winner){
    if(winner==="C"){
        console.log("computer won");
        return;
    }
    if(winner==="U"){
        console.log("User won");
         return;
    }
    if(winner==="D"){
        console.log("Draw ");
         return;
    }
}




thisgame.addEventListener("click",gameStart);