let animals:string[] = ["Lion","Tiger","Cheeta"]

console.log("Animals:");
for(let j = 0; j < animals.length ; j++) {
    console.log( animals [j]);
    
} 
for ( let breed of animals[0]){
    console.log(`${animals[0]} is the king of jungle.`)
}

for ( let breed of animals[1]){
    console.log(`${animals[1]}are silent hunters.`)
}

for ( let breed of animals[2]){
    console.log(`${animals[2]} is the fastest animal on earth.`)
}


for(let breeds of animals ){
    console.log("All animals in above list are predators and belong to cat family.")
}