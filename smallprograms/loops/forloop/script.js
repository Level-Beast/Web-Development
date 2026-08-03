const marks = [65, 91, 72, 88, 54, 99, 81];
let highestmarks=marks[0];
let lowestmarks=marks[0];

for(let i=0;i<marks.length;i++){
if(highestmarks>marks[i]){
    highestmarks=marks[i];
}
if(lowestmarks<marks[i]){
    lowestmarks=marks[i];
}
}
console.log(highestmarks);
console.log(lowestmarks);














