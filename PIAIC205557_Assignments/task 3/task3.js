import inquirer from "inquirer";
let toDo = [];
let loops = true;
while (loops) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What would you like to add in your todo."
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Would you like to add more in todo. ",
            default: false
        }
    ]);
    const { todo, addMore } = answers;
    console.log(answers);
    loops = addMore;
    if (todo) {
        toDo.push(todo);
    }
    else {
        `Please enter valid input.`;
    }
}
console.log(toDo);
