const prompt = require('prompt-sync')();

const tickets={
    1:{ticketName:"regularTicket", price:150,},
    2:{ticketName:"premiumTicket",price:300},
    3:{ticketName:"vipTicket",price:500},
}

const userTotal={
    total:0,
    tickets:[],
    isBuying:true
}

function userInput(){
    let userChoice=Number(prompt("purchase the ticket u want here are options  1 regular price 150  option 2 premium price 300  and option 3 for vip ticket with price 500 for checkout click 4"));
    return userChoice;
};
function proccessingUserChoice(choice){
    if(choice===4){
        userTotal.isBuying=false;
        return;
    }
    let ticketData=tickets[choice];
    if(ticketData){
        addIteam(ticketData);
    }
    else{
        console.log("invalid data ");
        
    }
}

function addIteam(userData){
    userTotal.tickets.push(userData);
    userTotal.total+=userData.price;
    console.log(`ur iteam is added ${userData.ticketName} successfully`);
}
function summery(){
    for(let ticket of userTotal.tickets){
        console.log(`Number of tickets u have bought are ${ticket.ticketName}`);
    }
    console.log(`ur total is ${userTotal.total}`);
}
function main(){
    while(userTotal.isBuying){
        let userChoice=userInput();
        proccessingUserChoice(userChoice);
    };
    summery();
}

main();