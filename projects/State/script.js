const petGame=document.querySelector(".petGame");
const pethunger=document.querySelector(".pethunger");
const petenergy=document.querySelector(".petenergy");
const pethapiness=document.querySelector(".pethapiness");
let petdata=null;
const gameState={
    name:"Karan",
    HungerLevel:85,
    energylevel:88,
    happinesslevel:55,
}

function thisGame(event){
    const target=event.target;
    if(target.classList.contains("Btn")){
         petdata=target;
         gamestart();
    }
}
function gamestart(){
    if(petdata.classList.contains("play")){
        gameState.HungerLevel=gameState.HungerLevel-5;
        gameState.energylevel=gameState.energylevel-6;
        gameState.happinesslevel=gameState.happinesslevel+4;
    }
    if(petdata.classList.contains("feed")){
        gameState.HungerLevel=gameState.HungerLevel-4;
        gameState.energylevel=gameState.energylevel+10;
    }
    if(petdata.classList.contains("sleep")){
        gameState.energylevel=gameState.energylevel+12;
        gameState.HungerLevel=gameState.HungerLevel+14;
    }
    ui();
}
function ui(){
    pethunger.innerHTML=`Pet Hunger: ${gameState.HungerLevel}`;
    petenergy.innerHTML=`Pet energy: ${gameState.energylevel} `;
    pethapiness.innerHTML=`Pet Happiness: ${gameState.happinesslevel}`;
}


petGame.addEventListener("click",thisGame);