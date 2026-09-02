const prompt = require('prompt-sync')();

const programData = {
    correctPassword: "hello123",
    attempts: 0,
    maxAttempts: 3
};

function userInput(){
    programData.attempts++;
    if(programData.attempts===programData.maxAttempts){
        console.log("u are logged out for a day try again later");
    }
    let userResponse=prompt("enter Ur password");
    return userResponse;
}
function checkpassword(password){
  if (password !== programData.correctPassword) {
    return false
    }
    return true;
}
function decide(result){
    if(result) return `u are logged in`;
    while(programData.attempts<programData.maxAttempts){
        userInput();
    }
}
function main(){  
    let userResponse=userInput();
    let result=checkpassword(userResponse);
    decide(result);
}

main();