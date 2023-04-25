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
    shipSunk: 0, //количество попаданий

    ships: [ //Информация о местоположении кораблей(локация и информация о попадании)
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]},
        {locations: ["10", "11", "12"], hits: ["", "", ""]}
    ],

    fire: function (guess) { //получаем координаты выстрела
        for (var i = 0; i < this.numShips; i++) { //Перебираем массив ships, последовательно, проверяя каждый корабль
            var ship = this.ships[i]; //Получаем объект ship
            var locations = ship.locations; //Затем получаем массив locations из объекта ship
            var index = locations.indexOf(guess); //Затем индекс клетки в locations(Метод indexOf ищет в массиве указанное значение и возвращает его индекс (или -1 если значение отсутствует в массиве))
            if (index >= 0) {              //Если координаты клетки присуствуют в массиве locations, значит выстрел попал в цель
                ship.hits[index] = "hit";  //Ставим отметку в массиве hits по тому же индексу
                return true; // А еще нужно вернуть true, потому что выстрел оказался удачным
            }
        }
        return false; //Если же после перебора всех кораблей попадание так и не обнаружено (игрок промахнулся), а метод возвращает false
    }
};

