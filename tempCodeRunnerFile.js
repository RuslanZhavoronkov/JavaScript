//Задача: функция multN(n) получает число (назовем его n) и возвращет функцию. Эта функция также получает число, умножает его
// на n  и возвращает результат

function multN(n) {
    function multM(m) {
        return m * n;
    }

    return multM;
}

var numbers = multN(5);

console.log(numbers(5));
console.log(numbers(2));