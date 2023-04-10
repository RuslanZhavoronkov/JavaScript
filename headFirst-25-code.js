var fido = {
    name: "Fido",
    weight: 48,
    breed: "Mixed",
    loves: "walks"
};

// Напишем функцию сброса веса для собак с параметрами: объект, вес-который необходимо скинуть

function loseWeight (dog, amount) {
    dog.weight = dog.weight - amount;
}

loseWeight (fido, 10);

alert (fido.name + " now weighs " + fido.weight);
