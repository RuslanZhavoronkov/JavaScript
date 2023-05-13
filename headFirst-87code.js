//1.Создаем конструктор объектов Dog для собак
function Dog (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

//2.Создаем объекты с помощью конструктора Dog

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

var dogs = [fido, fluffy, spot]; //Создадим массив объектов

for (var i = 0; i < dogs.length; i++) {
    var size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log ("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);   

}

