const atmContainer=document.querySelector(".atmcontainer");
const messageDisplay=document.querySelector(".messageDisplay");
const result=document.querySelector(".result");
function atmSimulator(event){
    const target=event.target;
    if(target.classList.contains("Deposit")){
        ui();
        return;
    }
      if(target.classList.contains("withDraw")){
        withDraw();
        return;
    }
      if(target.classList.contains("checkBalance")){
        checkBalance();
        return;
    }
}
function ui(){
    messageDisplay.innerHTML="Deposit the amount";
    
}
function withDraw(){

}
function  checkBalance(){

}



atmContainer.addEventListener("click",atmSimulator);