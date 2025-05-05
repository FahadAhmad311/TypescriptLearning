type CarYear = number;
type CarModel = string;
type CarType = string;

type Car = {
    year : CarYear,
    type : CarType,
    model : CarModel
};

const carYear : CarYear = 2022;
const carType : CarType = "Altis Grende";
const carModel : CarModel = "Toyota";

console.log(carType);

const car : Car = {
    year : carYear,
    type : carType,
    model :carModel 
};

console.log(car);