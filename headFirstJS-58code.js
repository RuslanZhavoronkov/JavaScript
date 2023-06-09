//Создадим объект-ПРЕДСТАВЛЕНИЕ(вывод сообщения, изображений кораблей(при попадании), изображений miss(при промахах))
var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    //Функции, рисующей корабль в ячейке передается позиция (id) ячейки
    displayHit: function(location) {  //Если человек подбил корабль. В ячейке появляется корабль,т.к.
        var cell = document.getElementById(location);// ячейки с id равной переданому аргументу
        cell.setAttribute("class", "hit");//объекту-ячейке присваивается класс "hit" с фоновым изображением корабля
    },

    //Функции, рисующей надпись промах в ячейке передается позиция (id) ячейки 
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss"); //объекту-ячейке присваивается класс "miss" с фоновым изображением надписи "MISS"
    }
}

//Создадим объект MODEL, содержащую информацию о текущем состоянии игры
var model = {
    boardSize: 7, //размер игрового поля
    numShips: 3, //количество кораблей в игре
    shipLength: 3, //длина корабля в клетках
    shipsSunk: 0, //количество попаданий

    ships: [ //Информация о местоположении кораблей(локация и информация о попадании)
        {locations: ["0", "0", "0"], hits: ["", "", ""]},
        {locations: ["0", "0", "0"], hits: ["", "", ""]},
        {locations: ["0", "0", "0"], hits: ["", "", ""]}
    ],

    fire: function (guess) { //получаем координаты выстрела
        for (var i = 0; i < this.numShips; i++) { //Перебираем массив ships, последовательно, проверяя каждый корабль-объект
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
    isSunk: function (ship) { //Перебираем массив hit объекта-корабляронт
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") { //Если есть хотя бы одна клетка, в которую еще не попал игрок, то корабль еще не потоплен (возвращает false)
                return false;
            }
        }
        return true; //А если нет-корабль потоплен! Метод возвращает true
    },

    //Метод, создающий три массива locations объектов-кораблей со случайным набором позиций
    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip(); //генерируем новый случайный массив locations
            } while (this.collision(locations)); // после проверки массив locations
            this.ships[i].locations = locations; //сохраняются в свойстве  locations объекта корабля в массиве model.ships
        }
    },

    //Метод generateShip - создает массив со случайными позициями корабля
    generateShip: function () {
        var direction = Math.floor(Math.random() * 2);
        var row;
        var col;

        if (direction === 1) {
            //Сгенерировать начальную позицию для горизонтального корабля
            row = Math.floor(Math.random * this.boardSize); //горизонтальный корабль может располагаться в любой строке
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength)); //чтобы начальный столбец всегда лежал в диапазоне от 0 до 4
        } else {
            //Сгенерировать начальную позицию для вертикального корабля
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }

        var newShipLocations = [];//набор позиций нового корабля начинается с пустого массива, в который последовательно добавляются элементы
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                //Добавить в массив для горизонтального корабля
                newShipLocations.push(row + "" + (col + i));
            } else {
                //Добавить в массив для вертикального корабля
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },


    collision: function (locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = model.ships[i]; //внешним циклом for перебираем поочередно объекты-корабли
            for (var j = 0; j < locations.length; j++) {   //внутренним циклом for перебираем переданный новый массив locations
                if (ship.locations.indexOf(locations[j]) >=0 ) { //методом indexOf проверяем присутствует ли заданная позиция в массиве объекта
                    return true; //перекрытие обнаружено
                }
            }
        }
        return false; //перекрытия позиций отсутствуют 
    }
};


//Создадим вспомагательную функцию parseGuess, которая будет принимать данные от игрока, преобразовывать, проверять на соответствие
// в итоге выводить стоку "числочисло"
function parseGuess (guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) { //проверяем данные на null и убеждаемся, что в строке два символа
        alert ("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0); //Сохраняем первый символ guess (Буква) в переменной firstChar
        var row = alphabet.indexOf(firstChar); //Передаем первый сивол букву методу indexOf массива alphabet и получаем  цифру-индекс и сохр. в перем. row

        var column = guess.charAt(1); //сохраняем вторую цифру в переменной column


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



//Создадим объект-Controller(который обрабатывает выстрелы и отвечает за завершение игры)
var controller = {
    guesses: 0, //колличество выстрелов

    processGuess: function(guess) { //Метод получает координаты в формате "A0"
        var location = parseGuess(guess); //будем использовать вспомогательную функцию parseGuess для проверки введенных данных и пребразов. данных в числочисло
        if (location) {
            this.guesses++;
            var hit = model.fire(location); //передаем методу fire объекта модель аргумент-координата выстрела location
            
            //(hit при попадании возвращает true(из метода model.fire(location))). 
            //Если выстрел попал в цель, а количество потопленных кораблей равно количеству кораблей в игре,
            //Выводится сообщение о том, что все корабли потоплены

            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
}
 
//Создадим функцию для размещения кода
function init() {
    var fireButton = document.getElementById("fireButton"); //Получаем ссылку на кнопку "Fire!" по идентификатору кнопки
    fireButton.onclick = handleFireButton // событие onclick и функция - "обработчик события" handleFireButton, которая будет вызываться при каждом нажатии кнопки "Fire!"
   
    var guessInput = document.getElementById("guessInput");//сохраним в переменной ссылку на объект поле ввода
    guessInput.onkeydown = handleKeyPress; //вызвать функцию-обработчик события при нажатии кнопки  на поле ввода

    model.generateShipLocations();

}

//Создадим функцию-обработчик события (нажатие кнопки "Fire!")
function handleFireButton() {   //Функция-обработчик события, нажатия кнопки 'Fire!'
    //Код получения данных от формы
    var guessInput = document.getElementById("guessInput") //получаем ссылку на элемент (поле ввода)
    var guess = guessInput.value; //Сохраняем в переменной guess значение (координаты выстрела), введенное пользователем
    controller.processGuess(guess); //вызываем метод объекта controller.processGuess и передаем аргументом в функцию, введенные координаты пользователем 

    guessInput.value = "";//удаляем содержимое поля ввода
}  

//Создадим функцию-обработчик события при нажатии кнопки enter на поле ввода
function handleKeyPress(e) { //Браузер передает объект-события обработчику. Объект содержит информацию какая клавиша была нажата
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) { //Свойство-объекта события
        fireButton.click();//Вызов метода click() кнопки fireButton(фактически этот вызов имитирует нажатие кнопки fireButton)  
        return false; //чтобы форма не делала ничего лишнего
    }
}

window.onload = init //Браузер будует выполнять функцию init при полной загрузке страницы