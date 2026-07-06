const container=document.querySelector(".container");
let clickedcard=0;
let firstCard=0;
let secondCard=0;
let cardRun=1;

function startGame(e){
    const target=e.target;
    console.log(`card run first start game value ${cardRun}`);
    if(cardRun>=2)return;
    target.innerHTML=target.dataset.cardValue;
    clickedcard++;
    firstCard=(clickedcard===1)?target:firstCard;
    secondCard=(clickedcard===2)?target:secondCard;
      if(clickedcard==2){
        if(firstCard===secondCard){
            clickedcard=0;
         firstCard=0;
         secondCard=0;
            return;}
        comparecard();
    };
}
function comparecard(){
    console.log(clickedcard);
     if(firstCard.dataset.cardValue===secondCard.dataset.cardValue){
         console.log("if statement so its true");
         firstCard.innerHTML=firstCard.dataset.cardValue;
         secondCard.innerHTML=secondCard.dataset.cardValue;
         clickedcard=0;
         firstCard=0;
         secondCard=0;
         console.log(clickedcard);
     }else{
         console.log("else statement so its wrong try again ");
         setTimeout(() => {
         firstCard.innerHTML="click to see number";
         secondCard.innerHTML="click to see number";
         clickedcard=0;
         firstCard=0;
         secondCard=0;
         cardRun=1;
         console.log(`card run status in time out ${cardRun}`);
         }, 2000); 
         cardRun++;
         console.log(`card run status its value in btw the process ${cardRun}`);
     }
}






container.addEventListener("click",startGame);