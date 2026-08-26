const prompt = require('prompt-sync')();

const inventory={
    products:{
        1:{name:"kurkure",price:15},
        2:{name:"Biscuite",price:25},
    },
    isActive:true
};

function takeOrder(){
    console.log(`here is our inventory sir ${inventory.products}`)
    let userResponse=Number(prompt("plz select ur order and enter a number press zero to exist"));
    return userResponse;
}
function validate(response){
    if(response===0){
        inventory.isActive=false;
        return 'user is logged off';
    }
    let processed=inventory.products[response];
    return processed;
}

function boss (){
    while(inventory.isActive){
        let userselected=takeOrder();
        let process=validate(userselected);
        console.log(process)
    }
}
boss();