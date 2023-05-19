//Создадим конструктор Dog объектов собак
function Dog (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

//Настроим прототип конструктора Dog. Мы хотим, чтобы он содержал свойство species и методы bark, run, wag
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

//Создадим конструктор выставочной собаки ShowDog
function ShowDog (name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);//вызываем конструктор Dog(эти 3 свойства назначаются в this кодом функции Dog)
    this.handler = handler;
}

//Создадим новый пустой объект собаки с помощью конструктора Dog и присвоим его - прототипу конструктора выставочной собаки ShowDog
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;//назначаем прототип конструктора ShowDog конструктору ShowDog

//Настроим новый прототип конструктора ShowDog(являющийся пустым экземпляром конструктора Dog)
ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() {
    console.log ("Stack");
};

ShowDog.prototype.bait = function() {
    console.log ("Bait");
};

ShowDog.prototype.gait = function(kind) {
    console.log (kind + "ing");
};

ShowDog.prototype.groom = function() {
    console.log ("Groom"); 
};

//Создадим объект выставочной собаки с помощью конструктора ShowDog
var scotty = new ShowDog ("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log ("Scotty is a Dog");
}

if (scotty instanceof ShowDog) {
    console.log ("Scotty is a ShowDog");
}

var beatrice = new ShowDog ("Beatrice", "Pomeranian", 5, "Hamilton");



//Создадим объекты собак с помощью конструктора Dog
var fido = new Dog ("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log ("Fido is a Dog");
}

if (fido instanceof ShowDog) {
    console.log ("Fido is a ShowDog");
}


console.log ("Fido constructor is " + fido.constructor);
console.log ("Scotty constructor is " + scotty.constructor);

var fluffy = new Dog ("Fluffy", "Poodle", 30);
var barnaby = new Dog ("Barnaby", "Basset Hound", 55);

var spot = new Dog ("Spot", "Chihuahua", 10);
//Переопределение унаследованного метода bark от прототипа конструктора Dog
spot.bark = function () {
    console.log (this.name + " says WOOF!");
};

fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();
