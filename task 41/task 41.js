"use strict";
let magician = ["Harry Potter", "Shin Lim", "Mark Wilson",
    "RickyJay", "Harry Anderson"];
console.log("Magician Name");
function show_magician(magician) {
    for (let k = 0; k < magician.length; k++) {
        console.log(magician[k]);
    }
}
show_magician(magician);
