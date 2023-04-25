//Создадим объект-ПРЕДСТАВЛЕНИЕ(вывод сообщения, изображений кораблей(при попадании), изображений miss(при промахах))
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

//Создадим объект model, содержащую информацию о текущем состоянии игры
var model = {
    boardSize: 7, //размер игрового поля
    numShips: 3, //количество кораблей в игре
    shipLength: 3, //длина корабля в клетках
    shipsSunk: 0, //количество попаданий

    ships: [ //Информация о местоположении кораблей(локация и информация о попадании)
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]},
        {locations: ["10", "11", "12"], hits: ["", "", ""]}
    ],

    fire: function (guess) { //получаем координаты выстрела
        for (var i = 0; i < this.numShips; i++) { //Перебираем массив ships, последовательно, проверяя каждый корабль
            var ship = this.ships[i]; //Получаем объект ship
            var index = ship.locations.indexOf(guess); //Затем индекс клетки в locations(Метод indexOf ищет в массиве указанное значение и возвращает его индекс (или -1 если значение отсутствует в массиве))
            if (index >= 0) {              //Если координаты клетки присуствуют в массиве locations, значит выстрел попал в цель
                ship.hits[index] = "hit"; //Ставим отметку в массиве hits по тому же индексу
                view.displayHit(guess); //Приказываем представлению (объекту view) вывести маркер попадания
                view.displayMessage("Hit!"); //Приказываем представлению (объекту view) вывести сообщение "Hit" 
                if (this.isSunk(ship)) { //Если корабль потоплен, то мы увеличиваем счетчик потопленных кораблей в свойстве shipsSunk
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true; // А еще нужно вернуть true, потому что выстрел оказался удачным
            }
        }
        view.displayMiss(guess); //Не попали! Приказаваем объекту view (представлению) вывести маркер-промаха 
        view.displayMessage("You missed."); //Приказываем представлению вывести сообщение о промахе
        return false; //Если же после перебора всех кораблей попадание так и не обнаружено (игрок промахнулся), а метод возвращает false
    },

    //Метод проверяет потоплен ли кораблль или нет
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") { //Если есть хотя бы одна клетка, в которую еще не попал игрок, то корабль еще не потоплен (возвращает false)
                return false;
            }
        }
        return true; //А если нет-корабль потоплен! Метод возвращает true
    }
};

model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");