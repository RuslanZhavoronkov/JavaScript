//Создадим конструктор
function Robot (name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

//Настроим прототип конструктора робота Robot
Robot.prototype.maker = "ObjectsRus";
Robot.prototype.errorMessage = "All system go.";

Robot.prototype.reportError = function () {
    console.log (this.name + " says " + this.errorMessage);
};

Robot.prototype.spillWater = function () {
    this.errorMessage = "I appear to have a short circuit!";
};

//Создадим объекты роботов с помощью конструктора Robot
var robby = new Robot ("Robby", 1956, "Dr. Morbius");
var rosie = new Robot ("Rosie", 1962, "George Jetson");

rosie.reportError();//Вызываем метод прототипа и добавляем этим методом свойство errorMessage="All system go" объекту rosie
robby.reportError();//Вызываем метод прототипа и добавляем этим методом свойство errorMessage="All system go" объекту robby

robby.spillWater();//Вызываем метод прототипа и изменяем значение уже ранее добавленного свойства errorMessage="I appear to have a short circuit!"

rosie.reportError();//Вызываем метод прототипа, но используем уже добавленное в экземпляр-rosie свойство errorMessage="All system go"
robby.reportError();//вызываем метод прототипа, но используем уже добавленное в экземпляр-robby свойство errorMessage="I appear to have a short circuit!"

console.log (robby.hasOwnProperty("errorMessage"));
console.log (rosie.hasOwnProperty("errorMessage"));
