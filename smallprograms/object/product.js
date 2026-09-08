const prompt = require('prompt-sync')();

const products = [
    { name: "Keyboard", price: 1000 },
    { name: "Mouse", price: 500 },
    { name: "Headphones", price: 2000 }
];

function userChoice(){
    let choice=Number(prompt("enter the product number u want to buy ? 1Keyboard 2 mouse 3 headphones "));
    return choice-1;
}
function findProduct(index){
    return products[index];
}
function discount(product){
    const discountPercent=10;
    const percent=100;

    let multiplayedValue=product.price*discountPercent;
    let discountAmount=multiplayedValue/percent;
    return discountAmount;
}
function finalPrice(productPrice,discountAmount){
    let finalAmount=productPrice-discountAmount;
    return finalAmount;
}
function summery(product,discount,finalPrice){
    console.log(`Product name ${product.name}`);
    console.log(`Orginal Price ${product.price}`);
    console.log(`Discount ${discount}`);
    console.log(`final Price ${finalPrice}`);
}
function main (){
    let productIndex=userChoice();
    let product=findProduct(productIndex);
    let discountAmount=discount(product);
    let finalAmount=finalPrice(product.price,discountAmount);
    summery(product,discountAmount,finalAmount);
}

main();