var fiat = {
    make: "Fiat",
    model: "500",
    started: false,

    fuel:0,

    start: function() {
        if (this.fuel == 0) {
            alert ("The car is on empty, fill up before starting");
            
        } else {
            this.started = true;
            alert("Ooooo ... yeeeessss");
            
        }
        
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
           if (this.fuel > 0) {
            alert (this.make + " " + this.model + " goes zoom zoom!");
            this.fuel = this.fuel - 1;
           } else {
            alert ("Uh oh, out of fuel.");
            this.stop();
           }
           
        } else {
          alert ("You need to start the engine first");
        }
    },

 // Метод, добавляющий топливо (поведение влияет на состояние)
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();