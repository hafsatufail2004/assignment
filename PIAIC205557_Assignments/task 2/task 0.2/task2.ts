import inquirer from "inquirer";
import number from 'inquirer/lib/prompts/number.js';

const answer:{
    number1:number,
    number2:number,
   operator:string
} = await inquirer.prompt([
    {
        type:"number",
        name:"number1",
        message:"Kindly enter first number:"
    },
    {
        type:"number",
        name:"number2",
        message:"Kindly enter second number:"
    },
    {
        type:"list",
        name:"operator",
        choices:["+","-","*","/"],
        message:"Select operator"
    },
]);
const {number1 ,number2, operator} = answer;
if(number1 && number2 && operator){
    let result:number = 0;
    if(operator === "+"){
   result = number1 + number2
    }else if (operator === "-"){
        result = number1 - number2
    }else if (operator === "*"){
        result = number1 * number2
    }else if (operator === "/"){
        result = number1 / number2
    }
console.log(result);


}else{
    console.log(`Enter valid input.`);
    
}

