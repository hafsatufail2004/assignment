interface Cars {
    manufacturer:string;
    model:string;
    [key:string]:any;
}

function createCar(manufacturer:string,model:string, ...options:any[]):Cars{
    const  car:Cars = {
        manufacturer,
        model,
    
};
for (let i = 0 ; i< options.length ;i +=2){
const key = options[i];
const value = options[i + 1];
car[key] = value;
}
return car;
}

const myCar = createCar("Toyota","Corolla","color","blue","autopilot",true);
console.log(myCar)

