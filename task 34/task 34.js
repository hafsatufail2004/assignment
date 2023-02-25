"use strict";
let pizza = ["Pepperoni", "Roman Pizza", "BBQ Chicken Pizza"];
console.log('Pizzas:');
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
for (let types of pizza[0]) {
    console.log("I love Pepperoni pizza.");
}
for (let types of pizza[1]) {
    console.log("I would prefer Roman pizza over veggie pizza.");
}
for (let types of pizza[2]) {
    console.log("BBQ Chicken pizza will be fine for the party.");
}
