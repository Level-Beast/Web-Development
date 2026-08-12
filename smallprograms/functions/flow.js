 const prompt = require('prompt-sync')();
// const waterdrinktraker={
//     waterGoal:2000,
//     todayHit:0
// }
// while(waterdrinktraker.waterGoal>waterdrinktraker.todayHit){
//     let userRespons=prompt("Enter Y to add 250ml");
//     if(userRespons==="Y"|| userRespons==="y"){
//         waterdrinktraker.todayHit+=250;
//         console.log("today u drinked"+waterdrinktraker.todayHit);
//     }
//       else{
//         break;
//     }
// }
// console.log(waterdrinktraker.todayHit);

const userProfile={
    Balance:5000,
    isloggedIn:true
}


function display(){
    if(!display)return;
    let choice = Number(prompt("Press 1 to check Balance\nPress 2 to deposit money\nPress 3 to withdraw\nPress 4 to exit program\nYour choice: "));
    validate(choice);
};
function validate(choice){
    if(choice===1)checkBalance();
    if(choice===2)DepositMoney();
    if(choice===3)withdrawMoney();
    if(choice===4)existProgram();
}
function checkBalance(){
    console.log(userProfile.Balance);
}
function DepositMoney(){
    let userMoney=prompt("enter the money");
    userProfile.Balance+=userMoney;
}
function existProgram(){
    display.isloggedIn=false;
}
