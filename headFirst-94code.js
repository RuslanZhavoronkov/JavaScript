function CarPrototype() {
    this.make = "Webville Motors";
    this.year = 2013;
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

var taxi = new CarPrototype();
taxi.model = "Delorean Remake";
taxi.color = "silver";
taxi.currentTime = new Date();
taxi.fluxCapacitor = {
    type: "Mr. Fusion"
}