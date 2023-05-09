//Задача: функция multN(n) получает число (назовем его n) и возвращет функцию. Эта функция также получает число, умножает его
// на n  и возвращает результат

function multN(n) {
    return function multM(m) {
        return m * n; //переменная m - локальная, переменная n - свободная(не ОБЪЯВЛЯЕТСЯ в локальной области функции multM)
    }

}

var numbers = multN(5);//получается зымыкание(возвращается функция multM + окружение со свободной переменной n)

console.log(numbers(5));// return 25
console.log(numbers(2));//return 10
console.log(numbers(8));