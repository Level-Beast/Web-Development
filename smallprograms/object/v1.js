const prompt = require('prompt-sync')();

// const character={
// name: "Hero",
// health: 100,
// gold: 50,
// level: 1
// }
// console.log(character);
// character.health-=30;
// character.gold+=40;
// character.level+=1;
// character.property="steel Sword";
// if(character.health<0){
//     console.log("character defeated");
// }
// console.log(character);

// const students = [
//     { name: "Aman", age: 20, marks: 78, passed: true },
//     { name: "Priya", age: 22, marks: 43, passed: false },
//     { name: "Raj", age: 21, marks: 91, passed: true },
//     { name: "Simran", age: 20, marks: 66, passed: true },
//     { name: "Karan", age: 23, marks: 85, passed: true }
// ];
// let passed=0;
// let sum=0;
// let highestScore=students[0].marks;
// let studentName=students[0].name;
// for(let i=0;i<students.length;i++){
//     sum+=students[i].marks;
//     // console.log(students[i].name);
//     if(students[i].marks>highestScore){
//         highestScore=students[i].marks;
//         studentName=students[i].name;
//     }
//     if(students[i].name==="Priya"){
//         students[i] = { name: "Priya", passed: true, marks: 52 };
//     }
//     if(students[i].passed){
//         passed++;
//     }
// }

// let average=sum/students.length;
// console.log(highestScore);
// console.log(studentName);
// console.log(average);
// console.log(passed);

let name=prompt("enter ur name");
const status={
    correctPIN = 1234,
    maxAttempts = 3,
    attempts = 0,
    isLocked = false,
    isAuthenticated = false
}

while(attempts<maxAttempts){
    let userPin=prompt("enter ur pin");
}