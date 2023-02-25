"use strict";
let current_users = ["userAli", "userDania", "UserSara", "UserAyan", "AdminUser"];
let new_users = ["USERALI", "UserAYZA", "UserHameed", "ADMINUSER", "UserRabiA"];
for (let i = 0; i < new_users.length; i++) {
    let new_username = new_users[i].toLowerCase();
    let username_taken = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_username === current_users[j].toLowerCase()) {
            username_taken = true;
            break;
        }
    }

    if (username_taken) {
        console.log(`Sorry, the username "${new_users[i]}" is taken.
       Please choose a different username.`);
    }
    else {
console.log(`Congratulations, the username "${new_users[i]}" is available.`);
    }
}
