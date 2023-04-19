//Программа для поиска машин на стоянке

var chevy = {
    make: "Chevy",
    model: "Bel Air"
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi"
};

var fiat1 = {
    make: "Fiat",
    model: "500"
};

var fiat2 = {
    make: "Fiat",
    model: "500"
};

//Создаем массив из объектов-машин
var lot = [chevy, taxi, fiat1, fiat2];

//Напишем функцию по поиску машин на стоянке
function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }
}

//Создадим глобальные ссылочные переменные, содержащие ссылки на объекты-машины(вернувшиеся из функции)
var loc1 = findCarInLot(fiat2);
console.log(findCarInLot(fiat2));
var loc2 = findCarInLot(taxi);
console.log(findCarInLot(taxi));
var loc3 = findCarInLot(chevy);
console.log(findCarInLot(chevy));
var loc4 = findCarInLot(fiat1);
console.log(findCarInLot(fiat1));