const prompt = require('prompt-sync')();
// let name="Karan";

// function makeLoud(text) {
//   return text + "!!!";
// }

// function addHello(name){
//  return "Hello " + name
// }
// function bossFunction(name){
//     let text=addHello(name);
//     let finalword=makeLoud(text);
//     console.log(finalword);
// }

// bossFunction(name);

// let startingNumber=5;
// // Worker 1: Adds 5 to any number
// function addFive(num) {
//   return num + 5;
// }

// // Worker 2: Multiplies any number by 2
// function doubleNum(num) {
//   return num * 2;
// }

// function mathBoss(startingNumber){
//     let numberAdded=addFive(startingNumber);
//     let doubleNumber=doubleNum(numberAdded);
//     return doubleNumber;
// }
// let finalresult=mathBoss(startingNumber);
// console.log(finalresult);
// Worker 1: ONE job - checks if the player has enough gold

let playerGold=100;
let itemCost=80;

function hasEnoughGold(playerGold, cost) {
  return playerGold >= cost; 
}

// Worker 2: ONE job - subtracts the cost from the player's gold
function deductGold(playerGold, cost) {
  return playerGold - cost;
}

// Worker 3: ONE job - creates a successful receipt message
function createReceipt(newBalance) {
  return "Purchase successful! Remaining gold: " + newBalance;
}

// Worker 4: ONE job - creates a failure message
function createFailureMessage() {
  return "Transaction denied: Not enough gold!";
}

function buyItemBoss(playerGold, itemCost){
    let enoughBalanceResult=hasEnoughGold(playerGold,itemCost);
    if(!enoughBalanceResult){
     return createFailureMessage()   
    }
    let leftGold=deductGold(playerGold,itemCost);
        let finalResult=createReceipt(leftGold);
        return finalResult;
};
let finalResponse=buyItemBoss(playerGold,itemCost);
console.log(finalResponse);

















// const students = [
//     { name: "Alex", marks: 91 },
//     { name: "Raj", marks: 72 },
//     { name: "Sara", marks: 88 },
//     { name: "John", marks: 65 },
//     { name: "Emma", marks: 99 }
// ];
// function pass(){
//  for(let i=0;i<students.length;i++){
//     if(students[i].marks>70){
//         console.log(students[i].name + "  PASS")
//     }
//  }
// };
// pass();