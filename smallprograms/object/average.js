const prompt = require('prompt-sync')();

const programState={
    maxAttemps:3,
    average:null,
    totalScore:0,
    finalResult:null
}
function userInput(){
    let roundScore=Number(prompt("enter ur score for this round"));
    return roundScore;
}
function average(){
    let averageScore=programState.totalScore/3;
    programState.average=averageScore;
    if(programState.average>=8 && programState.average<=10){
        return "excellent";
    }
    if(programState.average<8 && programState.average>=6){
        return "Good";
    }
    return "keep practicing more";
}

function main(){
    let attempts=0;
    while(attempts<programState.maxAttemps){
        attempts++;
     let roundScore=userInput();
     programState.totalScore+=roundScore;
    }
    programState.finalResult=average();
    console.log(`Final score is ${programState.totalScore} and average is ${programState.average} and finally the result is ${programState.finalResult}`);
}
main();
