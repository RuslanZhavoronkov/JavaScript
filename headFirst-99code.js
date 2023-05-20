//Создадим конструктор робота
function Robot (name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.toString = function () {
    return this.name + " Robot belonging to "  + this.owner;//Переопределение свойства toString прототипа главного конструктора Object 
};
//Создадим экземпляр конструктора Robot
var toy = new Robot ("Toy", 2013, "Avary");

//console.log (toy.toString());

console.log ("Robot is " + toy);

//Переопределим метод toString

function meditate() {
    console.log ("Everything is an object");
}
console.log (meditate instanceof Object);