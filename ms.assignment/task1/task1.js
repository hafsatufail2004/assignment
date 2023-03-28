let engMarks = 78;
let urduMarks = 87;
let total = (engMarks + urduMarks) / 2;
let grade;
if (total >= 80) {
    grade = "A";
}
else if (total >= 75 && total < 80) {
    grade = "B";
}
else if (total >= 70 && total < 75) {
    grade = "C";
}
else if (total >= 65 && total < 70) {
    grade = "D";
}
else if (total > 60 && total < 65) {
    grade = "E";
}
else {
    grade = "F";
}
console.log(`The student grade is ${grade}`);

