var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false, //свойсво для хранения текущего состояния двигателя
    
    //добавим метод для запуска двигателя
    start: function() {
        this.started = true;
    },

    //добавим метод для остановки двигателя
    stop: function() {
        this.started = false;
    },

    // добавим метод в объект (функции определяемые в объекте)
    drive: function () {          
        if (this.started) {
            alert ("Zoom zoom !");
        } else {
            alert ("You need to start the engine first");
        }
       
    }
};

fiat.drive();