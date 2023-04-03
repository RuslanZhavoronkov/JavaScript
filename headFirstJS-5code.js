//Корабль размещается в клетках 3, 4, 5
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess; //номер ячейки, введенный пользователем (переменная пустая (undefined) пока пользователь не введет координаты выстрела)
var hits = 0;  //кол-во попаданий (начальное значение 0)
var guesses = 0; // кол-во попыток (начальное значение 0)
var isSunk = false;   //информация потоплен корабль или нет

while (isSunk == false) {
    guess = prompt ("Ready, aim, fire! (enter a number from 0-6):"); // сохраняем в пустой переменной, введенное пользователем число

    if (guess < 0 || guess > 6) {
        alert ("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) { // Если попал
            alert ("HIT");
            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                alert ("You sank my battleship!");
            }


        } else {       //Если не попал
          alert ("MISS");
        }
    }
}

//Выводим результат для пользователя

var stats = "You took " + guesses + "guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert (stats);