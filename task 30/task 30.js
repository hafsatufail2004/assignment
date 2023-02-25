"use strict";
let usernames = ["User2.0", "User.AI", "Admin", "User709", "User101"];
for (let i = 0; i < usernames.length; i++)
    if (usernames[i] === "Admin") {
        console.log(` ${usernames[2]} welcome back,would you like to explore new 
    features of this website`);
    }
    else {
        console.log(`Hello ${usernames[i]},welcome back to this website`);
    }
