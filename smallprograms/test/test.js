const prompt = require('prompt-sync')();
let isRunning=true

function userInput(){
    let userValue=Number(prompt("enter any value to find significant of it or enter 0 to stop the program"));
    return userValue;
}

function validateData(data){
       if(data===0){
        isRunning=false;
        return {error:`user successfully exit the program`, status:false};
    }
    if(typeof data!==("number") || Number.isNaN(data)){
        return {error:`the data is invalid`, status:false};
    };
    return {error: null, status: true};
}

function processingValue(userValue){
    console.log("well this program isn't finished yet its just v1");
    return `program reached proccessingValue stage`
}

function main(){
    while(isRunning){
        let value=userInput();
        let isValid=validateData(value);
        if(!isValid.status){
            return isValid.error;
        }
        processingValue(value);

    }
}
let programStatus=main();
console.log(programStatus);