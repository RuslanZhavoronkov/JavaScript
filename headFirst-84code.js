//Задача: Разновидность счетчика. Функция makeCounter не получает аргументов, но объявляет переменную count.
//Затем она создает и возвращает объект с единственным методом increment. Этот метод увеличивает переменную count и возвращает ее

function makeCounter() {
    var count = 0;
    return {
        increment: function() {
            count++;
            return count;
        }
    }
        
}

var result = makeCounter();//получаем объект с замыканием и сохраняем его в переменной result
console.log(result.increment()); //вызываем метод. Метод обращается к переменной count в своем окружении
console.log(result.increment());
