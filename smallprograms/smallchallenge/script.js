const prompt = require('prompt-sync')();

const inventory={
  iron:10,
  wood:5,
  sword:0,
  shield:0,
  isPlaying:true
}
function userInput(){
  return prompt("what do u want to craft sword |  shield  | exist");
}
function validate(userResponse){
  if(userResponse==="exist") return exist();
  if(userResponse==="sword")return sword();
  if(userResponse==="shield")return shield();
}
function sword(){
  let iron=3;
  let wood=1;
  if(inventory.iron>=3 && inventory.wood>=1){
    inventory.iron-=3;
    inventory.wood-=1;
    inventory.sword+=1;
  }
  return "sword added ";
}
function shield(){
  let iron=3;
  let wood=1;
  if(inventory.iron>=5 && inventory.wood>=2){
    inventory.iron-=5;
    inventory.wood-=2;
    inventory.shield+=1;
  }
  return "shield added ";
}
function exist(){
  inventory.isPlaying=false;
  return "game over";
}

function main(){
  let userResponse=userInput();
  let actionResult=validate(userResponse);
  console.log(actionResult);
  console.log(inventory)
  while(isPlaying){
    main();
  }
}
main();
