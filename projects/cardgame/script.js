const container=document.querySelector(".container");
let cardClicked=0;
let firstCard=0;
let secondCard=0;
function gameStart(event){
    const target=event.target;
    if(target.classList.contains("box")){
        const cardData=target.dataset.cardValue;
        console.log(`user clicked card value is ${cardData  }`)
        checkCard(cardData);
    }
}

function checkCard(cardData){
    if(cardClicked>=2){
        console.log(`card switch `)
        cardClicked=0;
        return;
    }
    cardClicked++
     firstCard=(cardClicked===1)?cardData:firstCard;
     secondCard=(cardClicked===2)?cardData:secondCard;
    console.log(`Card Clicked: ${cardClicked} | First Card: ${firstCard} | Second Card: ${secondCard}`);

    console.log(`card clicked ${cardClicked}`);
   
}


container.addEventListener("click",gameStart);
