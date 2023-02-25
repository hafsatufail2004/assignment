
 let fpeople:string[] = ["Fatima","Zara","Bushra","Nayab"]
console.log(fpeople)
console.log(`Hello ${fpeople[0]},you are invited to dinner at 8:00,tomorrow`)

console.log(`Hello ${fpeople[1]},I would love it, if you join
 us for dinner tomorrow at 8:00`)

 console.log(`Hello ${fpeople[2]},would you like to join us for dinner tomorrow at 8:00`)

 console.log(`Hello ${fpeople[3]},you are invited to dinner at 8:00,tomorrow`)
 


for (let index = 0; index < fpeople.length; index++){
console.log(fpeople + `I have just found a bigger table 
for dinner so all of you are invited to dinner`)
}



console.log(`Hello ${fpeople[0]},you are invited to dinner at 8:00,tomorrow`)

console.log(`Hello ${fpeople[1]},I would love it, if you join
 us for dinner tomorrow at 8:00`)

 console.log(`Hello ${fpeople[2]},would you like to join us for dinner tomorrow at 8:00`)

 console.log(`Hello ${fpeople[3]},you are invited to dinner at 8:00,tomorrow`)



fpeople.unshift("Ayza") //ayza is added to the beginning of list
console.log(fpeople +" ")
console.log(`Hello Ayza, I would love it, if you join
 us for dinner tomorrow at 8:00`)
 


fpeople.splice(2,0,"Farah")//farah is addad in the middle of the list
console.log(fpeople + " ")
console.log(`Hello Farah ,I would love it, if you join
 us for dinner tomorrow at 8:00`)

fpeople.push("Sadia")//sadia is add at the last of this list
console.log(fpeople + " ")
console.log(`Hello Sadia,you are invited to dinner at 8:00,tomorrow at 8:00`)
 

