var passengers = [
    {name: "Jane Dooloop", paid: true, ticket: "coach"},
    {name: "Dr. Evel", paid: true, ticket: "firstclass"},
    {name: "Sue Property", paid: false, ticket: "firstclass"},
    {name: "John Funcall", paid: true, ticket: "premium"}
];

function serveCustomer(passenger) { //Операции, выполняемые стюардесами для обслуживания пассажиров
//Предложить напитки
var getDrinkOrderFunction = createDrinkOrder(passenger);//сохраняет переменную с функцией, вернувшейся из функции createDrinkOrder
var getDinnerOrderFunction = createDinnerOrder (passenger); //вызываем функцию и сохраняем вернувшуюся переменную с функцией

//Предлагаем напитки
getDrinkOrderFunction();  //вызываем функцию предложения напитков от пассажиров

//Предложить обед
getDinnerOrderFunction();

getDrinkOrderFunction();
getDrinkOrderFunction();

//Включить кино
getDrinkOrderFunction();

}  


//Напишем функцию предложения напитков в зависимости от класса купленного билета
function createDrinkOrder(passenger) {
    var orderFunction; //Создается переменная для хранения функции, которую мы возвращаем  в зависимости от класса купленного билета
    
    if (passenger.ticket === "firstclass") {  //Если билет первого класса, то переменная orderFunction содержит такую функцию
        orderFunction = function () {
            console.log ("Would you like a coctail or wine");
        }
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            console.log ("Would you like wine, cola or water");
        }

    } else {  //Если билет другого класса, то переменная orderFunction содержит такую функцию
        orderFunction = function () {
            console.log ("Your choice is a cola or water.");
        }
    }

    return orderFunction; //возвращаем переменную, содержащую функцию в зависимости от купленного билета

}

//Напишем функцию предложения обедов в зависимости от класса купленного билета
function createDinnerOrder (passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            console.log ("Would you like chiken or pasta?");
        }
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            console.log ("Would you like a snack box or cheese plate?");
        }
    } else {
        orderFunction = function () {
            console.log ("Would you like peanuts or pretzels?");
        }
    }

    return orderFunction; //Вернем переменную содержащую функцию в зависимости от купленного билета
}

//Напишем функцию которая перебирает всех пассажиров
function servePassengers (passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);//операции выполняемые стюардесами для обслуживания клиентов
    } 
}

servePassengers(passengers);




