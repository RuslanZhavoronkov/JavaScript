var fiat = {
    make: "Fiat",
    model: "500",
    started: false,

    fuel:0,

    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            alert (this.make + " " + this.model + " goes zoom zoom!");
        } else {
          alert ("You need to start the engine first");
        }
    },

 // Метод, добавляющий топливо (поведение влияет на состояние)
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};