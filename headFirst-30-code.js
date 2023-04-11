var eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],

    //добавим метод shake в функцию
    shake: function() {
        this.index = this.index + 1;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },

    //добавим метод look
    look: function () {
        return this.advice[this.index];
    }
};

eightBall.shake();
console.log(eightBall.look());