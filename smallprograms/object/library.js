const prompt = require('prompt-sync')();

const library={
    1:{bookName:"Harry Potter",price:100},
    2:{bookName:"Atomic Habits",price:150},
    3:{bookName:"clean Code",price:200}
}

const myCart={
    totalPrice:0,
    booksList:[],
    isPurchasing:true
}

function userInput(){
    let userChoice=Number(prompt("enter the number of book u wanna buy 1 for harry potter 2 for atomic habits and 3 for clean code "));
    return userChoice;
}

function addingItem(choice){
    if(choice===4){
        myCart.isPurchasing=false
        console.log("thnx for shopping with us u will be provide ur summery");
        return;
    }
    let productDetails=library[choice];
    if(productDetails){
        addProduct(productDetails);
    }
    else{
        console.log("this item is invalid or not availble here");
    }

};

function addProduct(product){
    myCart.booksList.push(product);
    myCart.totalPrice+=product.price;
    console.log(`ur ${product.bookName} added succcessfuly`)
}
function main(){
    while(myCart.isPurchasing){
        let choice=userInput();
        addingItem(choice);
    }
    summery();

}

function summery(){
    console.log(`here is the final list`);
    for(let book of myCart.booksList){
        console.log(`u purchased ${book.bookName} and its price is ${book.price}`);
    }
    console.log(`this is the total ${myCart.totalPrice}`);
}
main();