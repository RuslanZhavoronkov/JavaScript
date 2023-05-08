//Функция makePassword получает пароль в аргументе и возвращает функцию,
//которая принимает введенную строку и возвращает true, если введенная строка совпадает с паролем

function makePassword (password) {
    return function guess (passwordGuess) { 
        return (passwordGuess === password);
    }
}

var tryGuess = makePassword ("secret"); //возвращается  функция guess
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));