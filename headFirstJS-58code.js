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

//Создадим объект MODEL, содержащую информацию о текущем состоянии игры
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


//Создадим вспомагательную функцию parseGuess, которая будет принимать данные от игрока, преобразовывать, проверять на соответствие
function parseGuess (guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) { //проверяем данные на null и убеждаемся, что в строке два символа
        alert ("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0); //Сохраняем первый символ guess (Буква) в переменной firstChar
        var row = alphabet.indexOf(firstChar); //Передаем первый сивол букву методу indexOf массива alphabet и получаем  цифру-индекс и сохр. в перем. row

        var column = guess.charAt(1); //сохраняем вторую "цифру"(строковое значение) в переменной column


        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert ("Oops, that's of the board!");
        } else {       
            return row + column; //В этой точке все проверки пройдены поэтому функция может вернуть результат (число + "строка" = "числострока")
        }
    }
    return null; //Если управление передано в эту точку, значит какая-то проверка не прошла, и метод возвращает null
}

console.log (parseGuess("A0"));
console.log (parseGuess("B6"));
console.log (parseGuess("G3"));
console.log (parseGuess("H0"));
console.log (parseGuess("A7"));


/*
//Создадим объект-Controller(который обрабатывает выстрелы и отвечает за завершение игры)
var controller = {
    guesses: 0, //колличество выстрелов

    processGuess: function(guess) { //Метод получает координаты в формате "A0"
        //Код метода
    }
}
*/