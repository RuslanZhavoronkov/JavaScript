function dogCatcher (obj) {
    if (obj instanceof Dog) {
        return true;
    } else {
        return false;
    }
}

//Напишем конструктор Cat
function Cat (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var meow = new Cat ("Meow", "Siamese", 10);//сохраним экземпляр(объект) конструктора Cat в переменной meow
var whiskers = new Cat ("Whiskers", "Mixed", 12);//сохраним экземпляр(объект) конструктора Cat в переменной whiskers

//Создадим объект-литерал и сохраним в переменной fido
var fido = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};

//Напишем конструктор Dog
function Dog (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    this.bark = function () {
        if (this.weight > 25) {
            console.log (this.name + " says Woof!");
        } else {
            console.log (this.name + " says Yip!");
        }
    };
}

var fluffy = new Dog ("Fluffy", "Poodle", 30); //сохраним экземпляр(объект) конструктора Dog в переменной fluffy
var spot = new Dog ("Spot", "Chihuahua", 10); //сохраним экземпляр(объект) конструктора Dog в переменной spot

//Напишем массив объектов, созданных конструкторами Cat & Dog и сохраним в переменнной dogs :)
var dogs = [meow, whiskers, fido, fluffy, spot];

//напишем цикл перебора массива dogs
for (var i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " is a dog!");
    }
}

