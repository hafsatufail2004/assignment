"use strict";
const listOfDogs = ["Labrador", "Bull Dog",
    "Rotteiler", "Siberian Huskey", "German Sheperd", "Pitbull",];
let b = listOfDogs.forEach(function (value, index) {
    document.write(index + "." + value + "<br/>");
});
