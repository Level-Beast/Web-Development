const prompt = require('prompt-sync')();
const carTrack=["🚗",".",".",".",".",".",".","."];
const gameState={
    isPlaying:true,
    carPosition:0,
}
function userInput(){
    let userChoice=prompt("Move car! (f = forward, b = backward, exit = quit");
    return userChoice;
} 
function processingChoice(userChoice){
    console.log("here")
    if(userChoice==="f"){
        carTrack+=1;
        console.log("car moved Forward"+carTrack[carPosition]);
        return "car position moved"
    }
    if(userChoice==="b"){
        gameState.carPosition-=1;
        carTrack[carPosition]
        console.log("car moved backward"+carTrack[carPosition]);
        return "car position moved"
    }
    return "unknown";
}


function main(){
        let choice = userInput();
        let result=processingChoice(choice);
        return result;
}

let result=main();
console.log(result);