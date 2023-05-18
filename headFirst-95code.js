//Создадим конструктор Dog объектов собак
function Dog (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

//Настроим прототип конструктора. Мы хотим, чтобы он содержал свойство species и методы bark, run, wag
Dog.prototype.species = "Canine"; //Добавим свойство species в прототип конструктора Dog

//Добавим методы в прототип конструктора Dog
Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log (this.name + " says Woof!");
    } else {
        console.log (this.name + " says Yip!");
    }
};

Dog.prototype.run = function () {
    console.log ("Run!");
};

Dog.prototype.wag = function () {
    console.log ("Wag!");
};

Dog.prototype.sit = function () {
    if (this.sitting) {
        console.log (this.name + " is already sitting"); //Собака уже сидит
    } else {
        this.sitting = true; //происходит переопределение свойства прототипа, а значение задается в экземпляре. Экземпляр теперь имеет собственное свойство sitting = true
        console.log (this.name + " is now sitting");
    }
   
};

Dog.prototype.sitting = false;


//Создадим объекты собак с помощью конструктора Dog
var fido = new Dog ("Fido", "Mixed", 38);
var fluffy = new Dog ("Fluffy", "Poodle", 30);
var barnaby = new Dog ("Barnaby", "Basset Hound", 55);

var spot = new Dog ("Spot", "Chihuahua", 10);
//Переопределение унаследованного метода bark от прототипа конструктора Dog
spot.bark = function () {
    console.log (this.name + " says WOOF!");
};

fido.bark();
fido.run();
fido.wag();
console.log (fido.species);

fluffy.bark();
fluffy.run();
fluffy.wag();
console.log (fido.species);

spot.bark();
spot.run();
spot.wag();
console.log (fido.species);

barnaby.sit();//Вызываем метод хранящийся в прототипе Dog для объекта barnaby
barnaby.sit();

spot.sit();
spot.sit();

console.log (spot.hasOwnProperty("sitting"));

console.log (spot.hasOwnProperty("species"));
console.log (fido.hasOwnProperty("species"));

console.log (fido.hasOwnProperty("sitting"));

fido.sit();
console.log(fido.hasOwnProperty("sitting"));