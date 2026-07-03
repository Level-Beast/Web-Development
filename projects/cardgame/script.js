const container=document.querySelector(".container");
const box=document.querySelector(".box");
let cardClicked=0;
let firstCard=0;
let secondCard=0;
function gameStart(event){
    const target=event.target;
    if(target.classList.contains("box")){
        const cardData=target.dataset.cardValue;
        target.innerHTML=cardData;
        console.log(`user clicked card value is ${cardData  }`)
        checkCard(cardData);
    }
}
function checkCard(cardData){
    if(cardClicked>=2){
        cardClicked=0;
        cardClicked++;
        console.log("card clicked"+cardClicked);
        return;
    }
    cardClicked++
     firstCard=(cardClicked===1)?cardData:firstCard;
     secondCard=(cardClicked===2)?cardData:secondCard;
    console.log(`Card Clicked: ${cardClicked} | First Card: ${firstCard} | Second Card: ${secondCard}`);
    console.log(`card clicked ${cardClicked}`);
    if(cardClicked===2){
compareValue();
    }
}
function compareValue(){
    console.log("this function is called ?")
    if(firstCard===secondCard){
        console.log("keep it open and show data");
        return;
    }
    else{
        console.log("the value doesn't match ")
    }
    
}


container.addEventListener("click",gameStart);
