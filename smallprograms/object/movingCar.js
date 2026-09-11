const prompt = require('prompt-sync')();
const carTrack=["🚗",".",".",".",".",".",".","."];
const gameState={
    isPlaying:true,
    carPosition:0,
}
const controls=["exist","f","b"];
function userInput(){
    let userChoice=prompt("Move car! (f = forward, b = backward, exit = quit");
    return userChoice;
}

function main(){
    while(gameState.isPlaying){
        let choice = userInput();
    if(choice==="exist"){
        gameState.isPlaying=false;
        return `u exist game successfully`
    };
}
}

let result=main();
console.log(result);