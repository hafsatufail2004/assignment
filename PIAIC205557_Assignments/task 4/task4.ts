import inquirer from "inquirer";
const array:number[] = [1,3,5,7,9];
array.sort((a,b) => a-b);

const minimunVal = array.slice(0,4).reduce((a, b) => a + b);

const maximunVal = array.slice(1).reduce((a,b) => a+b);
console.log(`${minimunVal} ${maximunVal}`);


