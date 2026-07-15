const atmContainer=document.querySelector(".atm-container");
const atmDisplay=document.querySelector(".display");
const bankDataRecord={
    userPin:1234,
    userName:"Jugraj Singh"
}
function atmMachine(event){
    const target=event.target;
    if(target.classList.contains("insert-atm")){
        let randomNo=Math.floor(Math.random()*11);
        let userCardData=(randomNo%2==0)?{name:"Jugraj",age:22,balance:400,pin:1234}:{name:"Karan",age:25,balance:23400,pin:1133};
        checkUserCard(userCardData);
    }
}
function checkUserCard(userCardData){
    console.log(`the user card info ${userCardData}`);
    if(userCardData.pin===bankDataRecord.userPin){
        console.log(`welcome mr ${bankDataRecord.userName} `);
    }
    else{
        console.log("wrong user");
        console.log(`if wrong the user card info is ${userCardData.pin}`);
    }
}
function ui(){
    atmDisplay.innerHTML=`
    <p>Welcome to our Bank</p>
    <p>Insert your Card</p>
    `;
}
ui();


atmContainer.addEventListener("click",atmMachine);