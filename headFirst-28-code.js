var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    // добавим метод в объект (функции определяемые в объекте)
    drive: function () {          
        alert ("Zoom zoom !");
    }
};

fiat.drive();