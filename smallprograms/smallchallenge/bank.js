const prompt = require('prompt-sync')();


const gameData={
    playerHealth:100,
    EnemyHealth:100,
    isPlaying:true
};
function userInput(){
    let userResponse=Number(prompt("select the valid option based 1 for attack 2 for heal 3 to exist"));
    return userResponse;
}
function attack(){
    gameData.EnemyHealth-=20;
    console.log("enemy got damage");
    console.log(gameData.EnemyHealth);
    if(gameData.EnemyHealth<=0){
        console.log( "enemy is dead u won the game");
        gameData.isPlaying=false;
    }
}
function heal(){
    gameData.playerHealth+=10;
    console.log("u are healing");
    if(gameData.playerHealth>100){
        gameData.playerHealth=100
        console.log(gameData.playerHealth)
    }
}
function gameStart(){
    while(gameData.isPlaying){
        let userResponse=userInput();
        if(userResponse===3){
            gameData.isPlaying=false;
            return "u exist the game"
        }
        if(userResponse===1)attack();
        if(userResponse===2)heal();
    }
}
let finalresult=gameStart();
console.log(finalresult);