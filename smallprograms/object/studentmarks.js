const prompt = require('prompt-sync')();

const subjects = [
    "Math",
    "Physics",
    "Programming",
    "English"
];

const studentData={
    subjectsMarks:[],
    totalScore:0,
    averageScore:null,
    result:null
};
function userInput(index){
    let marks=Number(prompt(`enter number for ${subjects[index]}`));
    return marks;
}
function addMarks(index,subjectmarks){
    let obj={subjectName:subjects[index],marks:subjectmarks};
    studentData.subjectsMarks.push(obj);
    console.log(`marks added for ${obj.subjectName}`);
    addtotal(obj);
}
function addtotal(obj){
    studentData.totalScore+=obj.marks;
    console.log(studentData.totalScore);
    return;
}
function averageScore(){
    let average=studentData.totalScore/subjects.length;
    studentData.averageScore=average;
}
function finalResult(){
    if(studentData.averageScore>=80){
        studentData.result="excellent";
        return 
    }
    if(studentData.averageScore>=60){
        studentData.result="Good";
        return 
    }
    if(studentData.averageScore>=40){
        studentData.result="Pass";
        return 
    }
    if(studentData.averageScore<40){
        studentData.result="fail";
        return 
    }
}
function main(){
    let i =0
    while(i<subjects.length){
        let subjectMarks=userInput(i);
        addMarks(i,subjectMarks);
        i++;
    } 
    averageScore();
    finalResult();
    summery();
}
function summery(){
    for(let subject of studentData.subjectsMarks){
        console.log(`${subject.subjectName} = ${subject.marks}`);
    }
    console.log("Total Score is  "+studentData.totalScore);
    console.log("Average score is " + studentData.averageScore);
    console.log("Result is" + studentData.result);
}

main();
