import inquirer  from "inquirer";
async function startfun() {
    const systemts = Math.floor(Math.random() *10)
    const username = await inquirer.prompt([
        {
            type:"number",
            name:"userGuess",
            message:"Write Your guess between 1 to 10"

        }
    ])
    const {userGuess} = username;
    console.log("Your Guess:",userGuess ,"\nSystem's Guess",startfun)
    if(userGuess === startfun){
        console.log("Your Guess is correct \n You Won")
    }else{
        console.log("Try again \nBetter luck next time.")
    }
}
async function startAgain() {
    do
     { 
        await startfun();
        var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Do you want to continue? Press Yes or No"
        })
    }
    while(again.restart == "Yes"||again.restart == "Y"||
    again.restart == "YES"||again.restart == "y")
}
startAgain();
