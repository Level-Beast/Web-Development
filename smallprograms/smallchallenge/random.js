const prompt = require('prompt-sync')();

const storeState = {
  inventory: {
    apple: { price: 2, stock: 5 },
    bread: { price: 3, stock: 3 },
    milk:  { price: 4, stock: 2 }
  },
  cart: {},
  totalBill: 0,
  isOpen: true
};
function validate(input){
    if(input&&input.trim().toLowerCase)
}

function boss(){
    while(storeState.isOpen){
        userInput=prompt("What action u want to perfome Add  |  Checkout | exit");
        validate(userInput);
    }
}

boss();