import inquirer from "inquirer";

type ansType ={
    userGuess : number
}

const systemGeneratedNo = Math.floor(Math.random() * 10);
console.log(systemGeneratedNo);
const answer:ansType = await inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message:"Write your guess Between 1 to 10"
    }
]);
const {userGuess} = answer;
if(userGuess === systemGeneratedNo){
    console.log(userGuess ,"userGuess",systemGeneratedNo)
    console.log("Yea Your answer is correct \n You win")
}else{
    console.log("Try again\n better luck next time.")
}