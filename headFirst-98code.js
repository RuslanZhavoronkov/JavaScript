//Создадим конструктор
function Robot (name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

//Настроим прототип конструктора робота Robot
Robot.prototype.maker = "ObjectsRus";
Robot.prototype.errorMessage = "All system go.";

Robot.prototype.reportError = function () { //Метод reportError только использует значение errorMessage(он не переопределяет свойство)
    console.log (this.name + " says " + this.errorMessage);
};

Robot.prototype.spillWater = function () {//Метод spillWater присваивает новое значение this.errorMessage, что приводит к переопределению свойства прототипа для любого робота
    this.errorMessage = "I appear to have a short circuit!";
};

//Создадим объекты роботов с помощью конструктора Robot
var robby = new Robot ("Robby", 1956, "Dr. Morbius");
var rosie = new Robot ("Rosie", 1962, "George Jetson");

rosie.reportError();//Вызываем метод прототипа и используем свойство errorMessage="All system go" прототипа
robby.reportError();//Вызываем метод прототипа и используем свойство errorMessage="All system go" прототипа

robby.spillWater();//Вызываем метод прототипа и переопределяем свойство errorMessage="I appear to have a short circuit!", добавляя его в объект robby

rosie.reportError();//Вызываем метод прототипа, но используем свойство errorMessage="All system go" прототипа
robby.reportError();//вызываем метод прототипа, но используем уже добавленное в экземпляр-robby свойство errorMessage="I appear to have a short circuit!"

console.log (robby.hasOwnProperty("errorMessage")); //true
console.log (rosie.hasOwnProperty("errorMessage")); //false //метод spillWater никогда не вызывался для объекта rosie, поэтому она наследует свойство от прототипа
