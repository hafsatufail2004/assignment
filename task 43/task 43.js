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
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log("The Great" + magician[i]);
    }
}
make_great(magician);
function show_magicians(magician) {
    for (let k = 0; k < magician.length; k++) {
        console.log(magician[k]);
    }
}
show_magicians(magician);
