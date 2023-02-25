"use strict";
const vechical = [
    { brand: "Honda", model: "CBR", type: "sports" },
    { brand: "Yamaha", model: "YZF-R1", type: "sport" },
    { brand: "Harley-Davidson", model: "Street Glide", type: "cruiser" },
];
for (const motorcycle of vechical) {
    console.log(` I would like to own a ${motorcycle.brand}
     ${motorcycle.model} motorcycle.`);
    console.log(`This ${motorcycle.type}-style bike is perfect for me.`);
    console.log(`${motorcycle.brand} are one of
     the most amazing bikes that exist currently.`);
}
