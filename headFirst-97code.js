// Игра роботов

//1.Напишем конструктор Game
function Game() {
    this.level = 0;
}

//1.1 Настроим прототип конструктора Game
Game.prototype.play = function() {
    //Действия игрока
    this.level++;
    console.log ("Welcome to level " + this.level);
    this.unclock();
}

Game.prototype.unclock = function () {
    if (this.level === 42) {      //при достижении уровня 42 у объектов роботов появляется новая способность стрелять глазами
        Robot.prototype.deployLaser = function () { //(Добавляется новой метод в прототип конструктора роботов)
            console.log (this. name + " is blasting you with laser beams");
        };
    }
};


//2.Создадим конструктор объектов Robot
function Robot (name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

//2.1 Настроим прототип конструктора Robot
Robot.prototype.deployLaser = function () {
    console.log();
};

//Создадим объект игры game конструктором Game
var game = new Game();

//Создадим объекты роботов конструктором Robot
var robby = new Robot ("Robby", 1956, "Dr.Morbius");
var rosie = new Robot ("Rosie", 1962, "George Jetson");

while (game.level < 42) {
    game.play();
}

robby.deployLaser();
rosie.deployLaser();