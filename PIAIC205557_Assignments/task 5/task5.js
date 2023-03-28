import inquirer from "inquirer";
inquirer.prompt([
    {
        type: "input",
        name: "time",
        message: "Enter time in the format HH.MM.SS AM or HH.MM.SS PM ."
    },
])
    .then((answer) => {
    const timeS = answer.time;
    const pM = timeS.includes("PM");
    const [hourS, minuteS, secondS] = timeS
        .replace("AM", " ")
        .replace("PM", " ")
        .split(":")
        .map((s) => s.trim());
    let hour = parseInt(hourS);
    if (pM && hour !== 12) {
        hour += 12;
    }
    else if (!pM && hour === 12) {
        hour = 0;
    }
    const militaryTime = `${hour.toString().padStart(2, "0")}:${minuteS}:
    ${secondS}`;
    console.log(`Military time: ${militaryTime}`);
});
