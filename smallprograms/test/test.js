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



// const prompt = require('prompt-sync')();

// // 1. INPUT STAGE: Returns raw text. Keeps choices flexible (letters or numbers).
// function getUserInput() {
//     return prompt("Enter a value (or '0' to exit): ").trim();
// }

// // 2. VALIDATION STAGE: Acts like a sorting machine. 
// // It reads the string and decides exactly what the program should do next.
// function evaluateInput(rawInput) {
//     if (rawInput === '0' || rawInput.toLowerCase() === 'exit') {
//         return { action: 'EXIT', value: null, error: null };
//     }
    
//     const parsedNumber = Number(rawInput);
//     if (rawInput === '' || Number.isNaN(parsedNumber)) {
//         return { action: 'ERROR', value: null, error: 'Invalid numeric input' };
//     }
    
//     return { action: 'PROCESS', value: parsedNumber, error: null };
// }

// // 3. CORE LOGIC STAGE: Does only one thing—the math.
// function calculateSignificantFigures(number) {
//     // Math logic goes here
//     return `Calculated sig figs for ${number}`;
// }

// // 4. THE CONTROLLER (Main Loop): Manages the state and reads the evaluation.
// function main() {
//     while (true) { // Loop runs safely until an explicit 'break'
//         const rawInput = getUserInput();
//         const result = evaluateInput(rawInput);
        
//         if (result.action === 'EXIT') {
//             console.log("Goodbye!");
//             break; // Clean exit out of the loop
//         }
        
//         if (result.action === 'ERROR') {
//             console.log(`❌ Error: ${result.error}`);
//             continue; // Skips the rest of the loop and asks for input again
//         }
        
//         // If it reaches here, action is 'PROCESS'
//         const output = calculateSignificantFigures(result.value);
//         console.log(output);
//     }
// }

// main();
