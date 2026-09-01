const prompt = require('prompt-sync')();
const gameData = {
    secretNumber: 7,
    attempts: 0,
    maxAttempts: 5,
    isPlaying: true
};

function userInput(){
    gameData.attempts++;
    let userGuess=Number(prompt("Guess the computer value"));
    console.log(`Guess No  ${gameData.attempts}`);
    return userGuess;
}
function checkGuess(userInput){
    if(userInput===gameData.secretNumber){
        gameData.isPlaying=false
        return `User wins and the game ends`
    }
    
    if(userInput<gameData.secretNumber){
        return `User guessed too low`
    }
    
    if(userInput>gameData.secretNumber){
        return `User guessed too high`
    }
}

function gameGuessing(){
    while(gameData.attempts<gameData.maxAttempts && gameData.isPlaying){
        let userGuess=userInput();
        let result=checkGuess(userGuess);
        console.log(result);
    }
}
gameGuessing();