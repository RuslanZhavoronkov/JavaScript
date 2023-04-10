//Создаем объект dog
var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    bread: "mixed",
    activity: "fetch balls"
};

//Создаем переменную с лаем
var bark;

if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);