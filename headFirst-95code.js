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