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

