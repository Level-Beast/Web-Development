const prompt = require('prompt-sync')();

const gameState={
  inventory:{iron:10,wood:5,sword:0,shield:0},
  Recipe:{
    sword:{iron:3,wood:1},
    shield:{iron:5,wood:2}
  },
  isPlaying:true
}
function cleanInput(){
  let userResponse=prompt("what do u want to craft sword | shield  | exist");
  return userResponse?userResponse.trim().toLowerCase():"exist";
}
function craft(userIteam){
  let recipe=gameState.Recipe[userIteam];
  if(!recipe)return `there is no such item to craft`;
  if(gameState.inventory.iron<recipe.iron){
    return `❌ Failed: Need ${recipe.iron} Iron, but you only have ${gameState.inventory.iron}.`;
  }
  if(gameState.inventory.wood<recipe.wood){
    return `❌ Failed: Need ${recipe.wood} Wood, but you only have ${gameState.inventory.wood}.`;
  }
  gameState.inventory.iron-=recipe.iron;
  gameState.inventory.wood-=recipe.wood;
  gameState.inventory[userIteam]+=1;

    return `🔨 Success! You crafted a ${userIteam.toUpperCase()}!`;

}

function main(){
  console.log(`Intial game inventory ${gameState.inventory}`);
  while(gameState.isPlaying){
    let userInput=cleanInput();
    if(userInput==="exist"){
      gameState.isPlaying=false;
      break;
    }
    let finalResult=craft(userInput);
    console.log(finalResult);
    console.log("Current Inventory:", gameState.inventory);
  }
}

main();



console.log(gameState.Recipe.iron);