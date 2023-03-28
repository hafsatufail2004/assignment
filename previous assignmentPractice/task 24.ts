let a1:string = "Farah";
let b1:string = "Ayza";
let c1 = (a1 == b1)? "True":"False"; //equality test (false)
console.log(c1);

let a2:string = "Zara";
let b2:string="Zara";
let c2 = (a2===b2)? "True": "False";//equality test (true)
console.log(c1);

let a3:string = "Fiza";
let b3:string = "Sarah";
let c3= (a3 != b3)? "True":"False";//inequality test (true)
console.log(c3);

let a4:string = "Babar";
let b4:string = "Babar";
let c4 = (a4 !== b4)? "True":"False";// inequality test (false);
console.log(c4);


let a5:string = "Hafsa Tufail"; //using lowercase
let b5:string = "Hello World";
if(a5.toLowerCase() === b5.toLowerCase()){
    console.log("True.")
}else{
    console.log("False")
}

let anum:number= 34; //equality test using numbers (true)
let bnum:number=34;
console.log(anum == bnum);

let num1:number = 58;//equality test using numbers (false)
let num2:number = 85;
console.log(num1 === num2);

let a0num:number= 34; // inequality test using numbers (false)
let b0num:number=34;
console.log(a0num != b0num);

let num01:number = 58;// inequality test using numbers (true)
let num02:number = 85;
console.log(num01 !== num02);

let lnum12:number =109;//greater than test (true)
let lnum21:number =99;
console.log(lnum12 > lnum21);

let gnum1:number = 90; //greater than test  (false)
let gnum2:number=100;
console.log(gnum2 > gnum2);

let lnum1:number =79;//less than test  (true)
let lnum2:number =99;
console.log(lnum1 < lnum2);

let gnumb1:number = 90; //less than test  (true)
let gnumb2:number =100;
console.log(gnumb1 < gnumb2);

let y:number = 105; //less than or equal to comparison (true)
let y1:number =110;
console.log(y <= y1)

let y01:number = 125; //less than or equal to comparison (false)
let y10:number =110;
console.log(y01 <= y10)


let z :number = 567;//greater than or equal to operator (true)
let z1:number =546;
console.log( z >= z1)

let z01 :number = 537;//greater than or equal to operator (false)
let z10:number =546;
console.log( z01 >= z10)

let and:number= 19; // and operator 
if(and > 18 && and <25 ){
    console.log("True")
}

let and1:number= 19; // and operator 
if(and1 > 18 && and1 <18 ){
    console.log("False")
}

let or:number = 25;//or operator
if(or< 26 || or > 30){
    console.log("True")
};

let or1:number = 25;//or operator
if(or1< 26 || or1 > 24){
    console.log("False")
};

let arr:string[]=["Books","Notebooks","Pens","Pencils","ColourPencils"];
if(arr.includes("Pens")){
    console.log("True")
}


let arr1:string[]=["Books","Notebooks","Pens","Pencils","ColourPencils"];
if(arr1.includes("Pens")){
    console.log("False")
}


let thing:string[] = ["Chairs","Tables","Board","Ink"];
if(thing.includes("duster")){
    console.log("true")
}

let thing1:string[] = ["Chairs","Tables","Board","Ink"];
if(thing1.includes("Chair")){
    console.log("false")
}