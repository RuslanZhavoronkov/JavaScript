//Создадим базовый конструктор Robot объектов-роботов
function Robot (name, year, owner) {
this.name = name;
this.year = year;
this.owner = owner;
}

//настроим прототип конструктора Robot
Robot.prototype.maker = "ObjectsRUs";

Robot.prototype.speak = function () {
    console.log ("I'm a robot");
};

Robot.prototype.makeCoffee = function () {
    console.log ("I make coffee for you");
};

Robot.prototype.blinkLights = function () {
    console.log ("I can turn on the light for you");
};

//Создадим конструктор новой модели роботов SpaceRobot
function SpaceRobot (name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

//Создадим прототип конструктора SpaceRobot (являющийся пустым экземпляром(объектом) конструктора Robot)- Создадим цепочку прототипов
SpaceRobot.prototype = new Robot();

//Настроим прототип конструктора SpaceRobot
SpaceRobot.prototype.speak = function () {
    console.log (this.name + " says Sir, If I may venture an option ...");
};

SpaceRobot.prototype.pilot = function () {
    console.log (this.name + " says Thrusters? Are they important?");
};

//Создадим объекты - экземпляры космических роботов SpaceRobot
var c3po = new SpaceRobot ("C3PO", 1977, "Luke Skywalker", "Tatooine");
var simon = new SpaceRobot ("Simon", 2009, "Carla Diana", "Earth");


//Содадим объекты-экземпляры конструктора Robot
var robby = new Robot ("Robby", 1956, "Dr. Morbius");
var rosie = new Robot ("Rosie", 1962, "George Jetson");

//настройка объекта robby (экземпляра конструктора Robot)
robby.onOffSwitch = true; //Добавление нового свойства объекту роботу robby
robby.makeCoffee = function () {     //Переопределение метода makeCoffee
    console.log ("I run to Starbucks for coffee");
};

//настройка объекта rosie (экземпляра конструктора Robot)
rosie.cleanHouse = function () {
    console.log ("I can do the house cleaning");
};

console.log (robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee(); //переопределенное свойство-метод экземпляра объекта
robby.blinkLights(); //свойство-метод, хранящийся в прототипе Robot

console.log (rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();


c3po.speak();//из прототипа конструктора SpaceRobot (переопределенной свойство прототипа конструктора Robot)
c3po.pilot(); //метод прототипа конструктора SpaceRobot
console.log (c3po.name + " was made by " + c3po.maker);

simon.makeCoffee(); //метод из прототипа конструктора Robot
simon.blinkLights(); //метод из прототипа конструктора Robot
simon.speak(); //из прототипа конструктора SpaceRobot (переопределенное свойство прототипа конструктора Robot)

