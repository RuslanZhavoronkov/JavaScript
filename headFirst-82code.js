//Функция makePassword получает пароль в аргументе и возвращает функцию,
//которая принимает введенную строку и возвращает true, если введенная строка совпадает с паролем

function makePassword (password) {//функция возвращаемая из makePassword, представляет собой замыкание с окружением, содержащим свободную переменную password
    return function guess (passwordGuess) { 
        return (passwordGuess === password);
    }
}

var tryGuess = makePassword ("secret"); //Мы передаем функции makePassword значение "secret", которое сохраняется в окружении замыкания
                                        //(возвращаем функцию guess(passwordGuess и присваиваем переменной tryGuess )
console.log("Guessing 'nope': " + tryGuess("nope")); // 
console.log("Guessing 'secret': " + tryGuess("secret"));