var emot = "XOxxOO";
var hugs = 0;
var kisses = 0;

emot = emot.trim(); // метод удаляет пробельные символы с начала и конца строки
emot = toUpperCase(); //Переводит символы строки в верхний регистр

for (var i = 0; i < emot.length; i++) {
    if (emot.charAt(i) === "X") { //Получает символ с конкретным индексом в строке 
        hugs++;
    } else if (emot.charAt(i) == "O") {
        kisses++;
    }
}