"use strict";
function make_Shirt(size = "L", message = "I love Typescript") {
    console.log(`Making a ${size}-sized shirt whit the message ${message} printed on it.`);
}
make_Shirt("M", "Hello World"); //calling the make_shirt function to mke medium sized shirt
make_Shirt("S", "Typescript is Awesome!"); /*calling the make_shirt function
to make small sized shirt*/
