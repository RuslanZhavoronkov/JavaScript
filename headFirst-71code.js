//Создадим массив пассажиров passengers
var passengers = [
    {name: "Jane Doloop", paid: true},
    {name: "Dr. Evel", paid: true},
    {name: "Sue Property", paid: false},
    {name: "John Funcall", paid: true}
];

//Создадим функцию, которая перебирает всех пассажиров. Функция принимает два аргумента: массив пассажиров и функцию-проверку пассажира по заданному условию
function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false; //пассажиры не допускаются на борт самолета
        }
    }
    return true; //пассажиры допускаются на борт самолета
}

//Создадим функцию которая  проверяет имя пассажира в черном списке. Доктора зло нельзя пускать на борт самолета
function checkNoFlyList(passenger) {
    return(passenger.name === "Dr. Evel"); // Функция возвращает true, если имя пассажира Dr. Evel
}

//Создадим функцию которая проверяет оплатил ли пассажир или нет
function checkNotPaid(passenger) {
    return (!passenger.paid); //Функция возввращает true, если пассажир не оплатил
}

//
var allCanFly = processPassengers(passengers, checkNoFlyList);//Здесь функция processPassengers проверяет каждого пассажира на присутствие в "черном списке"
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list");
}

var allPaid = processPassengers(passengers, checkNotPaid); //Здесь функция processPassengers проверяет каждого пассажира на оплату билета
if(!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

function printPassenger (passenger) {
    var namePassenger = passenger.name;
    var infoPaid = passenger.paid;

    if (infoPaid) {
        console.log (namePassenger + " has paid")
    } else {
        console.log (namePassenger + " has not paid");
    }

    return false;
}

processPassengers(passengers, printPassenger);