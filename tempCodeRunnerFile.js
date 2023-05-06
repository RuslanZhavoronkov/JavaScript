//Отсортируем массив объектов продуктов Колы

//массив продуктов-объектов
var products = [
    {name: "Grapefruit", calories: 170, color: "red", sold: 8200},
    {name: "Orange", calories: 160, color: "orange", sold: 12101},
    {name: "Cola", calories: 210, color: "caramel", sold: 25412},
    {name: "Diet Cola", calories: 0, color: "caramel", sold: 43922},
    {name: "Lemon", calories: 200, color: "clear", sold: 14983},
    {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
    {name: "Root Beer", calories: 200, color: "caramel", sold: 9909},
    {name: "Water", calories: 0, color: "clear", sold: 62123}
];

//отсортируем массив объектов по колличеству проданных бутылок (sold)

//Напишем функцию сравнения двух свойств sold объектов
function compareSold (colaA, colaB) { //функция принимает два объекта, так как массив состоит из объектов
   /* if (colaA.sold > colaB.sold) {
        return 1; //Надо переставлять
    } else if (colaA.sold === colaB.sold) {
        return 0; //Переставлять не надо
    } else {
        return -1; //Переставлять не надо
    }*/

    //Сократим код функции-сравнения
        return colaA.sold - colaB.sold; // Если возращается больше 0б то надо переставлять(менять объекты местами) (по возрастанию)
}

function printProducts(products) {
    for (var i = 0; i < products.length; i++) {
        console.log ("Name: " + products[i].name + ", Calories: " + products[i].calories + ", Color: " + products[i].color + ", Sold: " + products[i].sold);
    }
}

//применим метод sort к массиву products для сортировки объетов массива по свойству sold в порядке возрастания
products.sort(compareSold);
printProducts (products);