//Напишем конструктор объектов машин Car
function Car (params) { //Функция принимает объект в параметре
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function () {
        this.started = true;
    };

    this.stop = function () {
        this.started = false;
    };

    this.drive = function () {
        if (this.started) {
            console.log (this.make + " " + this.model + " goes zoom zoom");
        } else {
            console.log (this.make + " " + this.model + " You need to start the engine first.");
        }
    };
}

//Создадим объекты аргументов машин
var chevyParams = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

var cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

var taxiParams = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
}

var fiatParams = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
}

var testCarParams = {
    make: "Webville Motors",
    model: "Test Car",
    year: 2014,
    color: "marine",
    passengers: 2,
    convertible: true,
    mileage: 21
}



//Создадим объекты-машин с помощью конструктора Car
var chevy = new Car (chevyParams);
var cadi = new Car (cadiParams);
var taxi = new Car (taxiParams);
var fiat = new Car (fiatParams);
var testCar = new Car (testCarParams);

//Создадим массив объектов
/*var cars = [chevy, cadi, taxi, fiat, testCar];

for (var i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}*/

cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();