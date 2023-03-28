import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        type:"input",
        name:"userID",
        message:"Kindly enter your ID:"
    },
    {
        type:"number",
        name:"userPin",
        message:"Kindly enter your Pin:"
    },
    {
        type:"list",
        name:"accountType",
        choices:["Current","Saving"],
        message:"Select your Account Type:"
    },
    {
        type:"list",
        name:"transactionType",
        choices:["Fast Cash","Withdrawl"],
        message:"Select your Transaction:",
        when(answers){
            return answers.accountType
        }
    },
    {
        type:"list",
        name:"transactionType",
        choices:["Fast Cash","Withdrawl"],
        message:"Select your Transaction:",
        when(answers){
            return answers.accountType
        }
    },
    {
        type:"list",
        name:"account",
        choices:[1000,2000,5000,10000,20000],
        message:"Select your Account:",
        when(answers){
            return answers.transactionType == "Fast Cash"
        }
    },
    {
        type:"number",
        name:"account",
        choices:[1000,2000,5000,10000,20000],
        message:"Enter your Account:",
        when(answers){
            return answers.transactionType == "Withdrawl"
        }
    }
])

if(answers.userID && answers.userPin){
    const balance = 50000;
    console.log("Previous Balance",balance);
    const enteredAmount = answers.amount;
    if(balance >= enteredAmount){
        const remaining = balance - enteredAmount;
        console.log("Your Remaining Balance is:",remaining);

    }
}else{
    console.log("Insufficient Balance")
}